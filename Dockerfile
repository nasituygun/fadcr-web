# Adım 1: Node.js Image kullanın ve çalışma dizinini ayarlayın
FROM node:latest AS build
WORKDIR /app

# Adım 2: Gerekli bağımlılıkları kopyalayın ve proje dosyalarını ekleyin
COPY package*.json ./
RUN npm install
COPY . .

# Adım 3: Angular uygulamasını derleyin
RUN npm run build

# Adım 4: Sonuçları hafif bir Nginx sunucusuna kopyalayın
FROM nginx:alpine
COPY --from=build /app/dist/fadcr-web /usr/share/nginx/html

# Opsiyonel adım: Eğer ihtiyacınız varsa, portu dışarıya açın
EXPOSE 80

# Nginx'i başlatın
CMD ["nginx", "-g", "daemon off;"]
