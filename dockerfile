# Utiliza una imagen base de Playwright
FROM mcr.microsoft.com/playwright:bionic

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto
COPY . /app

# Indica que la instalación de dependencias y la ejecución se realizarán en el bash de Jenkins
CMD ["bash"]
