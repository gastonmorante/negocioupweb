# Galería Multimedia — NegocioUp × Activo Inmobiliario

Esta carpeta (`/public/galeria/`) contiene las piezas audiovisuales locales que alimentan al componente `<MediaGallery />` a través de `src/data/gallery.ts`.

## Carpeta de origen en Google Drive
https://drive.google.com/drive/folders/1saNIgcu8Uqk3pXZoDV0blhxrxy0Xan_S

## Cómo agregar o reemplazar videos e imágenes locales

1. Descarga los archivos de Google Drive (formato recomendado: `.mp4` H.264 para videos, `.jpg`/`.webp` para portadas o fotografías).
2. Colócalos aquí en `/public/galeria/` con nombres simples sin espacios ni acentos (por ejemplo: `bosques-reel.mp4`).
3. Abre `src/data/gallery.ts` y agrega o edita una entrada en `VERTICAL_VIDEOS` (9:16) o `HORIZONTAL_VIDEOS` (16:9):

```ts
{
  id: 'bosques-reel',
  title: 'Bosques · Ciudad Mayakoba',
  subtitle: 'Muestra de producción vertical para redes y pauta',
  category: 'Reel vertical 9:16',
  type: 'video',
  aspectRatio: '9/16',
  src: '/galeria/bosques-reel.mp4',
  duration: '0:45',
  tag: '9:16 · Meta Ads',
}
```

## Cómo usar enlaces `embedUrl` de Google Drive o recorridos 360°

Si prefieres no subir archivos pesados al repositorio (recomendado cuando los videos pesan más de 25 MB para despliegues en Git/Vercel):

- **Videos en Google Drive**: comparte el archivo como *"Cualquier persona con el enlace"* y usa el formato `/preview` en `embedUrl`:
  ```ts
  type: 'embed',
  embedUrl: 'https://drive.google.com/file/d/ID_DEL_ARCHIVO/preview',
  ```
- **Recorridos Virtuales 360°**: en `VIRTUAL_TOURS_360` dentro de `src/data/gallery.ts`, pega la URL pública de **Kuula**, **Matterport**, **CloudPano** o cualquier visor iframe 360° en la propiedad `embedUrl`. Mientras `embedUrl` esté vacío, la landing muestra un visor panorámico 360° interactivo de demostración.
