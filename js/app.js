
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/service-worker-cache/sw.js')
}

// if(window.caches){
//     console.log("soportas cache");
//     caches.open('cache 2').then(res => {

//         res.addAll(
//             ['/index.html', '/css/style.css']
//         ).then(a => {
//             res.delete('/index.html')
//         })


//         res.match("/css/style.css").then(resp =>{
//             resp.text().then(text =>{
//                 console.log(text);
//             })
//         })
        
//     })
// }