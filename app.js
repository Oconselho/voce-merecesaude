document.addEventListener('DOMContentLoaded', () => {
    // 3. Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((registration) => {
                    console.log('ServiceWorker registrado com sucesso: ', registration.scope);
                })
                .catch((error) => {
                    console.error('Falha ao registrar ServiceWorker: ', error);
                });
        });
    }
});
