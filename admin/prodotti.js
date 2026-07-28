const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



let prodottiGlobali = [];





document.addEventListener(
"DOMContentLoaded",
()=>{

caricaProdotti();

}

);







function caricaProdotti(){


const area =
document.getElementById("prodotti");


area.innerHTML =
"⏳ Caricamento prodotti...";



fetch(API_URL)


.then(r=>r.json())


.then(prodotti=>{


prodottiGlobali = prodotti;



area.innerHTML="";



prodotti.forEach((p,index)=>{



area.innerHTML += `


<div class="ordine-box">


<h3>
${p.Nome}
</h3>



<p>
💰 Prezzo: ${p.Prezzo} €
</p>


<p>
Disponibile: ${p.Disponibile}
</p>


<p>
Colori: ${p.Colori}
</p>


<p>
Forme: ${p.Forme}
</p>



<button onclick="modificaProdotto(${index})">

✏️ Modifica

</button>



</div>



`;



});



})


.catch(e=>{


console.error(e);


area.innerHTML =
"❌ Errore caricamento prodotti";


});


}








function modificaProdotto(index){


const p =
prodottiGlobali[index];



const area =
document.getElementById("prodotti");



area.innerHTML = `



<div class="ordine-box">


<h2>
Modifica ${p.Nome}
</h2>



<label>
Nome
</label>


<input id="nomeMod"
value="${p.Nome}">



<label>
Prezzo
</label>


<input id="prezzoMod"
value="${p.Prezzo}">



<label>
Disponibilità
</label>


<select id="dispMod">


<option ${p.Disponibile=="SI"?"selected":""}>
SI
</option>


<option ${p.Disponibile=="NO"?"selected":""}>
NO
</option>


</select>





<label>
Colori
</label>


<input id="coloriMod"
value="${p.Colori}">





<label>
Forme
</label>


<input id="formeMod"
value="${p.Forme}">





<button onclick="salvaModifica(${p.ID})">

💾 Salva

</button>




<button onclick="caricaProdotti()">

❌ Annulla

</button>



</div>


`;



}









function salvaModifica(id){


alert(
"Salvataggio prodotto ID "+id+" pronto"
);



}