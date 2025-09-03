# Stage 1: Base image with PHP extensions
FROM php:8.3-fpm-alpine AS base
WORKDIR /var/www/html

# Install system dependencies needed for extensions
RUN apk add --no-cache \
    libpng-dev \
    libzip-dev \
    jpeg-dev \
    freetype-dev \
    libjpeg-turbo-dev \
    oniguruma-dev \
    libxml2-dev

# Install common Laravel PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath zip opcache

# ---
# Stage 2: Composer dependencies
FROM base AS composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY database/ database/
COPY composer.json composer.lock ./
RUN composer install --no-interaction --no-plugins --no-scripts --prefer-dist

# ---
# Stage 3: Frontend asset building
FROM node:20-alpine AS frontend
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY vite.config.js ./
COPY resources/ resources/
RUN npm run build

# ---
# Stage 4: Final Application Image
FROM base AS app
WORKDIR /var/www/html

# Create a non-root user to run the application
RUN addgroup -g 1000 -S www && \
    adduser -u 1000 -S www -G www

# Copy installed dependencies and built assets from previous stages
COPY --from=composer /var/www/html/vendor/ ./vendor/
COPY --from=frontend /app/public/build ./public/build

# Copy the rest of the application code
COPY . .

# Set correct permissions for storage and cache
RUN chown -R www:www storage bootstrap/cache && \
    chmod -R 775 storage bootstrap/cache

USER www
EXPOSE 9000
CMD ["php-fpm"]