FROM php:8.2-fpm

# Устанавливаем необходимые расширения PHP для Laravel
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip git curl \
    && docker-php-ext-install pdo pdo_mysql mysqli zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Устанавливаем Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Рабочая директория
WORKDIR /var/www/html

# Копируем весь код приложения
COPY . .

# Меняем права на storage и bootstrap/cache сразу на этапе сборки
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Запуск php-fpm в foreground
CMD ["php-fpm", "-F"]
