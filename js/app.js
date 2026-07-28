const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";


fetch(API_URL)

.then(risposta => risposta.json())

.then(prodotti => {

console.log(prodotti);


});
