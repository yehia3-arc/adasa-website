import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

export default function About() {
  const allAuthors = [
    ...new Map(postsData.posts.map((p) => [p.author.name, p.author])).values(),
  ];
  const socials = [
    {
      key: "twitter",
      icon: "fa-brands fa-x-twitter",
      hover: "hover:bg-orange-500",
    },
    {
      key: "github",
      icon: "fa-brands fa-github",
      hover: "hover:bg-neutral-700",
    },
    {
      key: "linkedin",
      icon: "fa-brands fa-linkedin-in",
      hover: "hover:bg-blue-600",
    },
  ];
  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div class="absolute inset-0 bg-dark"></div>
        <div class="absolute inset-0 grid-bg"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6 ">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse   "></span>
            <span className="text-primary text-sm mr-1">من نحن</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-bold-text">
            مهمتنا هي{" "}
            <span className=" bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent">
              الإلهام والإلهام
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-[rgba(22,22,22,0.8)] border border-dark-border rounded-3xl backdrop-blur-xl p-6">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-2 block"></i>
              <div className="text-3xl font-bold  bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">
                +2مليون
              </div>
              <div className="text-sm text-neutral-500">قارئ شهرياً</div>
            </div>
            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-6">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-2 block"></i>
              <div className="text-3xl font-bold  bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">
                +500
              </div>
              <div className="text-sm text-neutral-500">مقالة منشورة</div>
            </div>
            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-6">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-2 block"></i>
              <div className="text-3xl font-bold  bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">
                +50
              </div>
              <div className="text-sm text-neutral-500">كاتب خبير</div>
            </div>
            <div className="bg-neutral-900/80 border border-dark-border rounded-3xl backdrop-blur-xl p-6">
              <i className="fa-solid fa-book-open text-2xl text-orange-500 mb-2 block"></i>
              <div className="text-3xl font-bold  bg-linear-to-br from-orange-500 to-amber-400 bg-clip-text text-transparent mb-1">
                +15
              </div>
              <div className="text-sm text-neutral-500">تصنيف</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-secondary border-y border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span class="w-1.5 h-8 bg-linear-to-b from-orange-500 to-yellow-500 rounded-full"></span>
              قيمنا
              <span class="w-1.5 h-8 bg-linear-to-b from-yellow-500 to-orange-500 rounded-full"></span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="group p-6 bg-dark-card rounded-2xl border border-dark-border hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div class="relative">
                <i class="fa-solid fa-bullseye text-4xl text-orange-500 mb-4 "></i>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  الجودة أولاً
                </h3>
                <p class="text-neutral-400 text-sm">محتوى مدروس ومكتوب بخبرة</p>
              </div>
            </div>
            <div class="group p-6 bg-dark-card rounded-2xl border border-dark-border hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div class="relative">
                <i class="fa-solid fa-bolt text-4xl text-orange-500 mb-4 "></i>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  تركيز عملي
                </h3>
                <p class="text-neutral-400 text-sm">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
            </div>
            <div class="group p-6 bg-dark-card rounded-2xl border border-dark-border hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-linear-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div class="relative">
                <i class="fa-solid fa-handshake text-4xl text-orange-500 mb-4 "></i>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  المجتمع
                </h3>
                <p class="text-neutral-400 text-sm">تعلم مع آلاف المصورين</p>
              </div>
            </div>
            <div class="group p-6 bg-dark-card rounded-2xl border border-dark-border hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden">
              <div class="absolute inset-0 bg-linear-to-br from-orange-600 to-orange-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div class="relative">
                <i class="fa-solid fa-arrows-rotate text-4xl text-orange-500 mb-4 "></i>
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  دائماً محدث
                </h3>
                <p class="text-neutral-400 text-sm">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4 ">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>

              <span className="text-primary text-sm mr-1">فريقنا</span>
            </div>

            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 font-bold-text">
              تعرف على كتابنا
            </h2>
            <p class="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
              المجتمع.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allAuthors.map((author, i) => (
              <div
                key={i}
                className="group bg-dark-card rounded-2xl p-6 text-center border border-dark-border hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="relative inline-block mb-4">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-dark-border group-hover:ring-orange-500/30 transition-all"
                  />
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-dark-border flex items-center justify-center">
                    <i className="fa-solid fa-check fa-2xs"></i>
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg">{author.name}</h3>
                <p className="text-orange-500 text-sm font-medium mb-4">
                  {author.role}
                </p>
                <div className="flex justify-center gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.key}
                      href="#"
                      aria-label={s.key}
                      className={`w-9 h-9 bg-dark-border rounded-lg flex items-center justify-center text-neutral-500 ${s.hover} hover:text-white transition-colors`}
                    >
                      <i className={`${s.icon} text-base`} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-orange-600 via-orange-500 to-yellow-500  overflow-hidden">
        <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-bold-text">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            نحن أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية. لا تتردد في التواصل.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${postsData.siteInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-dark text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <i className="fa-regular fa-envelope"></i>
              تواصل معنا
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-dark transition-all duration-300"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
