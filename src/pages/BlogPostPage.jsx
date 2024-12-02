import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { marked } from 'marked';
import Navbar from '../components/Navbar';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="bg-red-800 min-h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-white/90 hover:text-white underline">
              Return to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-red-800 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-8 shadow-xl"
          >
            <Link to="/blog" className="text-red-600 hover:text-red-700 mb-8 inline-block">
              ← Back to Blog
            </Link>
            
            <header className="mb-8">
              <span className="text-sm text-red-600 font-semibold">{post.category}</span>
              <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-600 text-sm">
                <span>{post.author}</span>
                <span className="mx-2">•</span>
                <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
              </div>
            </header>

            <div 
              className="prose prose-red max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />

            <footer className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </footer>
          </motion.article>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;