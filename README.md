# DoofPlus Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Landing Page of **DoofPlus**, the pharmaceutical quality-management platform developed by IngesCompanyCC (1ASI0730 · Aplicaciones Web · UPC).

Built with HTML5, CSS3 and JavaScript, bilingual (English by default and Latin American Spanish) and responsive for desktop and mobile.

## Team

- Marcelo Angulo
- Yhoshua Cobades
- Cristina Yarleque
- Nestor Rojas
- Rodolfo Zavaleta

## Pages

| Page | Content |
|------|---------|
| `index.html` | Hero, segment access, services, features, About-the-Product video, benefits, plans, about us, team, testimonials, FAQ, contact inquiry form and footer. |
| `terms.html` | Terms of Service. |
| `privacy.html` | Privacy Policy (Law N.° 29733). |

## Structure

```text
public/assets/
├── images/                     # Logo, hero image and team photos
├── scripts/
│   ├── main.js                 # Language switcher and page behavior
│   └── translations/           # en.js and es.js (same keys in both files)
└── styles/
    └── style.css               # Site styles
```

Texts are referenced from the HTML with `data-i18n` attributes. To add a text, add the same key to `en.js` and `es.js`. English (`en-US`) is the default language and Latin American Spanish (`es-419`) is the alternative.

## Run locally

Serve the site over HTTP, for example with the built-in server of WebStorm (*Open in Browser*) or:

```bash
python -m http.server 8080
```

## Deployment

The site is static and is published with GitHub Pages from the `main` branch (*Settings > Pages > Deploy from a branch > main / root*).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
