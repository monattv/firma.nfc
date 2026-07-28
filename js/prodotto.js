const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";


const params = new URLSearchParams(
    window.location.search
);


const idProdotto = params.get("id");



const nome = document.getElementById("nome-prodotto");

const area = document.getElementById("personalizzazione");



let configurazione = {

    id:"",
    nome:"",
    prezzo:"",
    colore:"",
    forma:"",
    incisione:"",
    testo:"",
    immagine:"",
    anello:"",
    quantita:1

};





fetch(API_URL)

.then(response => response.json())

.then(prodotti => {


    const prodotto = prodotti.find(
        p => p.ID == idProdotto
    );


    if(!prodotto){

        nome.innerHTML = "Prodotto non trovato";

        return;

    }



    configurazione.id = prodotto.ID;

    configurazione.nome = prodotto.Nome;

    configurazione.prezzo = prodotto.Prezzo;



    mostraProdotto(prodotto);


})

.catch(error => {

    console.error(
        "Errore:",
        error
    );

});









function mostraProdotto(prodotto){



nome.innerHTML = prodotto.Nome;



area.innerHTML = `



<h3>Personalizza il tuo prodotto</h3>



<h4>Colore</h4>

<div>

${creaBottoni(prodotto.Colori,"colore")}

</div>



<h4>Forma</h4>

<div>

${creaBottoni(prodotto.Forme,"forma")}

</div>



<h4>Incisione</h4>


<label>

<input 
type="radio"
name="incisione"
onchange="scegliIncisione('Testo')">

Testo

</label>



<label>

<input 
type="radio"
name="incisione"
onchange="scegliIncisione('Immagine')">

Immagine

</label>




<h4>Testo incisione</h4>


<input

type="text"

placeholder="Scrivi il testo"

oninput="aggiornaTesto(this.value)"

>





<h4>Carica immagine</h4>


<input

type="file"

accept="image/*"

onchange="caricaImmagine(event)"

>





<h4>Colore anello</h4>


<div>

${creaBottoni(prodotto.ColoreAnello,"anello")}

</div>




<br>


<button

class="main-button"

onclick="salvaConfigurazione()">

Aggiungi al carrello

</button>


`;





if(prodotto.ImmagineBase){


document.getElementById(
"immagine-prodotto"
).src =

"images/prodotti/portachiavi/" +
prodotto.ImmagineBase;


}


}









function creaBottoni(lista,tipo){



if(!lista){

return "";

}



return lista

.split(",")

.map(elemento => {


return `

<button

class="option"

onclick="selezionaOpzione('${tipo}','${elemento}',this)"

>

${elemento}

</button>

`;

})

.join("");



}








function selezionaOpzione(tipo,valore,bottone){



document
.querySelectorAll(".option")
.forEach(btn=>{

btn.classList.remove(
"selezionato"
);

});



bottone.classList.add(
"selezionato"
);



configurazione[tipo]=valore;



if(tipo=="colore"){

cambiaImmagineColore(valore);

}



}








function cambiaImmagineColore(colore){



let immagine =
document.getElementById(
"immagine-prodotto"
);



if(!immagine){

return;

}



immagine.src =

"images/prodotti/portachiavi/" +

colore.toLowerCase().trim()

+

".png";


}








function scegliIncisione(tipo){


configurazione.incisione = tipo;


}








function aggiornaTesto(testo){


let anteprima =
document.getElementById(
"testo-incisione"
);



if(anteprima){

anteprima.innerHTML = testo;

}



configurazione.testo = testo;


}








function caricaImmagine(event){



let file =
event.target.files[0];



if(!file){

return;

}



let lettore =
new FileReader();



lettore.onload=function(e){



let img =
document.getElementById(
"immagine-caricata"
);



img.src=e.target.result;


img.style.display="block";



configurazione.immagine =
e.target.result;


};



lettore.readAsDataURL(file);


}








function salvaConfigurazione(){



let carrello = JSON.parse(

localStorage.getItem("carrello")

) || [];




carrello.push({

...configurazione

});




localStorage.setItem(

"carrello",

JSON.stringify(carrello)

);



window.location.href =
"carrello.html";


}
