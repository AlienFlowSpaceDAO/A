import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to my website",
      description: "This is a description",
      navbar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        academy: "Academy",
        club: "Club",
        conetworking: "Conetworking",
      },
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi sitio web",
      description: "Esta es una descripción",
      navbar: {
        home: "Inicio",
        about: "Sobre nosotros",
        contact: "Contacto",
        academy: "Academia",
        club: "Club",
        conetworking: "Co-networking",
      },
    },
  },
  zh: {
    translation: {
      welcome: "欢迎来到我的网站",
      description: "这是一个描述",
      navbar: {
        home: "主页",
        about: "关于我们",
        contact: "联系",
        academy: "学院",
        club: "俱乐部",
        conetworking: "共同工作",
      },
    },
  },
  ja: {
    translation: {
      welcome: "私のウェブサイトへようこそ",
      description: "これは説明です",
      navbar: {
        home: "ホーム",
        about: "私たちについて",
        contact: "連絡 (れんらく)",
        academy: "アカデミー",
        club: "クラブ",
        conetworking: "コネクションワーキング",
      },
    },
  },
  pt: {
    translation: {
      welcome: "Bem-vindo ao meu site",
      description: "Esta é uma descrição",
      navbar: {
        home: "Início",
        about: "Sobre nós",
        contact: "Contacto",
        academy: "Academia",
        club: "Clube",
        conetworking: "Co-networking",
      },
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue sur mon site web",
      description: "Ceci est une description",
      navbar: {
        home: "Accueil",
        about: "À propos",
        contact: "Contact",
        academy: "Académie",
        club: "Club",
        conetworking: "Co-networking",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
