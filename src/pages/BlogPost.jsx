import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { blogData } from '../data/blogData';
import { Clock, Share2, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BlogPost = () => {
  const { slug } = useParams();
  const { showToast } = useApp();

  const post = blogData.find((p) => p.slug === slug) || blogData[0];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Article link copied to clipboard!', 'success');
    }
  };

  const relatedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="bg-white text-slate-800 min-h-screen pt-24 pb-20">
      <SEO
        title={`${post.title} | Empragold Journal`}
        description={post.excerpt}
        ogImage={post.image}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Journal', link: '/blog' }, { label: post.title }]} />

        {/* Article Header */}
        <div className="my-8">
          <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="bg-[#4db038] text-white font-bold px-3 py-1 rounded-full uppercase text-[10px]">
              {post.category}
            </span>
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#338424]" /> {post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Author Bar */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <img src={post.author.image} alt={post.author.name} className="w-12 h-12 rounded-full object-cover border border-slate-300" />
              <div>
                <strong className="text-slate-900 text-sm block font-semibold">{post.author.name}</strong>
                <span className="text-xs text-slate-500 block">{post.author.role}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="p-2.5 bg-white text-slate-700 hover:text-[#338424] hover:bg-slate-100 rounded-xl border border-slate-200 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
            >
              <Share2 className="w-4 h-4 text-[#338424]" /> Share Article
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-md my-8 h-96 border border-slate-200">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Article Body HTML */}
        <div
          className="max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 my-10 font-normal"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && (
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-200 my-8">
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#338424]" /> Tags:
            </span>
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Further Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rp) => (
                <div key={rp.id} className="bg-white border border-slate-200 p-5 rounded-2xl flex flex-col justify-between shadow-xs hover:border-[#4db038] transition-all">
                  <div>
                    <span className="text-[10px] text-[#338424] uppercase font-bold block mb-1">{rp.category}</span>
                    <Link to={`/blog/${rp.slug}`}>
                      <h4 className="text-lg font-bold text-slate-900 hover:text-[#338424] line-clamp-2">
                        {rp.title}
                      </h4>
                    </Link>
                  </div>
                  <Link to={`/blog/${rp.slug}`} className="text-xs font-semibold text-[#338424] hover:text-[#28691c] mt-4 flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
