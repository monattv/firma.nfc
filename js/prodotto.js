const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";


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




// Carica prodotti dal database

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


    mostraProdotto(prodotto);


})

.catch(error => {


    console.error(
        "Errore caricamento prodotto:",
        error
    );


});





function mostraProdotto(prodotto){


    nome.innerHTML = prodotto.Nome;



    area.innerHTML = `


    <h3>
    Personalizza il tuo prodotto
    </h3>



    <h4>
    Colore
    </h4>

    <div>

    ${creaBottoni(prodotto.Colori)}

    </div>





    <h4>
    Forma
    </h4>

    <div>

    ${creaBottoni(prodotto.Forme)}

    </div>





    <h4>
    Incisione
    </h4>


    <div>


    <label>

    <input 
    type="radio" 
    name="incisione"
    value="testo"
    checked>

    Testo

    </label>



    <label>

    <input 
    type="radio" 
    name="incisione"
    value="immagine">

    Immagine

    </label>


    </div>





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

    id="upload-immagine"

    type="file"

    accept="image/*"

    onchange="caricaImmagine(event)"

    >






    <h4>
    Colore anello
    </h4>


    <div>

    ${creaBottoni(prodotto.ColoreAnello)}

    </div>





    <button class="main-button">

    Aggiungi al carrello

    </button>


    `;



    // Carica immagine base prodotto

    if(prodotto.ImmagineBase){

        document.getElementById(
            "immagine-prodotto"
        ).src =
        "images/prodotti/portachiavi/" 
        + prodotto.ImmagineBase;

    }



}







// Crea pulsanti automatici

function creaBottoni(lista){


    if(!lista){

        return "";

    }



    return lista

    .split(",")

    .map(elemento => {


        return `


        <button 

        class="option"

        onclick="selezionaOpzione('${elemento}')"

        >

        ${elemento}

        </button>


        `;


    })

    .join("");



}






// Cambia opzione selezionata

function selezionaOpzione(opzione){


    console.log(
        "Selezionato:",
        opzione
    );


}








// Aggiorna testo incisione

function aggiornaTesto(testo){


    document.getElementById(
        "testo-incisione"
    ).innerHTML = testo;


}








// Caricamento immagine cliente

function caricaImmagine(event){


    const file =
    event.target.files[0];


    if(!file){

        return;

    }



    const lettore =
    new FileReader();



    lettore.onload = function(e){


        const img =
        document.getElementById(
            "immagine-caricata"
        );


        img.src =
        e.target.result;


        img.style.display =
        "block";


    }



    lettore.readAsDataURL(file);



}
