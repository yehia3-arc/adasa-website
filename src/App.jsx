import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import PostDetail from "./pages/PostDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function NotFound() {
  return (
    <div class="min-h-20 h-screen flex items-center justify-center relative overflow-hidden bg-dark">
      <div class="absolute inset-0 grid-bg"></div>

      <div class="relative text-center px-4 max-w-lg mx-auto">
        <div class="relative mb-6">
          <h1 class="text-[140px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-orange-500 via-yellow-500 to-orange-500 leading-none select-none font-bold-text">
            404
          </h1>
        </div>
        <div class="relative w-28 h-28 mx-auto mb-8">
          <div class="absolute inset-0 bg-linear-to-br from-orange-500/20 to-yellow-500/20 rounded-full border border-orange-500/30"></div>
          <div class="absolute inset-0 flex items-center justify-center  text-orange-500">
            <i className="fa-regular fa-face-frown-open text-5xl"></i>
          </div>
          <div class="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-lg rotate-12 animate-bounce"></div>
          <div class="absolute -bottom-1 -left-3 w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
        </div>
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">
          عفواً! الصفحة غير موجودة
        </h2>
        <p class="text-neutral-400 mb-8 text-lg">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
          الصحيح.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            class="group bg-linear-to-r from-primary to-primary-dark text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base py-4 px-8 "
            href="/"
            data-discover="true"
          >
            <i className="fa-regular fa-house"></i>
            الذهاب للرئيسية
          </a>
          <a
            class="border border-dark-border hover:bg-primary/10 hover:border-primary hover:text-primary text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            href="/blog"
            data-discover="true"
          >
            <i className="fa-solid fa-newspaper fa-flip-horizontal  m-1"></i>
            تصفح المقالات
          </a>
        </div>
        <div class="pt-8 border-t border-dark-border">
          <p class="text-sm text-neutral-500 mb-4">قد تجد هذه مفيدة:</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm">
            <a
              class="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              href="/blog"
              data-discover="true"
            >
              المدونة
            </a>
            <span class="text-neutral-600">•</span>
            <a
              class="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              href="/about"
              data-discover="true"
            >
              من نحن
            </a>
            <span class="text-neutral-600">•</span>
            <a
              class="text-orange-500 hover:text-orange-400 hover:underline font-medium"
              href="/privacy"
              data-discover="true"
            >
              الخصوصية
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
