# 🛍️ FakeStore Angular

Aplicación web SPA construida con Angular que simula una tienda de productos, utilizando datos de la [Fake Store API](https://fakestoreapi.com/). Incluye autenticación, gestión de carrito, rutas protegidas y un estado global con NgRx.

---

## 🚀 Funcionalidades implementadas

- Registro y login de usuarios con JWT
- Home con listado de productos desde API externa
- Agregado de productos al carrito (visualizado como contador)
- Envío automático del token en peticiones (HTTP Interceptor)
- Gestión global del carrito con NgRx
- Protección de rutas con Guards
- Estructura preparada para validación de roles

---

## 🧰 Tecnologías utilizadas

- **Angular 20**
- **Tailwind CSS**
- **NgRx (Store)**
- **HTTP Interceptors**
- **Angular Guards**
- **RxJS**
- **TypeScript**
- **Fake Store API**

---

## 📦 Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/andresfelipejoya/angular-product-store.git
   cd angular-product-store

2. Instala las dependencias:
    ```bash
    npm install

3. Ejecuta la aplicación:
    ```bash
    ng serve

4. Abre tu navegador:
    http://localhost:4200/


🛡️ Seguridad
Uso de tokens JWT en peticiones protegidas

Interceptor HTTP para automatizar el envío del token

Guards en rutas privadas

Preparado para validación por roles (admin, cliente)

✨ Próximas mejoras
Validación y control de acceso por roles

Visualización detallada del carrito

Proceso de checkout y resumen de compra

Persistencia de sesión

👨‍💻 Autor
Andrés Felipe Joya
[GitHub](https://github.com/andresfelipejoya) · [linkedin](linkedin.com/in/andrés-felipe-joya-angarita-5479a51b7)