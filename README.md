# Веб-приложение для отображения списка товаров

Этот проект представляет собой веб-приложение, разработанное с использованием **Next.js** и **React** для отображения списка товаров, детальной информации о каждом товаре и реализации поиска. Пользователи могут фильтровать товары по названию и переходить на страницы с более подробной информацией о каждом товаре.

## Описание

В этом проекте реализованы следующие функциональности:

1. **Главная страница**:
   - Отображается список товаров с названием, ценой и кратким описанием.
   - Данные о товарах загружаются с сервера через API.

2. **Страница товара**:
   - При клике на товар на главной странице пользователь переходит на страницу с детальной информацией о товаре.
   - На странице товара отображается полное описание, изображение и цена.

3. **Поиск**:
   - На главной странице имеется поле для поиска.
   - Поиск фильтрует товары по имени в реальном времени, без перезагрузки страницы.

4. **API**:
   - `/api/products` — возвращает список товаров.
   - `/api/products/[id]` — возвращает информацию о товаре по его ID.

5. **Оптимизация производительности**:
   - Используется оптимизация изображений с помощью компонента `Image` от Next.js.
   - Применяются динамические импорты для уменьшения размера начальной загрузки.


## Технологии

- **Next.js** (для серверного рендеринга и API роутов)
- **React** (для рендеринга компонентов)
- **TypeScript** (для статической типизации)
- **CSS Modules** (для стилизации компонентов)
- **Image Optimization** (для оптимизации изображений)

## Установка

Чтобы запустить этот проект локально, выполните следующие шаги:

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/your-username/product-listing-app.git
  
    cd product-listing-app
Установите зависимости:

   
     npm install
Запустите проект:

    npm run dev
