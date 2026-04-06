import React from 'react';
import { Gem, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToForm = () => {
    if (isHome) {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#lead-form';
    }
  };

  return (
    <nav className="absolute top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Gem className="h-8 w-8 text-amber-600" />
          <span className="text-2xl font-bold tracking-tighter text-slate-900">HERAGON<span className="text-amber-600">CITY</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <a href="/#tong-quan" className="text-sm font-medium hover:text-amber-600 transition">Tổng quan</a>
          <a href="/#vi-tri" className="text-sm font-medium hover:text-amber-600 transition">Vị trí</a>
          <a href="/#mat-bang" className="text-sm font-medium hover:text-amber-600 transition">Mặt bằng</a>
          <a href="/#video-du-an" className="text-sm font-medium hover:text-amber-600 transition">Video</a>
          <a href="/#san-pham" className="text-sm font-medium hover:text-amber-600 transition">Sản phẩm</a>
          <Link to="/blog" className="text-sm font-medium hover:text-amber-600 transition text-amber-600">Blog / Tiến độ</Link>
          <a href="/#phap-ly" className="text-sm font-medium hover:text-amber-600 transition">Pháp lý</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-amber-600 font-bold">
            <Phone className="h-5 w-5" />
            <span>0838.456.567</span>
          </div>
          <button onClick={scrollToForm} className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-amber-600/30">
            Giữ chỗ sớm
          </button>
        </div>
      </div>
    </nav>
  );
}
