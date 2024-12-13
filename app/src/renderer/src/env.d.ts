/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly RENDERER_VITE_APP_FB_API: string;
  readonly RENDERER_VITE_APP_FB_DOMAIN: string;
  readonly RENDERER_VITE_APP_FB_PROJECT: string;
  readonly RENDERER_VITE_APP_FB_BUCKET: string;
  readonly RENDERER_VITE_APP_FB_SENDER: string;
  readonly RENDERER_VITE_APP_FB_APP: string;
  readonly RENDERER_VITE_APP_FB_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
