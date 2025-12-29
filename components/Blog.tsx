
import React, { useState } from 'react';
import { BLOG_POSTS } from '../constants';
import { Newspaper } from 'lucide-react';

const BlogCard: React.FC<{ post: any; idx: number }> = ({ post, idx }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group cursor-pointer reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
      <div className="relative h-64 overflow-hidden rounded-2xl mb-6 bg-[#0B192E]">
        {!imageError ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1A1C22] to-[#0B192E]">
             <Newspaper className="w-12 h-12 text-tech-cyan opacity-20" />
          </div>
        )}
        <div className="absolute top-4 left-4 bg-tech-cyan text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {post.category}
        </div>
      </div>
      <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 font-bold">{post.date}</p>
      <h4 className="text-xl font-bold leading-tight group-hover:text-tech-cyan transition-colors line-clamp-2">
        {post.title}
      </h4>
      <div className="mt-4 flex items-center space-x-2 text-tech-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Ler artigo</span>
        <span>→</span>
      </div>
    </div>
  );
};

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-[#1A1C22]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
          <div>
            <h2 className="text-tech-cyan uppercase tracking-widest font-bold mb-4">Insights NYRA</h2>
            <h3 className="text-4xl md:text-6xl font-black">Conteúdo & <span className="text-tech-cyan">Tendências</span></h3>
          </div>
          <button className="text-tech-cyan font-bold hover:underline py-2 uppercase text-xs tracking-[0.2em]">Ver todos os artigos →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, idx) => (
            <BlogCard key={idx} post={post} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
