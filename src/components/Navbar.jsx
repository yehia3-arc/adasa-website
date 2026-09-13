import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/images/imgi_1_logo-GdqARQRt.png";

const navLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "المدونة", path: "/blog" },
  { name: "من نحن", path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-dark/95 backdrop-blur-xl ${scrolled ? "border-b border-dark-border" : "border-b border-transparent  bg-neutral-900 "}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
              <img
                src={logoImage}
                alt="Photography Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl  bg-linear-to-r from-zinc-300 to-neutral-200 bg-clip-text text-transparent font-bold">
                عدسة
              </span>
              <span className="text-xs text-orange-400/80 hidden sm:block font-regular">
                عالم التصوير الفوتوغرافي
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-dark-card rounded-full p-1.5 border border-dark-border">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-orange-500 to-orange-600 text-white"
                        : "text-neutral-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-dark-card rounded-xl transition-all duration-300 border border-transparent hover:border-dark-border">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <Link
              to="/blog" // btn-primary  ( className)
              className=" inline-flex py-4 px-8 font-semibold  bg-linear-to-r from-primary to-primary-dark text-white  rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              ابدأ القراءة
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-3 text-neutral-400 hover:text-white hover:bg-dark-card rounded-xl transition-all duration-300 border border-transparent hover:border-dark-border"
          >
            <i className="fa-solid fa-bars fa-lg"></i>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 pb-6" : "max-h-0"}`}
        >
          <div className="bg-dark-card backdrop-blur-xl rounded-2xl p-4 border border-dark-border">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30"
                        : "text-neutral-400 hover:bg-dark-card hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="inline-flex py-4 px-8 font-semibold  bg-linear-to-r from-primary to-primary-dark text-white rounded-full text-sm text-center items-center justify-center mt-2"
              >
                ابدأ القراءة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
