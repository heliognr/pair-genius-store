// next.config.mjs
// Mude a importação para o novo pacote
import withPWA from '@ducanh2912/next-pwa';

// Adicione estas linhas para depuração
console.log('--- next.config.mjs Debug ---');
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
console.log('PWA disable setting:', process.env.NODE_ENV === 'development');
console.log('----------------------------');


// Configuração do next-pwa (com as opções que já definimos)
const pwaConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  debug: true, // Mantenha para depuração
  // As buildExcludes são válidas e provavelmente funcionarão melhor agora
  buildExcludes: [
    /middleware.js$/,
    /_middleware.js$/,
    /_next\/static\/.*(?<!\.(js|json|css|html))$|^_next\/static\/chunks\/pages.*\.js$/,
    /_next\/static\/chunks\/app.*\.js$/,
    /_next\/static\/chunks\/webpack-.*\.js$/,
    /_next\/app-build-manifest.json$/,
    /_next\/react-loadable-manifest.json$/,
    /_next\/server\//,
  ],
  // Algumas opções extras que pode considerar para o @ducanh2912/next-pwa:
  // sw: 'service-worker.js', // Nome do SW gerado (padrão é sw.js, mas pode ser útil)
  // runtimeCaching: [], // Se precisar de regras de cache personalizadas
  // customWorkerDir: 'worker', // Se tiver um custom worker
});

const nextConfig = {
  output: 'export',
  distDir: 'out',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['@tauri-apps/api'],
};

// Exporte a configuração combinada
export default pwaConfig(nextConfig);