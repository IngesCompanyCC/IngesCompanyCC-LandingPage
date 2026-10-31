# DoofPlus Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Landing Page of **DoofPlus**, the pharmaceutical quality-management platform developed by IngesCompanyCC (1ASI0730 · Aplicaciones Web · UPC).

Built with HTML5, CSS3 and JavaScript, bilingual (English by default and Latin American Spanish) and responsive for desktop and mobile.

- **Landing Page:** https://ingescompanycc.github.io/IngesCompanyCC-LandingPage/
- **Web Application:** https://ingescompanycc-frontend.web.app

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
├── cursors/                    # Custom cursors (default, pointer and text)
├── i18n/                       # en.json and es.json (same keys in both files)
├── images/                     # Logo, hero image and team photos
├── scripts/
│   ├── main.js                 # Entry point (ES module) shared by every page
│   ├── config.js               # Web Application URL, video URLs and segment routes
│   ├── i18n.js                 # I18nService: loads the JSON files and applies data-i18n
│   ├── components/             # Language switcher, navbar, segment access, accordions,
│   │                           # billing toggle, video players and contact inquiry
│   ├── effects/                # Magnetic effect of the call-to-action buttons
│   └── utils/                  # Safe access to localStorage and sessionStorage
└── styles/
    ├── main.css                # Imports the modules below in cascade order
    ├── variables.css           # Design tokens
    ├── reset.css               # Base element styles
    ├── layout.css              # Container, navbar, sections and footer
    ├── grid.css                # 12-column fluid grid
    ├── components.css          # Buttons, links, forms and skip link
    ├── sections.css            # Sections of index.html
    ├── pages.css               # terms.html and privacy.html
    ├── cursor.css              # Custom cursors
    └── responsive.css          # Breakpoints (1080px, 900px and 600px)
```

Texts are referenced from the HTML with `data-i18n` attributes. To add a text, add the same key to `en.json` and `es.json`. English (`en-US`) is the default language and Latin American Spanish (`es-419`) is the alternative.

## Run locally

The scripts are ES modules and the texts are loaded with `fetch`, so the site must be served over HTTP (opening `index.html` directly from the file system does not load them):

```bash
npm install
npm start
```

The site opens on http://localhost:8080. While it runs on `localhost`, the sign-in and call-to-action buttons open the Web Application of the local development server (http://localhost:5173); on GitHub Pages they open the published Web Application (`public/assets/scripts/config.js`).

## Deployment

The site is static and is published with GitHub Pages from the `main` branch (*Settings > Pages > Deploy from a branch > main / root*).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
