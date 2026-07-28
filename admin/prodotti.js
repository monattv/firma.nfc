const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";


document.addEventListener("DOMContentLoaded", ()=>{

    caricaProdotti();

});



function caricaProdotti(){


const area =
document.getElementById("prodotti");


area.innerHTML =
"⏳ Avvio caricamento...";



console.log("INIZIO FETCH");



fetch(API_URL)


.then(response=>{


console.log("RISPOSTA RICEVUTA", response);


return response.text();


})


.then(testo=>{


console.log("TESTO SERVER:", testo);



let prodotti;


try{

prodotti = JSON.parse(testo);

}

catch(e){

throw new Error(
"Il server non ha restituito JSON"
);

}



area.innerHTML="";



prodotti.forEach((p,index)=>{


area.innerHTML += `

<div class="ordine-box">

<h3>
${p.Nome}
</h3>

<p>
Prezzo: ${p.Prezzo} €
</p>

<p>
Disponibile: ${p.Disponibile}
</p>

<button onclick="modificaProdotto(${index})">
✏️ Modifica
</button>


</div>

`;


});


})


.catch(error=>{


console.error(
"ERRORE:",
error
);


area.innerHTML =
"❌ Errore: "+error.message;


});


}