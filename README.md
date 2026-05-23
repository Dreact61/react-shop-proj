# React Store — интернет‑магазин

Мини‑магазин на React + TypeScript с корзиной, возможностью авторизации и адаптацией под размер экрана устройства.
Данные тянутся с https://dummyjson.com/products через Axios.

## Скриншоты

![Главная страница](public/screenshots/Главная.png)
![Страница продукта](public/screenshots/Профиль.png)
![Корзина](public/screenshots/Страница_входа.png)

## Технологии

- React + TypeScript
- Zustand - управление состоянием корзины и UI
- Axios - работу с API DummyJSON (`https://dummyjson.com/products`)
- Tailwind CSS - стили и компоненты
- React Router (v6) - навигация по страницам
- Vite - сборка проекта

## Как запустить

1. Клонировать репозиторий:
```bash
git clone https://github.com/dreact/react-shop-proj.git
cd react-store
```

2. Установить зависимости:
```bash
npm install
# или yarn install
```

3. Запустить в режиме разработки:
```bash
npm run dev
# или npm start
```

4. Открыть в браузере:
- http://localhost:3000 (или порт, который выводит Vite/CRA)

## Основные функции

- Список продуктов с карточками.
- Механика входа и выхода в аккаунт через localStorage
- Корзина (добавление, удаление, изменение количества) через Zustand.
- Простая навигация (Главная, Корзина) через React Router.

## Ссылка на демо

- Demo на GitHub Pages / Vercel

## Потенциальное развитие

- Оформление заказа.
- Сохранение корзины в localStorage.
- Адаптивная верстка под мобильные устройства.

## Как внести вклад

Если хочешь улучшить проект:

1. Форкните репозиторий.
2. Создайте свою ветку: `git checkout -b feat/имя-фичи`.
3. Сделайте коммиты и сделайте pull request.
