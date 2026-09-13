import { Link } from "react-router-dom";

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/* ========== بطاقة الشبكة (تُستخدم في Home و Blog) ========== */
export default function PostCard({ post, index = 0 }) {
  return (
    <article className="group card overflow-hidden delay-100">
      <Link to={`/blog/${post.slug}`} className="block">
        {/* الصورة */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-lineart-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-dark/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-border-light">
              {post.category}
            </span>
          </div>
        </div>

        {/* المحتوى */}
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <i className="fa-regular fa-clock" />
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>{fmtDate(post.date)}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          {/* الكاتب + سهم القراءة */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-border">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-dark-border"
              />
              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500 group-hover:border-transparent transition-colors duration-300">
              <i className="fa-solid fa-arrow-left text-orange-500 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* ========== بطاقة القائمة (وضع list في Blog) ========== */
export function PostListItem({ post, index = 0 }) {
  return (
    <article className="group bg-dark-card rounded-2xl border border-dark-border hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
      <Link to={`/blog/${post.slug}`} className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-l from-dark-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-clock" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-sm text-neutral-500">
              <i className="fa-regular fa-calendar" />
              {fmtDate(post.date)}
            </span>
          </div>

          <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-dark-border"
              />
              <div>
                <p className="text-sm font-semibold text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              اقرأ المقال
              <i className="fa-solid fa-arrow-left" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
