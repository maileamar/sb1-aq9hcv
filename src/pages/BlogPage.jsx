import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { blogPosts } from '../data/blogPosts';
import { format } from 'date-fns';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="bg-red-800 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-white mb-6">Blog</h1>
            <p className="text-xl text-white/90 mb-8">
              Insights and updates from the world of international hiring
            </p>
            
            {/* Category Filter */}
            <div className="flex justify-center gap-4 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category 
                      ? 'bg-white text-red-800' 
                      : 'bg-red-700 text-white hover:bg-red-600'}`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to={`/blog/${post.id}`} className="block p-6">
                  <span className="text-sm text-red-600 font-semibold">{post.category}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3 hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                    <span className="text-red-600 hover:text-red-700">Read more →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;