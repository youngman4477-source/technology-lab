function getLang() {
  return localStorage.getItem("siteLang") || "ar";
}

function toggleLang() {
  const current = getLang();
  const next = current === "ar" ? "en" : "ar";
  localStorage.setItem("siteLang", next);
  location.reload();
}

function applyCommonLang() {
  const lang = getLang();

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const common = {
    ar: {
      brandSub: "منصة للأفكار والبرامج والمنتجات",
      navHome: "الرئيسية",
      navFeatures: "الخدمات",
      navPrograms: "البرامج",
      navIdeas: "الأفكار",
      navContact: "التواصل",
      footerText: "جميع الحقوق محفوظة © Technology Lab",
      langBtn: "EN"
    },
    en: {
      brandSub: "Platform for ideas, programs and products",
      navHome: "Home",
      navFeatures: "Services",
      navPrograms: "Programs",
      navIdeas: "Ideas",
      navContact: "Contact",
      footerText: "All rights reserved © Technology Lab",
      langBtn: "AR"
    }
  }[lang];

  Object.keys(common).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = common[id];
  });
}
