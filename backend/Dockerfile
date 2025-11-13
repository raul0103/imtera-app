# backend/Dockerfile
FROM php:8.2-fpm

# Устанавливаем необходимые расширения PHP для Laravel
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_mysql zip

# Устанавливаем Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY . .

# Команда по умолчанию
CMD ["php-fpm"]
