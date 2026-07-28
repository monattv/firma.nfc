const API_URL = "https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



const container = document.getElementById(
    "product-container"
);





fetch(API_URL)


.then(response => response.json())


.then(prodotti => {


    mostraProdotti(prodotti);


})


.catch(error => {


    console.error(
        "Errore caricamento prodotti:",
        error
    );


});






function mostraProdotti(prodotti){



    container.innerHTML = "";



    prodotti.forEach(prodotto => {



        // mostra solo prodotti disponibili

        if(prodotto.Disponibile !== "SI"){

            return;

        }



        const card = document.createElement("div");



        card.className = "product-card";



        card.innerHTML = `


            <h3>

            ${prodotto.Nome}

            </h3>



            <p>

            ${prodotto.Descrizione}

            </p>



            <strong>

            ${formattaPrezzo(prodotto.Prezzo)} €

            </strong>



            <br><br>



            <button onclick="apriProdotto('${prodotto.ID}')">

Personalizza

</button>



        `;



        container.appendChild(card);



    });



}







function formattaPrezzo(prezzo){



    // Se Google Sheets manda una data

    if(typeof prezzo === "string" && prezzo.includes("T")){


        let data = new Date(prezzo);



        return data.getHours() 
        + "." 
        + data.getMinutes();



    }



    return prezzo;



}


function apriProdotto(id){

    window.location.href = 
    `prodotto.html?id=${id}`;

}
