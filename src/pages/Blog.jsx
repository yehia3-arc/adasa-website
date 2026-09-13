import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import postsData from "../data/posts.json";
import PostCard, { PostListItem } from "../components/PostCard";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const activeCategory = searchParams.get("category") || "جميع المقالات";

  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const filteredPosts = useMemo(() => {
    let posts = postsData.posts;

    if (activeCategory !== "جميع المقالات") {
      posts = posts.filter((p) => p.category === activeCategory);
    }

    if (searchTerm) {
      posts = posts.filter(
        (p) => p.title.includes(searchTerm) || p.excerpt.includes(searchTerm),
      );
    }

    return posts;
  }, [activeCategory, searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const handleCategoryClick = (cat) => {
    if (cat === "جميع المقالات") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };
  const gridRef = useRef(null);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section class="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-dark"></div>
        <div class="absolute inset-0 grid-bg"></div>
        <div class="absolute inset-0">
          <div class="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <div>
              <i
                className="fa-solid fa-newspaper fa-flip-horizontal fa-xs m-1"
                style={{ color: " rgb(249, 115, 22)" }}
              ></i>
              <span className="text-primary text-sm font-medium">مدونتنا</span>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-bold-text">
            استكشف{" "}
            <span class="bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
              مقالاتنا
            </span>
          </h1>
          <p class="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-20 z-40 bg-dark/90 backdrop-blur-xl border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {" "}
            {/* Search & View Toggle */}
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <div className="relative w-full md:w-80">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <i
                    className="fa-solid fa-magnifying-glass "
                    style={{ color: "rgb(115, 115, 115)" }}
                  ></i>
                </div>

                <input
                  type="text"
                  placeholder="ابحث في المقالات..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full transition-all ease-in duration-150 bg-dark-card focus:border-primary focus:outline-none border border-dark-border py-3 pl-5 pr-12 rounded-xl"
                />
              </div>
            </div>
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-dark-card text-neutral-400 border border-dark-border hover:border-orange-500/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section>
        <div
          ref={gridRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-36.5"
        >
          {" "}
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <div className="text-neutral-400 text-base">
              عرض{" "}
              <span className=" text-white font-bold ">
                {filteredPosts.length}
              </span>{" "}
              <span className="mr-0.5">مقالات.</span>
              {activeCategory !== "جميع المقالات" && (
                <span className="mr-2">
                  في <span className="text-orange-500">{activeCategory}</span>
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-dark-card border border-dark-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "grid" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  <i className="fa-solid fa-table-cells-large"></i>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all duration-300 ${viewMode === "list" ? "bg-orange-500 text-white" : "text-neutral-400 hover:text-white"}`}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              {(searchParams.toString() !== "" || searchTerm) && (
                <div>
                  <button
                    onClick={() => {
                      setSearchParams({});
                      setSearchTerm("");
                    }}
                    className="text-sm text-neutral-500 hover:text-orange-500 flex items-center gap-1 transition-colors"
                  >
                    <i className="fa-solid fa-xmark"></i>
                    مسح الفلتر
                  </button>
                </div>
              )}
            </div>
          </div>
          {paginatedPosts.length > 0 ? (
            viewMode === "grid" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {paginatedPosts.map((post, i) => (
                  <PostListItem key={post.id} post={post} index={i} />
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-dark-card border border-dark-border rounded-full flex items-center justify-center mx-auto mb-6 ">
                <i
                  className="fa-regular fa-face-frown-open text-5xl"
                  style={{ color: "rgb(115, 115, 115)" }}
                ></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                لا توجد مقالات
              </h3>
              <p className="text-neutral-400 mb-6">
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>
              <button
                onClick={() => {
                  setSearchParams({}); // يمسح فلتر التصنيف من الرابط ⇒ يرجع لـ "جميع المقالات"
                  setSearchTerm(""); // يفرّغ خانة البحث
                  setCurrentPage(1); // يرجع للصفحة الأولى
                }}
                className=" inline-flex py-4 px-8 font-semibold  bg-linear-to-r from-primary to-primary-dark text-white   transition-all duration-300 hover:-translate-y-0.5 items-center gap-2 rounded-full"
              >
                <i className="fa-solid fa-rotate"></i>
                إعادة تعيين الفلاتر
              </button>
            </div>
          )}
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* زر السابق (يظهر يمين في RTL) */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-dark border-dark-border text-neutral-600 cursor-not-allowed"
                    : "bg-dark-card border-dark-border text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-chevron-right" />
              </button>

              {/* أرقام الصفحات */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-11 h-11 rounded-xl text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                          : "bg-dark-card text-neutral-400 border border-dark-border hover:border-orange-500/50 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              {/* زر التالي (يظهر يسار في RTL) */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-dark border-dark-border text-neutral-600 cursor-not-allowed"
                    : "bg-dark-card border-dark-border text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
                }`}
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
            </div>
          )}
          {totalPages > 1 && (
            <p className="text-center text-gray-500 text-sm mt-4">
              صفحة {currentPage} من {totalPages}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
