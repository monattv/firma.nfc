const API_URL = "IL TUO LINK APPS SCRIPT";


// Recupera ID prodotto dall'URL

const params = new URLSearchParams(
    window.location.search
);

const idProdotto = params.get("id");



// Elementi pagina

const nome = document.getElementById(
    "nome-prodotto"
);


const area = document.getElementById(
    "personalizzazione"
);



// Configurazione cliente

let configurazione = {

    id:"",
    nome:"",
    prezzo:"",
    colore:"",
    forma:"",
    incisione:"",
    testo:"",
    immagine:"",
    anello:""

};




// Caricamento prodotti da Google Sheets

fetch(API_URL)

.then(response => response.json())

.then(prodotti => {


    const prodotto = prodotti.find(
        p => p.ID == idProdotto
    );


    if(!prodotto){

        nome.innerHTML =
        "Prodotto non trovato";

        return;

    }



    configurazione.id =
    prodotto.ID;


    configurazione.nome =
    prodotto.Nome;


    configurazione.prezzo =
    prodotto.Prezzo;



    mostraProdotto(prodotto);



})

.catch(error => {


    console.error(
        "Errore caricamento prodotto:",
        error
    );


});









function mostraProdotto(prodotto){


    nome.innerHTML =
    prodotto.Nome;



    area.innerHTML = `



<h3>
Personalizza il tuo prodotto
</h3>




<h4>
Colore
</h4>


<div>

${creaBottoni(
    prodotto.Colori,
    "colore"
)}

</div>





<h4>
Forma
</h4>


<div>

${creaBottoni(
    prodotto.Forme,
    "forma"
)}

</div>





<h4>
Incisione
</h4>



<label>

<input

type="radio"

name="incisione"

value="Testo"

onchange="scegliIncisione('Testo')"

>

Testo

</label>




<label>

<input

type="radio"

name="incisione"

value="Immagine"

onchange="scegliIncisione('Immagine')"

>

Immagine

</label>






<h4>
Testo incisione
</h4>



<input

id="testo-personalizzato"

type="text"

placeholder="Scrivi il testo"

oninput="aggiornaTesto(this.value)"

>







<h4>
Carica immagine
</h4>




<input

type="file"

accept="image/*"

onchange="caricaImmagine(event)"

>







<h4>
Colore anello
</h4>


<div>

${creaBottoni(
    prodotto.ColoreAnello,
    "anello"
)}

</div>




<br>



<button

class="main-button"

onclick="salvaConfigurazione()"

>

Aggiungi al carrello

</button>


`;





// Immagine iniziale

if(prodotto.ImmagineBase){


document.getElementById(
"immagine-prodotto"
).src =

"images/prodotti/portachiavi/"
+
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

onclick="selezionaOpzione('${tipo}','${elemento}')"

>

${elemento}

</button>


`;


})

.join("");



}









function selezionaOpzione(tipo,valore){



const pulsanti =
document.querySelectorAll(".option");



pulsanti.forEach(p => {


if(p.innerHTML.trim()==valore){


p.classList.add(
"selezionato"
);


}

else {


p.classList.remove(
"selezionato"
);


}


});





configurazione[tipo]=valore;





if(tipo=="colore"){


cambiaImmagineColore(valore);


}




}









function cambiaImmagineColore(colore){



const immagine =
document.getElementById(
"immagine-prodotto"
);



if(!immagine){

return;

}



let nomeFile =
colore
.toLowerCase()
.trim();




immagine.src =

"images/prodotti/portachiavi/"
+
nomeFile
+
".png";



}









function scegliIncisione(tipo){


configurazione.incisione =
tipo;



}









function aggiornaTesto(testo){



const anteprima =
document.getElementById(
"testo-incisione"
);



if(anteprima){


anteprima.innerHTML =
testo;


}



configurazione.testo =
testo;



}









function caricaImmagine(event){



const file =
event.target.files[0];



if(!file){

return;

}



const lettore =
new FileReader();




lettore.onload =
function(e){



const img =
document.getElementById(
"immagine-caricata"
);



img.src =
e.target.result;



img.style.display =
"block";



configurazione.immagine =
e.target.result;



}




lettore.readAsDataURL(file);



}









function salvaConfigurazione(){



console.log(
"Configurazione:",
configurazione
);




localStorage.setItem(

"prodottoCarrello",

JSON.stringify(configurazione)

);




alert(
"Prodotto aggiunto al carrello!"
);



}
