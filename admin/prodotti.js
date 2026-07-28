const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";




function caricaProdotti(){


const area =
document.getElementById("prodotti");



area.innerHTML =
"⏳ Caricamento prodotti...";




fetch(API_URL)


.then(r=>r.json())


.then(prodotti=>{



console.log(prodotti);



area.innerHTML="";



prodotti.forEach(p=>{



area.innerHTML += `



<div class="ordine-box">



<h3>

${p.Nome}

</h3>



<p>

💰 Prezzo:

${p.Prezzo} €

</p>




<p>

Disponibile:

${p.Disponibile}

</p>



<p>

Colori:

${p.Colori}

</p>




<p>

Forme:

${p.Forme}

</p>




<p>

Incisione:

${p.Incisione}

</p>




<button>

Modifica

</button>



</div>



`;



});



})


.catch(err=>{


console.error(err);


area.innerHTML=

"❌ Errore caricamento prodotti";


});



}