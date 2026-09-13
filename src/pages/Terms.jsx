import { Link } from "react-router-dom";

const restrictions = [
  "تعديل أو نسخ المواد",
  "استخدام المواد لأي غرض تجاري أو للعرض العام",
  "محاولة فك أو عكس هندسة أي برنامج على الموقع",
  "إزالة أي حقوق نشر أو علامات ملكية من المواد",
  'نقل المواد إلى شخص آخر أو "نسخها" على أي خادم آخر',
];

function Section({ num, title, children }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
          {num}
        </span>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function XItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-neutral-400 leading-relaxed">
      <i className="fa-solid fa-xmark text-red-400 mt-1.5 shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function Terms() {
  return (
    <div className=" bg-black">
      {/* ===== Hero ===== */}
      <section className=" grid-bg pt-20 pb-27 px-4">
        <div className="   max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center   ">
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              الرئيسية
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-neutral-600" />
            <span className="text-orange-500 font-medium">شروط الخدمة</span>
          </nav>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
            <i className="fa-regular fa-file-lines text-2xl text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            شروط الخدمة
          </h1>
          <p className="text-neutral-500 text-lg">آخر تحديث: 15 يناير 2026</p>
        </div>
      </section>

      {/* ===== Content ===== */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Alert */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              <div className=" shrink-0">
                <i className="fa-solid fa-triangle-exclamation text-yellow-500 text-xl " />
              </div>
              <div>
                <h3 class="font-semibold text-yellow-500 mb-1">إشعار مهم</h3>
                <p class="text-yellow-300/80 text-sm">
                  يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول
                  أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>
            </div>
          </div>

          <section class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                1
              </span>
              <h2 class="text-2xl font-bold text-white">الموافقة على الشروط</h2>
            </div>
            <p class="text-neutral-400 leading-relaxed mb-4">
              بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه
              وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه
              الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.
            </p>
          </section>

          <Section num={2} title="رخصة الاستخدام">
            <p className="text-neutral-400 leading-relaxed">
              يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي
              غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية. بموجب هذا الترخيص
              لا يجوز لك:
            </p>
            <ul className="space-y-3">
              {restrictions.map((item, i) => (
                <XItem key={i}>{item}</XItem>
              ))}
            </ul>
          </Section>

          <Section num={3} title="إخلاء المسؤولية">
            <p className="text-neutral-400 leading-relaxed">
              المواد الموجودة على موقع عدسة مقدمة "كما هي". عدسة لا تقدم أي
              ضمانات، صريحة أو ضمنية، وتخلي جميع الضمانات الأخرى.
            </p>
          </Section>

          <Section num={4} title="القيود">
            <p className="text-neutral-400 leading-relaxed">
              في أي حال من الأحوال لن تكون عدسة أو موردوها مسؤولين عن أي أضرار
              ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.
            </p>
          </Section>

          <Section num={5} title="محتوى المستخدم">
            <p className="text-neutral-400 leading-relaxed">
              قد تحتوي بعض أجزاء الموقع على محتوى مقدم من المستخدمين. أنت مسؤول
              وحدك عن أي محتوى تنشره، وتمنح عدسة حقاً غير حصري لاستخدامه لعرض
              الموقع وتحسينه.
            </p>
          </Section>

          <Section num={6} title="التعديلات">
            <p className="text-neutral-400 leading-relaxed">
              قد تراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا
              الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.
            </p>
          </Section>

          <Section num={7} title="معلومات الاتصال">
            <p className="text-neutral-400 leading-relaxed">
              إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:
            </p>
            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
            >
              <i className="fa-regular fa-envelope" />
              hello@adasah.com
            </a>
          </Section>

          {/* Divider + cross link */}
          <div className="border-t border-dark-border pt-8 text-center text-sm text-neutral-500">
            باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
            <Link
              to="/privacy"
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              سياسة الخصوصية
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
