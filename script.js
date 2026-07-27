const form = document.getElementById("orderForm");

const quantita = document.getElementById("quantita");

document.getElementById("plus").onclick = () => {

quantita.value++;

};


document.getElementById("minus").onclick = () => {

if(quantita.value > 1){

quantita.value--;

}

};



form.addEventListener("submit", async (e)=>{


e.preventDefault();


const dati = Object.fromEntries(
new FormData(form).entries()
);


const bottone = document.querySelector(".order-btn");


bottone.innerHTML="⏳ Invio ordine...";
bottone.disabled=true;



try{


await fetch(
"https://script.google.com/macros/s/AKfycbyngEx24SuA0n7FDfbQ7QWaYdGK8TNGIu3njAdSkBUy21ZaL4ePcKMBYOqHFT2zGu0liw/exec",
{

method:"POST",

redirect:"follow",

headers:{

"Content-Type":
"text/plain;charset=utf-8"

},

body:JSON.stringify(dati)

});



document.getElementById("risposta").innerHTML=
"✅ Ordine ricevuto! Ti contatteremo presto.";


form.reset();

quantita.value=1;



}

catch(error){


document.getElementById("risposta").innerHTML=
"❌ Errore invio ordine";


console.error(error);


}



bottone.innerHTML="🚀 Conferma ordine";

bottone.disabled=false;


});
