import { Link } from "react-router-dom";
import postsData from "../data/posts.json";
import FeaturedCard from "../components/FeaturedCard";
import PostCard from "../components/PostCard";

export default function Home() {
  const featuredPosts = postsData.posts.filter((p) => p.featured);
  const latestPosts = postsData.posts.filter((p) => !p.featured).slice(0, 3);
  const categories = postsData.categories;

  const categoryIcons = {
    إضاءة: "fa-solid fa-sun",
    بورتريه: "fa-solid fa-user",
    "مناظر طبيعية": "fa-solid fa-mountain-sun",
    تقنيات: "fa-solid fa-sliders",
    معدات: "fa-solid fa-sun",
  };

  return (
    <div className="min-h-screen">
      <div className="absolute top-56 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

      {/* Hero Section */}
      <section className="grid-bg pt-26.75 pb-27 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <span class="relative flex size-2">
              <span class="absolute inline-flex w-full h-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
              <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
            </span>
            <span className="text-white text-sm">مرحباً بك في عدسة</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight font-bold-text">
            اكتشف{" "}
            <span className=" bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
              فن
            </span>
            <span className="block">التصوير الفوتوغرافي</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              // 1. Add the "group" class to the parent
              className="group bg-linear-to-r from-primary to-primary-dark text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base py-4 px-8"
            >
              استكشف المقالات
              <i className="fa-solid fa-arrow-left-long fa-lg transition-all duration-300 group-hover:-translate-x-1"></i>
            </Link>
            <Link
              to="/about"
              className="border border-dark-border hover:bg-primary/10 hover:border-primary hover:text-primary text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-circle-info text-lg"></i>
              اعرف المزيد
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-16">
            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold  bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                +50
              </p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>

            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-4 hover:scale-105 transition-transform duration-300 delay-100">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold  bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                +10ألف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>

            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-4 hover:scale-105 transition-transform duration-300 delay-200">
              <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold  bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                4
              </p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>

            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold  bg-linear-to-br from-primary to-accent bg-clip-text text-transparent">
                6
              </p>
              <p className="text-neutral-500 text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-orange-500/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                <span class="relative flex size-2">
                  <span class="absolute inline-flex w-full h-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                  <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
                </span>
                <span className="text-primary text-sm">مميز</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                مقالات مختارة
              </h2>
              <p className="text-neutral-400 mt-5 text-lg ">
                محتوى منتقى لبدء رحلة تعلمك
              </p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              عرض الكل
              <i class="fa-solid fa-angle-left  group-hover:scale-105 group-hover:-translate-x-1.5 "></i>
            </Link>
          </div>
          <div className="space-y-8">
            {featuredPosts.map((post, i) => (
              <FeaturedCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-dark-card/50">
        <div className="max-w-6xl mx-auto ">
          <div className=" text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              <span class="relative flex size-2">
                <span class="absolute inline-flex w-full h-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
              </span>
              <span className="text-primary text-sm">التصفيات</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-18.75 font-bold mb-4">
              استكشف حسب الموضوع
            </h2>
            <p className="text-neutral-400 mb-12 text-lg  leading-7.25">
              اعثر على محتوى مصمم حسب اهتماماتك
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <Link
                key={i}
                to={`/blog?category=${cat.name}`}
                className="group relative block p-6 rounded-2xl bg-dark-card border border-dark-border overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* طبقة التدرج (تحت المحتوى) */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* ✅ المحتوى داخل غلاف z-10 ليظهر فوق التدرج */}
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 border border-orange-500/20 group-hover:bg-white/20 group-hover:border-transparent transition-colors duration-300">
                    <i
                      className={`${categoryIcons[cat.name] || categoryIcons["تقنيات"]} text-xl text-orange-500 group-hover:text-white transition-colors duration-300`}
                    ></i>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-neutral-500 group-hover:text-white/80 transition-colors duration-300">
                    {cat.count} مقالة
                  </p>
                </div>

                {/* دائرة السهم: فوق التدرج أيضاً */}
                <div className="absolute top-15 left-6 z-10 w-8 h-8 rounded-full bg-dark-border flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white/20 transition-all duration-300">
                  <i className="fa-solid fa-angle-left fa-sm text-white"></i>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                <span class="relative flex size-2">
                  <span class="absolute inline-flex w-full h-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
                  <span class="relative inline-flex size-2 rounded-full bg-orange-500"></span>
                </span>
                <span className="text-primary text-sm">الأحدث</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-18.75 font-bold mb-4">
                أحدث المقالات
              </h2>

              <p className="text-neutral-400 mb-12 text-lg  leading-7.25 mt-2">
                محتوى جديد طازج من المطبعة
              </p>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            >
              عرض جميع المقالات
              <i className="fa-solid fa-arrow-left-long  transition-all duration-300 group-hover:-translate-x-1"></i>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden bg-dark">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card rounded-3xl border border-dark-border p-8 md:p-12 lg:p-16 text-center">
            <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i
                className="fa-regular fa-envelope fa-xl"
                style={{ color: "rgb(255, 255, 255)" }}
              ></i>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في{" "}
              <span className="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
                نشرتنا الإخبارية
              </span>
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
              الإلكتروني
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-4 rounded-xl bg-dark border border-dark-border focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2 space-x-reverse">
                  {postsData.posts.slice(0, 3).map((post) => (
                    <img
                      key={post.id}
                      className="w-8 h-8 rounded-full border-2 border-dark-card"
                      alt={post.author.name}
                      src={post.author.avatar.replace(
                        "w=100&h=100",
                        "w=32&h=32",
                      )}
                    />
                  ))}
                </div>
                <span>
                  انضم لـ{" "}
                  <span className="text-white font-medium">+10,000</span> مصور
                </span>
              </div>
              <span className="hidden sm:inline text-dark-card">•</span>
              <span>بدون إزعاج</span>
              <span className="hidden sm:inline text-dark-border">•</span>
              <span>إلغاء الاشتراك في أي وقت</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
