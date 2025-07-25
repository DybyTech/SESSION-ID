# Utiliser une version Debian stable encore supportée
FROM node:lts-bullseye

# Mise à jour et installation des dépendances système
RUN apt-get update && \
  apt-get install -y ffmpeg imagemagick webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le fichier de dépendances et installer
COPY package.json .

# Installer les dépendances Node.js (incluant qrcode-terminal et pm2)
RUN npm install && npm install -g qrcode-terminal pm2

# Copier le reste du code source
COPY . .

# Exposer le port utilisé par ton app
EXPOSE 5000

# Lancer l'application
CMD ["npm", "start"]
