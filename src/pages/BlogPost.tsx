import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition mb-8 font-medium">
          <ArrowLeft className="h-4 w-4" /> Quay lại danh sách
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-2 text-amber-600 font-bold mb-4">
            <Calendar className="h-5 w-5" />
            {post.date}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none prose-a:text-amber-600 hover:prose-a:text-amber-700 prose-img:rounded-xl">
            <Markdown>{post.content}</Markdown>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
