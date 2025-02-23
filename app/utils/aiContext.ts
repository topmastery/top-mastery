
export const COMPANY_CONTEXT = {
  name: {
    ar: "توب ماستري",
    en: "Top Mastery"
  },
  establishedYear: 2005,
  location: "الشيخ زايد - الحى 9 - مول العامر - الدور 2",
  contact: {
    phone: "+201032200042",
    email: "topmastery@yandex.com",
    social: {
      facebook: "topmasteryadv",
      instagram: "topmasteryadv",
      x: "topmasteryadv",
      tiktok: "topmasteryadv",
      linkedin: "topmasteryadv",
      pinterest: "topmasteryadv",
      youtube: "topmasteryadv",
      threads: "topmasteryadv"
    }
  },
  services: {
    design: {
      title: "التصميم الإبداعي",
      features: [
        "تصميم الهوية البصرية الكاملة",
        "تصميم المطبوعات والإعلانات",
        "تصميم واجهات المستخدم UI/UX"
      ]
    },
    web: {
      title: "تطوير المواقع",
      features: [
        "تصميم وتطوير مواقع متجاوبة",
        "برمجة خاصة حسب الطلب",
        "تحسين أداء وسرعة المواقع"
      ]
    },
    marketing: {
      title: "التسويق الرقمي",
      features: [
        "إدارة حسابات السوشيال ميديا",
        "إدارة الحملات الإعلانية",
        "تحسين محركات البحث SEO"
      ]
    }
  },
  experience: {
    years: 20,
    highlights: [
      "خبرة تمتد لأكثر من عشرين عاماً",
      "فريق من الخبراء المتخصصين",
      "مئات المشاريع الناجحة",
      "عملاء في مختلف القطاعات"
    ]
  },
  about: {
    summary: "شركة رائدة في مجال التسويق الرقمي وتطوير المواقع، نقدم حلولاً متكاملة تساعد عملائنا على النمو والتميز",
    mission: "نسعى لتقديم أفضل الحلول الإبداعية من خلال الفهم العميق لاحتياجات العملاء وتقديم حلول مبتكرة تناسب تطلعاتهم",
    values: [
      "الإبداع والابتكار",
      "الاحترافية والجودة",
      "الالتزام بالمواعيد",
      "رضا العملاء"
    ]
  },
  keywords: [
    "تصميم",
    "تطوير",
    "تسويق رقمي",
    "هوية بصرية",
    "مواقع إلكترونية",
    "سوشيال ميديا",
    "تصميم مواقع",
    "برمجة خاصة",
    "حملات إعلانية",
    "SEO"
  ]
};

export const validateQuestion = (question: string): boolean => {
  const keywords = [
    "توب ماستري",
    "Top Mastery",
    "توب ماسترى",
    ...COMPANY_CONTEXT.keywords
  ];

  // التحقق مما إذا كان السؤال يحتوي على كلمات مفتاحية تخص الشركة
  return keywords.some(keyword => 
    question.toLowerCase().includes(keyword.toLowerCase())
  );
};

export const getRelevantContext = (question: string) => {
  // تحديد السياق المناسب بناءً على السؤال
  if (question.includes("خدمات") || question.includes("services")) {
    return COMPANY_CONTEXT.services;
  }
  if (question.includes("اتصال") || question.includes("تواصل")) {
    return COMPANY_CONTEXT.contact;
  }
  if (question.includes("عن الشركة") || question.includes("من نحن")) {
    return COMPANY_CONTEXT.about;
  }
  // ... إضافة المزيد من الحالات حسب الحاجة

  return COMPANY_CONTEXT; // إرجاع السياق الكامل إذا لم يتم تحديد سياق محدد
};
