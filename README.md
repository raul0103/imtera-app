# Imtera App — Laravel + Frontend (Vite/React/Nuxt)

## 🚀 Структура

- `backend/` — Laravel приложение
- `frontend/` — SPA
- `docker-compose.yml` — общий докер для обоих сервисов

---

## Backend

Заполнить backend/.env

Запустить контейнер

```bash
docker compose up -d --build
```

Установка зависимостей:

```bash
docker compose exec backend composer install
```

Миграции:

```bash
docker compose exec backend php artisan migrate
```

Генерация ключа:

```bash
docker compose exec backend php artisan key:generate
```

Запуск DEV

```bash
docker compose exec backend php artisan serve --host=0.0.0.0 --port=80
```

Laravel доступен по адресу:  
 `http://localhost/api/`

---

## Frontend

Установка зависимостей:

```bash
docker compose exec frontend npm install
```

Запуск dev-сервера:

```bash
docker compose exec frontend npm run dev -- --port 5173 --host 0.0.0.0
```

Фронтенд доступен по адресу:  
 `http://localhost/`
