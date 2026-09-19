const publicBase = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default {
  "basePath": publicBase,
  "template": {
    "specialty": "nails",
    "bookingProvider": "Телефон",
    "reviewSource": "Яндекс Карты"
  },
  "brand": {
    "name": "Наталья Фадеева",
    "subtitle": "Маникюр и педикюр",
    "monogram": "НФ"
  },
  "master": {
    "name": "Наталья",
    "dative": "Наталье",
    "genitive": "Натальи",
    "instrumental": "Натальей",
    "monogram": "НФ",
    "profession": "мастер маникюра и педикюра",
    "heroTitle": "",
    "heroEmphasis": "эксперт по маникюру и педикюру",
    "heroCaption": "Мастер маникюра и педикюра",
    "imageAlt": "мастер маникюра и педикюра",
    "heroCopy": "Маникюр, педикюр, покрытие и наращивание ногтей с вниманием к аккуратности и комфорту.",
    "visitMotto": "",
    "experienceYears": "14",
    "experienceAria": "14 лет опыта",
    "aboutTitle": "Наталья Фадеева",
    "aboutLead": "",
    "aboutParagraphs": [],
    "skills": []
  },
  "location": {
    "country": "Россия",
    "countryCode": "RU",
    "city": "Москва",
    "metro": "",
    "cityMetro": "Москва",
    "address": "Люблинская улица, 72, корп. 3, этаж 2, офис 19, 109382",
    "mapCardAddress": "Люблинская улица, 72, корп. 3, этаж 2, офис 19, 109382",
    "schedule": "Ежедневно 10:00–21:00",
    "scheduleCapitalized": "Ежедневно 10:00–21:00",
    "timeZone": "Europe/Moscow",
    "openTime": "10:00",
    "closeTime": "21:00"
  },
  "contacts": {
    "phoneDisplay": "+7 (925) 163-10-65",
    "phoneHref": "tel:+79251631065",
    "messenger": null
  },
  "links": {
    "bookingUrl": "",
    "reviewsUrl": "https://yandex.com/maps/org/master_po_manikyuru_i_pedikyuru_fadeyeva_n_s_/6585606649/reviews/",
    "mapUrl": "https://yandex.com/maps/org/master_po_manikyuru_i_pedikyuru_fadeyeva_n_s_/6585606649/",
    "routeUrl": "https://yandex.com/maps/org/master_po_manikyuru_i_pedikyuru_fadeyeva_n_s_/6585606649/",
    "mobileMapEmbedUrl": "about:blank",
    "desktopMapEmbedUrl": "about:blank",
    "yandexMapHrefMatch": "6585606649"
  },
  "reputation": {
    "rating": "5.0",
    "reviewCount": "45"
  },
  "images": {
    "logo": "",
    "portrait": `${publicBase}/placeholder.svg`,
    "about": `${publicBase}/placeholder.svg`,
    "favicon": `${publicBase}/placeholder.svg`,
    "heroDecoration": `${publicBase}/assets/template/hair-tools.png`,
    "beforeAfter": [],
    "gallery": []
  },
  "services": {
    "groups": [
      {
        "id": "manicure",
        "label": "Маникюр",
        "services": [
          {
            "name": "Маникюр с покрытием, гель-лак",
            "price": "2 500 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Маникюр, комплекс",
            "price": "3 000 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Классический маникюр",
            "price": "1 200 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Наращивание ногтей",
            "price": "3 500 ₽",
            "time": "",
            "description": "Длина до 3-ки.",
            "url": ""
          }
        ]
      },
      {
        "id": "pedicure",
        "label": "Педикюр",
        "services": [
          {
            "name": "Педикюр с покрытием, гель-лак",
            "price": "3 000 ₽",
            "time": "",
            "description": "",
            "url": ""
          },
          {
            "name": "Классический педикюр",
            "price": "2 500 ₽",
            "time": "",
            "description": "",
            "url": ""
          }
        ]
      }
    ]
  },
  "i18n": {
    "localLocale": "ru",
    "locales": [
      {
        "code": "ru",
        "label": "RU"
      },
      {
        "code": "en",
        "label": "EN"
      }
    ],
    "translations": {
      "en": {
        "мастер маникюра и педикюра": "manicure and pedicure specialist",
        "эксперт по маникюру и педикюру": "manicure and pedicure expert",
        "Мастер маникюра и педикюра": "Manicure and pedicure specialist",
        "Маникюр, педикюр, покрытие и наращивание ногтей с вниманием к аккуратности и комфорту.": "Manicure, pedicure, gel polish and nail extensions with attention to precision and comfort.",
        "Наталья Фадеева": "Natalia Fadeeva",
        "Я Наталья — эксперт по маникюру и педикюру со стажем более 14 лет.": "I am Natalia — a manicure and pedicure expert with over 14 years of experience.",
        "Выполняю маникюр и педикюр, наращивание и коррекцию ногтей.": "I provide manicure and pedicure, nail extensions and corrections.",
        "Работаю со стерильными инструментами и уделяю внимание аккуратности, форме и качеству результата.": "I work with sterile instruments and pay close attention to precision, shape and the quality of the result.",
        "Маникюр и педикюр": "Manicure and pedicure",
        "Наращивание и коррекция": "Extensions and corrections",
        "Стерильные инструменты": "Sterile instruments",
        "Россия": "Russia",
        "Москва": "Moscow",
        "Люблинская улица, 72, корп. 3, этаж 2, офис 19, 109382": "72 Bldg. 3 Lyublinskaya Street, floor 2, office 19, Moscow, 109382",
        "Ежедневно 10:00–21:00": "Daily 10:00–21:00",
        "Маникюр": "Manicure",
        "Маникюр с покрытием, гель-лак": "Manicure with gel polish",
        "Маникюр, комплекс": "Manicure package",
        "Классический маникюр": "Classic manicure",
        "Наращивание ногтей": "Nail extensions",
        "Длина до 3-ки.": "Length up to size 3.",
        "Педикюр": "Pedicure",
        "Педикюр с покрытием, гель-лак": "Pedicure with gel polish",
        "Классический педикюр": "Classic pedicure"
      }
    }
  },
  "reviews": [],
  "promotions": [],
  "amenities": [],
  "seo": {
    "siteUrl": "https://ichaey.github.io/TAN-0012/",
    "title": "Наталья Фадеева — мастер маникюра и педикюра",
    "description": "Маникюр и педикюр у Натальи Фадеевой в Москве. 14 лет стажа. Запись по телефону.",
    "keywords": [
      "Наталья Фадеева",
      "маникюр Москва",
      "педикюр Москва",
      "наращивание ногтей Москва"
    ],
    "locale": "ru_RU"
  },
  "analytics": {
    "yandexMetrikaId": ""
  }
};
