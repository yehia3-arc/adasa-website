import { Link } from "react-router-dom";

export default function FeaturedCard({ post, index = 0 }) {
  const date = new Date(post.date).toLocaleDateString("ar-EG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group relative bg-dark-card rounded-3xl overflow-hidden border border-dark-border  hover:border-orange-500/30 transition-all duration-500 delay-150">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="grid md:grid-cols-2 gap-0">
          {/* العمود الأول: الصورة */}
          <div className="relative h-72 md:h-100 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linear-to-r from-orange-500 to-yellow-500 text-white text-xs font-semibold rounded-full">
                <i
                  className="fa-solid fa-star "
                  style={{ color: "rgb(255, 255, 255)" }}
                ></i>
                مميز
              </span>
            </div>
          </div>

          {/* العمود الثاني: المحتوى */}
          <div className="p-8 md:p-10 flex flex-col justify-center bg-dark-card">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-neutral-500">
                <i
                  className="fa-regular fa-clock fa-sm"
                  style={{ color: "rgb(104, 104, 104)" }}
                ></i>
                {post.readTime}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
              {post.title}
            </h2>
            <p className="text-neutral-400 mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-dark-border shadow-md"
                  />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-dark-card" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {post.author.name}
                  </p>
                  <p className="text-xs text-neutral-500">{date}</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                اقرأ المقال
                <i
                  className="fa-solid fa-arrow-left"
                  style={{ color: "rgb(255, 105, 0)" }}
                ></i>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
