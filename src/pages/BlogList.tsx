import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogList() {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">NHẬT KÝ <span className="text-amber-600">DỰ ÁN</span></h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Cập nhật tiến độ thi công và những thông tin mới nhất từ công trường Heragon City mỗi ngày.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-amber-200 transition group flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block h-60 overflow-hidden relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg flex items-center gap-2 text-sm font-bold text-amber-600">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition"
                >
                  Đọc tiếp <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
