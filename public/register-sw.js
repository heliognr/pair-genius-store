// C:\Users\helio\Desktop\Pair-Genius-2-main\public\register-sw.js
console.log('--- Início de register-sw.js (Manual) ---');
if ('serviceWorker' in navigator) {
  console.log('Service Workers são suportados neste navegador.');
  window.addEventListener('load', function() {
    console.log('Evento "load" disparado, tentando registar Service Worker...');
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful com scope: ', registration.scope);
    }).catch(function(err) {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
} else {
  console.warn('Service Workers NÃO são suportados neste navegador.');
}
console.log('--- Fim de register-sw.js (Manual) ---');