const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



const params = new URLSearchParams(
    window.location.search
);


const idProdotto = params.get("id");



const nome = document.getElementById(
    "nome-prodotto"
);



const area = document.getElementById(
    "personalizzazione"
);





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



    mostraProdotto(prodotto);


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

${creaBottoni(
    prodotto.Colori
)}

</div>



<h4>
Forma
</h4>


<div>

${creaBottoni(
    prodotto.Forme
)}

</div>




<h4>
Incisione
</h4>


<div>


<label>

<input type="radio" name="incisione">

Testo

</label>


<label>

<input type="radio" name="incisione">

Immagine

</label>


</div>




<h4>
Testo incisione
</h4>


<input 
type="text"
placeholder="Scrivi qui">





<h4>
Carica immagine
</h4>


<input 
type="file">





<h4>
Colore anello
</h4>


<div>

${creaBottoni(
    prodotto.ColoreAnello
)}

</div>


<button>

Aggiungi al carrello

</button>


`;



}







function creaBottoni(lista){


if(!lista){

return "";

}


return lista
.split(",")
.map(elemento => {


return `

<button class="option">

${elemento}

</button>

`;

})
.join("");

}
