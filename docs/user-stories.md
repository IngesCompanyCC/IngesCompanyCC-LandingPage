# User Stories

## Overview
This document presents the functional and technical requirement user stories for the **DoofPlus** Landing Page application (IngesCompanyCC). The requirements are organized around the core business epic: **EP01 - Landing Page & Public Experience**.

## US01: Visualización de la propuesta de valor
**Title:** Visualización de la propuesta de valor  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante especialista QA/QC o jefe de producción, quiero conocer la propuesta de valor de DoofPlus para evaluar si responde a las necesidades de mi laboratorio.*

**Acceptance Criteria:**
- **Scenario 1: Visualización de la propuesta de valor:** Dado que el visitante accede a la Landing Page, cuando se carga la sección principal (Home), entonces visualiza el título, la descripción de la propuesta de valor y la opción para comenzar a usar DoofPlus.
- **Scenario 2: Visualización en dispositivo móvil:** Dado que el visitante accede desde un smartphone, cuando se carga la sección principal, entonces la propuesta de valor y la opción para comenzar a usar DoofPlus se muestran completas y adaptadas al dispositivo.

---

## US02: Visualización de servicios y características
**Title:** Visualización de servicios y características  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero conocer los servicios y características de DoofPlus para comprender cómo mejora la trazabilidad y la gestión de calidad.*

**Acceptance Criteria:**
- **Scenario 1: Consulta de servicios:** Dado que el visitante navega a la sección de servicios, cuando la sección se muestra, entonces visualiza los servicios Real-Time IoT Monitoring, Automated BPM Compliance, Immutable Traceability y Digital Batch Management con su descripción.
- **Scenario 2: Detalle de una característica:** Dado que el visitante se encuentra en la sección de características, cuando elige una característica, entonces se muestra su descripción completa.

---

## US03: Visualización de planes y precios
**Title:** Visualización de planes y precios  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante responsable de compras de un laboratorio, quiero consultar los planes y precios disponibles para identificar la alternativa más adecuada para mi organización.*

**Acceptance Criteria:**
- **Scenario 1: Consulta de precios mensuales:** Dado que el visitante accede a la sección de planes, cuando la sección se muestra, entonces visualiza los planes Standard Lab (US$199/mes) y Enterprise (US$599/mes) con sus características.
- **Scenario 2: Consulta de precios anuales:** Dado que el visitante revisa los planes, cuando elige la modalidad de pago anual, entonces se muestran los precios anuales (US$1,990 y US$5,990) con el ahorro correspondiente.

---

## US04: Formulario de contacto
**Title:** Formulario de contacto  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante interesado, quiero enviar una consulta al equipo de DoofPlus para resolver mis dudas sobre la plataforma y sus planes.*

**Acceptance Criteria:**
- **Scenario 1: Envío exitoso:** Dado que el visitante ingresa su nombre, un correo electrónico válido y su consulta, cuando envía el formulario, entonces el sistema registra la consulta y confirma su recepción al visitante.
- **Scenario 2: Datos inválidos:** Dado que el visitante ingresa un correo con formato inválido o deja la consulta vacía, cuando intenta enviar el formulario, entonces la consulta no se registra y se informa el motivo del error.
- **Scenario 3: Visualización de canales de contacto y redes sociales:** Dado que el visitante accede a la sección de contacto o al footer, cuando revisa la información, entonces visualiza canales directos de contacto (correo, teléfono, sede principal y horario) y acceso a las cuentas de redes sociales de DoofPlus.

---

## US05: Preguntas frecuentes
**Title:** Preguntas frecuentes  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero consultar preguntas frecuentes para resolver dudas comunes sobre la plataforma.*

**Acceptance Criteria:**
- **Scenario 1: Consulta de una respuesta:** Dado que el visitante accede a la sección de preguntas frecuentes, cuando selecciona una pregunta, entonces se muestra la respuesta correspondiente.
- **Scenario 2: Duda no resuelta:** Dado que el visitante no encuentra respuesta a su duda, cuando termina de revisar las preguntas, entonces se le ofrece la opción de contactar al equipo de DoofPlus.

---

## US44: Navegación por secciones
**Title:** Navegación por secciones  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero acceder rápidamente a cada sección de la Landing Page para encontrar la información que necesito.*

**Acceptance Criteria:**
- **Scenario 1: Acceso a una sección específica:** Dado que el visitante se encuentra en cualquier parte de la Landing Page, cuando accede a una sección específica, entonces se presenta el contenido de esa sección.
- **Scenario 2: Acceso desde un smartphone:** Dado que el visitante accede desde un smartphone, cuando accede a una sección específica, entonces se presenta el contenido de esa sección adaptado al dispositivo.

