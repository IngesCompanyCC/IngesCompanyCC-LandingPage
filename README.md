# DoofPlus Landing Page

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Landing Page of **DoofPlus**, the pharmaceutical quality-management platform developed by IngesCompanyCC (Desarrollo de Aplicaciones Cloud Computing - UPC).

Built with HTML5, CSS3 and JavaScript, bilingual (English by default and Latin American Spanish) and responsive for desktop and mobile.

## Team
- Marcelo Angulo
- Yhoshua Cobades
- Cristina Flores
- Nestor Rojas
- Rodolfo Zavaleta

## Pages

| Page | Content |
|------|---------|
| index.html | Hero, segment access, services, features, About-the-Product video, benefits, plans, about us, team, testimonials, FAQ, contact inquiry form and footer. |
| 	erms.html | Terms of Service. |
| privacy.html | Privacy Policy (Law N.° 29733). |

## Structure

`	ext
public/assets/
├── cursors/                    # Custom cursors
├── images/                     # Logo, hero image and team photos
├── scripts/                    # JS files and translations (en.js, es.js)
└── styles/                     # CSS files (style.css)
`

Texts are referenced from the HTML with data-i18n attributes. To add a text, add the same key to en.js and es.js. English (en-US) is the default language and Latin American Spanish (es-419) is the alternative.

## Run locally

The scripts are ES modules and the texts are loaded dynamically, so the site must be served over HTTP:

`ash
python -m http.server 8080
`
"@

 = @"
MIT License
Copyright (c) 2026 IngesCompanyCC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
