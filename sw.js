self.addEventListener('install', (e) =>{
    console.log('SW: install')
    const promiseCache = caches.open("cache-1").then(cache => {
        return cache.addAll([
            'https://gustavolopez04.github.io/',
            '/index.html',
            '/views/dividir.html',
            '/views/sumar.html',
            '/views/restar.html',
            '/views/multiplicar.html',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js',
            'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css'
        ])
    })

    e.waitUntil(promiseCache)
})

self.addEventListener('fetch', (event)=>{

    const resp = caches.match(event.request)
    event.respondWith(resp)


})

// self.addEventListener('fetch', (e) =>{

//     const respuesta = fetch(e.request.url)
//                             .then(response => {
//                                 if(response.ok){
//                                     return response
//                                 }else{
                                    
//                                     return fetch("img/r6y.jpeg")
//                                 }
//                             })
//                             .catch(e =>{
//                                 console.log("Error");
//                             })

//     e.respondWith(respuesta)

//     // if(e.request.url.includes('style.css')){
//     //     console.log(e.request.url);


//     //     const resp = new Response(

//     //         `body: {
//     //             color: red;
//     //         }`,
//     //         {
//     //             headers: {
//     //                 'Content-type': 'text/css'
//     //             },
//     //         }
//     //     );

//     //     e.respondWith(
//     //         fetch('img/r6y.jpeg')
//     //     )
//     // }

//     // if(e.request.url.includes('jp')){
//     //     console.log(e.request.url);
//     //     e.respondWith(fetch("/img/r6y.jpeg"))
//     // }

 

// })