---

## US45: Visualización del equipo y de la startup
**Title:** Visualización del equipo y de la startup  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero conocer a IngesCompanyCC y a su equipo para generar confianza en la solución.*

**Acceptance Criteria:**
- **Scenario 1: Consulta del equipo:** Dado que el visitante accede a la sección About Us, cuando se muestra el equipo, entonces visualiza la foto, el nombre, el rol y la descripción de cada integrante.
- **Scenario 2: Consulta de la startup:** Dado que el visitante revisa la sección About Us, cuando la sección se muestra, entonces visualiza la descripción de IngesCompanyCC y los pilares del servicio.

---

## US46: Cambio de idioma
**Title:** Cambio de idioma  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero cambiar el idioma de la Landing Page entre inglés y español para comprender el contenido en mi idioma de preferencia.*

**Acceptance Criteria:**
- **Scenario 1: Cambio a español:** Dado que la Landing Page se muestra en inglés, cuando el visitante elige el idioma español, entonces todo el contenido textual se muestra en español latinoamericano (es-419).
- **Scenario 2: Idioma por defecto:** Dado que el visitante ingresa por primera vez, cuando se carga la Landing Page, entonces el contenido se muestra en inglés (en-US).

---

## US47: Consulta de términos y política de privacidad
**Title:** Consulta de términos y política de privacidad  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero consultar los términos y condiciones y la política de privacidad para conocer las condiciones del servicio y el tratamiento de mis datos.*

**Acceptance Criteria:**
- **Scenario 1: Acceso a términos y condiciones:** Dado que el visitante se encuentra en cualquier sección, cuando accede a los términos y condiciones desde el footer, entonces visualiza el documento vigente con su fecha de actualización.
- **Scenario 2: Acceso a política de privacidad:** Dado que el visitante se encuentra en cualquier sección, cuando accede a la política de privacidad desde el footer, entonces visualiza la política conforme a la Ley N.° 29733 de Protección de Datos Personales.

---

## US48: Acceso por segmento a la Web Application
**Title:** Acceso por segmento a la Web Application  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante especialista QA/QC o jefe de producción, quiero acceder desde la Landing Page a la vista de la Web Application de mi segmento para comenzar a usar la plataforma.*

**Acceptance Criteria:**
- **Scenario 1: Acceso del segmento QA/QC:** Dado que el visitante pertenece al segmento QA/QC, cuando elige acceder a la Web Application como especialista QA/QC, entonces es dirigido al inicio de sesión del entorno de calidad de la Web Application.
- **Scenario 2: Acceso del segmento Producción:** Dado que el visitante pertenece al segmento Producción, cuando elige acceder a la Web Application como jefe de producción, entonces es dirigido al inicio de sesión del entorno de producción de la Web Application.

---

## US49: Visualización del video promocional
**Title:** Visualización del video promocional  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como visitante, quiero ver un video sobre DoofPlus para entender rápidamente su funcionamiento.*

**Acceptance Criteria:**
- **Scenario 1: Reproducción del video:** Dado que el video About-the-Product está publicado en YouTube, cuando el visitante accede a la sección correspondiente, entonces puede reproducir el video incrustado.
- **Scenario 2: Video no disponible:** Dado que el servicio de video no responde, cuando el visitante accede a la sección, entonces se informa que el video no está disponible y se indica dónde consultarlo en YouTube.

---

## TS01: Implementación de Landing Page responsive y accesible
**Title:** Implementación de Landing Page responsive y accesible  
**Context:** EP01 - Landing Page & Public Experience  
**Description:**  
*Como Developer, quiero implementar la Landing Page con HTML5, CSS3 y JavaScript aplicando responsive web design y a11y para garantizar una experiencia adecuada en distintos dispositivos.*

**Acceptance Criteria:**
- **Scenario 1: Adaptación a mobile:** Dado que la Landing Page está desplegada, cuando se accede con un ancho de pantalla de 375 px, entonces los elementos se reorganizan en una sola columna sin desplazamiento horizontal.
- **Scenario 2: Adaptación a desktop:** Dado que la Landing Page está desplegada, cuando se accede con un ancho de pantalla de 1440 px, entonces el contenido se distribuye en la grilla de 12 columnas del Web Style Guide.
- **Scenario 3: Atributos de accesibilidad:** Dado que un lector de pantalla recorre la Landing Page, cuando lee imágenes y controles, entonces cada imagen tiene texto alternativo y cada control interactivo tiene atributos ARIA.