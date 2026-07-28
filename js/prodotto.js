const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";


const params = new URLSearchParams(
    window.location.search
);


const idProdotto = params.get("id");


const nome = document.getElementById("nome-prodotto");
const area = document.getElementById("personalizzazione");

const immagine = document.getElementById("immagine-prodotto");
const testoIncisione = document.getElementById("testo-incisione");
const immagineCaricata = document.getElementById("immagine-caricata");



let prodotto;



fetch(API_URL)

.then(r => r.json())

.then(prodotti => {


prodotto = prodotti.find(
p => Number(p.ID) === Number(idProdotto)
);



if(!prodotto){

throw new Error("Prodotto non trovato");

}



nome.innerHTML = prodotto.Nome;



immagine.src =
"images/prodotti/portachiavi/" + prodotto.ImmagineBase;



creaPersonalizzazione();



})

.catch(err=>{

console.error(err);

area.innerHTML =
"Errore caricamento prodotto";

});







function creaPersonalizzazione(){



let colori = prodotto.Colori.split(",");

let forme = prodotto.Forme.split(",");

let anelli = prodotto.ColoreAnello.split(",");



area.innerHTML = `


<label>Colore portachiavi</label>

<select id="colore">

${colori.map(c=>`

<option>${c}</option>

`).join("")}

</select>




<label>Forma</label>

<select id="forma">

${forme.map(f=>`

<option>${f}</option>

`).join("")}

</select>




<label>Colore anello</label>

<select id="anello">

${anelli.map(a=>`

<option>${a}</option>

`).join("")}

</select>




<label>Incisione</label>

<select id="incisione">

<option value="No">
Nessuna
</option>


<option value="Testo">
Testo inciso
</option>

</select>



<input 
id="testo"
placeholder="Scrivi incisione">



<label>Immagine personalizzata</label>


<input 
type="file"
id="upload"
accept="image/*">



<button id="aggiungi">
Aggiungi al carrello
</button>


`;




document
.getElementById("testo")
.addEventListener("input",e=>{


testoIncisione.innerHTML =
e.target.value;


});





document
.getElementById("upload")
.addEventListener("change",e=>{


const file=e.target.files[0];


if(file){


const reader=new FileReader();


reader.onload=function(){

immagineCaricata.src =
reader.result;


};


reader.readAsDataURL(file);


}


});






document
.getElementById("aggiungi")
.onclick = aggiungiCarrello;


}









function aggiungiCarrello(){


let carrello =
JSON.parse(
localStorage.getItem("carrello")
) || [];



let prodottoCarrello={


id:prodotto.ID,


nome:prodotto.Nome,


prezzo:Number(prodotto.Prezzo),


colore:
document.getElementById("colore").value,


forma:
document.getElementById("forma").value,


anello:
document.getElementById("anello").value,


incisione:
document.getElementById("incisione").value,


testo:
document.getElementById("testo").value,


quantita:1


};




carrello.push(prodottoCarrello);



localStorage.setItem(
"carrello",
JSON.stringify(carrello)
);



alert("Aggiunto al carrello");


window.location.href="carrello.html";


}
