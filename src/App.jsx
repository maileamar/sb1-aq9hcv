import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoadingScreen from './components/LoadingScreen';
import { Toaster } from 'sonner';

// Public Pages
import Hero from './components/Hero';
import WhyVietnam from './components/WhyVietnam';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';

// Protected Pages
import DashboardLayout from './pages/client/DashboardLayout';
import DashboardOverview from './pages/client/DashboardOverview';
import HiringProgress from './pages/client/HiringProgress';
import Team from './pages/client/Team';
import Invoices from './pages/client/Invoices';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<LoadingScreen />}>
          <Toaster position="top-right" />
          <div className="min-h-screen">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={
                <>
                  <Hero />
                  <WhyVietnam />
                  <Services />
                  <HowItWorks />
                  <FAQ />
                  <Footer />
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              
              {/* Protected Routes */}
              <Route path="/client/*" element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<DashboardOverview />} />
                <Route path="hiring" element={<HiringProgress />} />
                <Route path="team" element={<Team />} />
                <Route path="invoices" element={<Invoices />} />
              </Route>
            </Routes>
          </div>
        </Suspense>
      </AuthProvider>
    </Router>
  );
}

export default App;