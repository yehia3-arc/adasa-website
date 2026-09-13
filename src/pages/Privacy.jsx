import { Link } from "react-router-dom";

/* البيانات كـ arrays حتى يبقى الكود نظيف */
const collectedInfo = [
  {
    label: "بيانات الهوية:",
    text: " تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.",
  },
  { label: "بيانات الاتصال:", text: " تشمل عنوان البريد الإلكتروني." },
  {
    label: "البيانات التقنية:",
    text: " تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.",
  },
  {
    label: "بيانات الاستخدام:",
    text: " تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.",
  },
];

const usageList = [
  "لتقديم خدمتنا والحفاظ عليها",
  "لإخطارك بالتغييرات في خدمتنا",
  "لتقديم دعم العملاء",
  "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا",
  "لمراقبة استخدام خدمتنا",
  "لاكتشاف ومنع ومعالجة المشاكل التقنية",
];

const rightsList = [
  "طلب الوصول إلى بياناتك الشخصية",
  "طلب تصحيح بياناتك الشخصية",
  "طلب مسح بياناتك الشخصية",
  "الاعتراض على معالجة بياناتك الشخصية",
  "طلب تقييد معالجة بياناتك الشخصية",
  "الحق في سحب الموافقة",
];

/* مكوّن القسم المرقّم (مثل الأصل تماماً) */
function Section({ num, title, children }) {
  return (
    <section className="group">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
          {num}
        </span>
        {title}
      </h2>
      <div className="pr-11">{children}</div>
    </section>
  );
}

/* عنصر قائمة بعلامة صح (Font Awesome) */
function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-neutral-400">
      <i className="fa-solid fa-circle-check text-xl text-orange-500 shrink-0 mt-0.5" />
      <span>{children}</span>
    </li>
  );
}

export default function Privacy() {
  return (
    <div className="bg-dark">
      {/* ===== الهيدر ===== */}
      <section className="grid-bg pt-26.75 pb-27 px-4">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* مسار التنقل */}
          <nav className="flex items-center justify-center gap-2 text-sm mb-8">
            <Link
              to="/"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              الرئيسية
            </Link>
            <i className="fa-solid fa-chevron-left text-xs text-neutral-600" />
            <span className="text-orange-500 font-medium">سياسة الخصوصية</span>
          </nav>

          {/* أيقونة القفل */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
            <i className="fa-solid fa-lock text-3xl text-orange-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
        </div>
      </section>

      {/* ===== المحتوى ===== */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* صندوق التنبيه */}
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
          <div className="flex gap-4">
            <div className="shrink-0">
              <i className="fa-solid fa-shield-halved text-2xl text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-orange-500 mb-1">
                خصوصيتك تهمنا
              </h3>
              <p className="text-orange-300/80 text-sm">
                نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <Section num={1} title="مقدمة">
            <p className="text-neutral-400 leading-relaxed">
              مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك
              الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية
              عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.
            </p>
          </Section>

          <Section num={2} title="المعلومات التي نجمعها">
            <ul className="space-y-3">
              {collectedInfo.map((item, i) => (
                <CheckItem key={i}>
                  <strong className="text-white">{item.label}</strong>
                  {item.text}
                </CheckItem>
              ))}
            </ul>
          </Section>

          <Section num={3} title="كيف نستخدم معلوماتك">
            <ul className="space-y-3">
              {usageList.map((item, i) => (
                <CheckItem key={i}>{item}</CheckItem>
              ))}
            </ul>
          </Section>

          <Section num={4} title="ملفات تعريف الارتباط">
            <p className="text-neutral-400 leading-relaxed">
              نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط
              على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو
              للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات
              تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.
            </p>
          </Section>

          <Section num={5} title="أمان البيانات">
            <p className="text-neutral-400 leading-relaxed">
              لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو
              استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد
              الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.
            </p>
          </Section>

          <Section num={6} title="حقوقك">
            <ul className="space-y-3">
              {rightsList.map((item, i) => (
                <CheckItem key={i}>{item}</CheckItem>
              ))}
            </ul>
          </Section>

          <Section num={7} title="تواصل معنا">
            <p className="text-neutral-400 leading-relaxed mb-4">
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
            </p>
            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
            >
              <i className="fa-regular fa-envelope text-xl" />
              hello@adasah.com
            </a>
          </Section>
        </div>

        {/* الرابط المتبادل */}
        <div className="mt-16 pt-8 border-t border-dark-border">
          <p className="text-neutral-500 text-sm text-center">
            باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
            <Link
              to="/terms"
              className="text-orange-500 hover:text-orange-400 font-medium"
            >
              شروط الخدمة
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
