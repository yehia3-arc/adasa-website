import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

/* الروابط من posts.json + الأيقونات من Font Awesome Free (fa-brands) */
const socials = [
  {
    name: "twitter",
    url: postsData.siteInfo.social.twitter,
    icon: "fa-brands fa-x-twitter",
  },
  {
    name: "github",
    url: postsData.siteInfo.social.github,
    icon: "fa-brands fa-github",
  },
  {
    name: "linkedin",
    url: postsData.siteInfo.social.linkedin,
    icon: "fa-brands fa-linkedin-in",
  },
  {
    name: "youtube",
    url: postsData.siteInfo.social.youtube,
    icon: "fa-brands fa-youtube",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const categories = postsData.categories.slice(0, 4);

  return (
    <footer className="relative bg-dark text-neutral-300 overflow-hidden border-t border-dark-border">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* العمود 1: الشعار + السوشال */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-11 h-11 bg-linear-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">عدسة</span>
            </Link>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              {postsData.siteInfo.description}
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 bg-dark-card border border-dark-border hover:bg-linear-to-br hover:from-orange-500 hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <i className={`${s.icon} text-lg`} />
                </a>
              ))}
            </div>
          </div>

          {/* العمود 2: استكشف */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              استكشف
            </h3>
            <ul className="space-y-4">
              {[
                { n: "الرئيسية", p: "/" },
                { n: "المدونة", p: "/blog" },
                { n: "من نحن", p: "/about" },
              ].map((l) => (
                <li key={l.p}>
                  <Link
                    to={l.p}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left text-xs text-orange-500 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300" />
                    {l.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: التصنيفات */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              التصنيفات
            </h3>
            <ul className="space-y-4">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link
                    to={`/blog?category=${c.name}`}
                    className="text-sm text-neutral-500 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <i className="fa-solid fa-arrow-left text-xs text-orange-500 opacity-0 -mr-4 group-hover:opacity-100 group-hover:mr-0 transition-all duration-300" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 4: النشرة البريدية */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-linear-to-r from-orange-500 to-yellow-500 rounded-full" />
              ابقَ على اطلاع
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-sm text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-neutral-600"
              />
              <button
                type="submit"
                className="w-full inline-flex py-4 px-8 font-semibold  bg-linear-to-r from-primary to-primary-dark text-white   transition-all duration-300 hover:-translate-y-0.5 text-sm rounded-full"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="relative border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-600">
              © {year} عدسة. صُنع بكل{" "}
              <i className="fa-solid fa-heart text-orange-500" /> جميع الحقوق
              محفوظة.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                سياسة الخصوصية
              </Link>
              <Link
                to="/terms"
                className="text-sm text-neutral-600 hover:text-orange-500 transition-colors duration-300"
              >
                شروط الخدمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
