const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
const mapUrl = "https://yandex.com/maps/org/master_po_manikyuru_i_pedikyuru_fadeyeva_n_s_/6585606649/";

const service = (name, description = "") => ({
  name,
  price: "",
  time: "",
  description,
  url: "",
});

export default {
  basePath: publicBase,
  template: {
    specialty: "nails",
    bookingProvider: "",
    reviewSource: "Яндекс Карты",
  },
  brand: {
    name: "Наталья Фадеева",
    subtitle: "Мастер по маникюру и педикюру",
    monogram: "НФ",
  },
  master: {
    name: "Наталья Фадеева",
    dative: "Наталье Фадеевой",
    genitive: "Натальи Фадеевой",
    instrumental: "Натальей Фадеевой",
    monogram: "НФ",
    profession: "мастер по маникюру и педикюру",
    heroTitle: "Наталья Фадеева",
    heroEmphasis: "мастер по маникюру и педикюру",
    heroCaption: "Мастер по маникюру и педикюру",
    imageAlt: "мастер по маникюру и педикюру",
    heroCopy: "Аккуратный маникюр и педикюр, стойкое покрытие и большой выбор оттенков.",
    visitMotto: "",
    experienceYears: null,
    experienceAria: "",
    aboutTitle: "Наталья Фадеева",
    aboutLead: "Наталья — частный мастер по маникюру и педикюру в Москве.",
    aboutParagraphs: [
      "Клиенты отмечают аккуратную работу без порезов, внимание к комфорту и стойкость покрытия.",
      "В отзывах также отмечают большой выбор цветов и баз и быстрый маникюр."
    ],
    skills: [
      "Маникюр",
      "Педикюр",
      "Покрытие и френч"
    ],
  },
  location: {
    country: "Россия",
    countryCode: "RU",
    city: "Москва",
    metro: "",
    cityMetro: "Москва",
    address: "Москва, Люблинская улица, 72к3, этаж 2, офис 19",
    mapCardAddress: "Люблинская улица, 72к3 · этаж 2 · офис 19",
    schedule: "",
    scheduleCapitalized: "",
    timeZone: "Europe/Moscow",
    openTime: "",
    closeTime: "",
  },
  contacts: {
    phoneDisplay: "",
    phoneHref: "",
    messenger: null,
  },
  links: {
    bookingUrl: "",
    reviewsUrl: "https://yandex.com/maps/org/master_po_manikyuru_i_pedikyuru_fadeyeva_n_s_/6585606649/reviews/",
    mapUrl,
    routeUrl: mapUrl,
    mobileMapEmbedUrl: "about:blank",
    desktopMapEmbedUrl: "about:blank",
    yandexMapHrefMatch: "6585606649",
  },
  reputation: {
    rating: "5.0",
    reviewCount: "45",
  },
  images: {
    logo: "",
    portrait: `${publicBase}/placeholder.svg`,
    about: `${publicBase}/placeholder.svg`,
    favicon: `${publicBase}/placeholder.svg`,
    heroDecoration: "",
    beforeAfter: [],
    gallery: [],
  },
  services: {
    groups: [
      {
        id: "manicure",
        label: "Маникюр",
        services: [
          service("Маникюр"),
          service("Маникюр с покрытием", "Стойкое покрытие и большой выбор цветов и баз."),
          service("Френч"),
        ],
      },
      {
        id: "pedicure",
        label: "Педикюр",
        services: [
          service("Педикюр"),
        ],
      },
    ],
  },
  i18n: {
    localLocale: "ru",
    locales: [
      { code: "ru", label: "RU" },
      { code: "en", label: "EN" },
    ],
    translations: {
      en: {
        "мастер по маникюру и педикюру": "manicure and pedicure specialist",
        "Мастер по маникюру и педикюру": "Manicure and pedicure specialist",
        "Аккуратный маникюр и педикюр, стойкое покрытие и большой выбор оттенков.": "Careful manicure and pedicure, durable coating and a wide choice of shades.",
        "Наталья Фадеева": "Natalia Fadeeva",
        "Наталья — частный мастер по маникюру и педикюру в Москве.": "Natalia is a private manicure and pedicure specialist in Moscow.",
        "Клиенты отмечают аккуратную работу без порезов, внимание к комфорту и стойкость покрытия.": "Clients mention careful work without cuts, attention to comfort and durable coating.",
        "В отзывах также отмечают большой выбор цветов и баз и быстрый маникюр.": "Reviews also mention a wide choice of colors and bases and fast manicure service.",
        "Маникюр": "Manicure",
        "Педикюр": "Pedicure",
        "Покрытие и френч": "Coating and French manicure",
        "Москва": "Moscow",
        "Москва, Люблинская улица, 72к3, этаж 2, офис 19": "Moscow, Lyublinskaya Street, 72 bldg. 3, floor 2, office 19",
        "Люблинская улица, 72к3 · этаж 2 · офис 19": "Lyublinskaya Street, 72 bldg. 3 · floor 2 · office 19",
        "Маникюр с покрытием": "Manicure with coating",
        "Стойкое покрытие и большой выбор цветов и баз.": "Durable coating and a wide choice of colors and bases.",
        "Френч": "French manicure"
      }
    },
  },
  reviews: [
    {
      author: "Отзыв на Яндекс Картах",
      text: "Клиент отмечает аккуратный маникюр без порезов, стойкое покрытие и внимательное отношение к комфорту."
    },
    {
      author: "Ольга Гордеева · Яндекс Карты",
      text: "Отмечает большой выбор цветов и баз, стойкость покрытия, быстрый маникюр и приятную атмосферу."
    }
  ],
  promotions: [],
  amenities: [],
  seo: {
    siteUrl: "https://ichaey.github.io/TAN-0012/",
    title: "Наталья Фадеева — мастер по маникюру и педикюру в Москве",
    description: "Маникюр и педикюр. Москва, Люблинская улица, 72к3, этаж 2, офис 19.",
    keywords: ["Наталья Фадеева", "маникюр Москва", "педикюр Москва", "Люблинская 72к3"],
    locale: "ru_RU",
  },
  analytics: {
    yandexMetrikaId: "",
  },
};
