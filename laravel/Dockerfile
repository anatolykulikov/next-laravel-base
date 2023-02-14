FROM php:8.1-fpm-alpine

RUN apk add --no-cache --update \
      acl \
      git \
      icu-libs \
      imagemagick \
      imap-dev \
      libgomp \
      libpng \
      libzip \
      openssh \
      openssl \
      zlib

RUN apk add --no-cache --virtual .build-deps \
      ${PHPIZE_DEPS} \
      icu-dev \
      imagemagick-dev \
      libpng-dev  \
      libzip-dev \
      openssl-dev \
      zlib-dev && \
    docker-php-ext-configure \
      zip && \
    docker-php-ext-configure \
      imap --with-imap-ssl && \
    docker-php-ext-install --jobs "$(nproc)" \
      bcmath \
      exif \
      gd \
      imap \
      intl \
      pcntl \
      pdo \
      pdo_mysql \
      mysqli \
      exif \
      zip && \
    pecl install \
      imagick \
      pcov && \
    pecl clear-cache && \
    docker-php-ext-enable \
      imagick && \
    apk del -f .build-deps && \
    rm -rf /tmp/*