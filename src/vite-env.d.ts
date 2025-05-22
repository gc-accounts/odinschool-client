/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    readonly VITE_BACKEND_TOKEN: string;
    readonly VITE_IS_DEVELOPMENT: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

