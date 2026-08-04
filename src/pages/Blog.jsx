import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { blogData } from '../data/blogData';
import { Search, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticle = blogData[0];

  const filteredArticles = useMemo(() => {
    return blogData.filter((post) => {
      if (selectedCategory !== 'All' && post.category !== selectedCategory) return false;
      if (searchTerm.trim() !== '') {
        const kw = searchTerm.toLowerCase();
        const matchTitle = post.title.toLowerCase().includes(kw);
        const matchExcerpt = post.excerpt.toLowerCase().includes(kw);
        if (!matchTitle && !matchExcerpt) return false;
      }
      return true;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div className="bg-white text-[#C9A227] min-h-screen pt-24 pb-20">
      <SEO
        title="Empragold Journal | Luxury Real Estate & Market Intelligence"
        description="Read research articles, high-net-worth real estate market analysis, cap rate reports, and neighborhood spotlights from Empragold."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Journal' }]} />

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto my-10">
          <span className="text-xs text-[#C9A227] uppercase tracking-widest font-bold block mb-2">
            Private Wealth Intelligence
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#C9A227]">
            The Empragold Journal
          </h1>
          <p className="text-[#C9A227]/80 text-sm sm:text-base mt-4 font-normal">
            Insights into sovereign real estate markets, architectural trends, and institutional capital movement.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white border border-[#C9A227]/30 p-4 rounded-2xl mb-12 shadow-md">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Market Insights', 'Investment Advisory', 'Neighborhood Spotlight'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#C9A227] text-white'
                    : 'bg-slate-50 text-[#C9A227] hover:bg-slate-100 border border-[#C9A227]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C9A227]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-white border border-[#C9A227]/30 rounded-xl pl-10 pr-4 py-2 text-xs text-[#C9A227] placeholder-[#C9A227]/50 focus:outline-none focus:border-[#C9A227] shadow-sm"
            />
          </div>
        </div>

        {/* Featured Main Hero Post */}
        {featuredArticle && selectedCategory === 'All' && searchTerm === '' && (
          <div className="relative rounded-3xl overflow-hidden bg-white border border-[#C9A227]/30 shadow-xl mb-16 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 h-80 lg:h-auto relative bg-slate-100">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#C9A227] text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  Featured Report
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 text-xs text-[#C9A227]/80 mb-3">
                  <span className="text-[#C9A227] font-semibold">{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#C9A227]" /> {featuredArticle.readTime}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#C9A227] mb-4 hover:text-[#9A7B1C] transition-colors">
                  <Link to={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-[#C9A227]/80 text-xs sm:text-sm leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#C9A227]/20">
                <div className="flex items-center gap-3">
                  <img src={featuredArticle.author.image} alt={featuredArticle.author.name} className="w-10 h-10 rounded-full object-cover border border-[#C9A227]" />
                  <div>
                    <strong className="text-[#C9A227] text-xs block">{featuredArticle.author.name}</strong>
                    <span className="text-[10px] text-[#C9A227]/70 block">{featuredArticle.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/blog/${featuredArticle.slug}`}
                  className="bg-[#C9A227] text-white hover:bg-[#B8860B] font-semibold text-xs px-4 py-2.5 rounded-xl transition-all flex items-center gap-1 shadow-md"
                >
                  Read Report <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-[#C9A227]/30 rounded-2xl overflow-hidden hover:border-[#C9A227]/60 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 border border-[#C9A227]/40 text-[#C9A227] text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-[11px] text-[#C9A227]/80 mb-2">
                    <span>{post.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#C9A227]" /> {post.readTime}</span>
                  </div>

                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-serif font-bold text-[#C9A227] group-hover:text-[#9A7B1C] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#C9A227]/80 line-clamp-3 mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#C9A227]/20 flex items-center justify-between">
                <span className="text-xs text-[#C9A227] font-semibold">{post.author.name}</span>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-[#C9A227] group-hover:text-[#9A7B1C] flex items-center gap-1 transition-colors"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
