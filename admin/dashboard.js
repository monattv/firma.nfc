const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



function caricaOrdini(){


const contenitore =
document.getElementById("ordini");


contenitore.innerHTML =
"⏳ Caricamento ordini...";



fetch(API_URL + "?azione=ordini")

.then(response=>response.json())

.then(ordini=>{


console.log("ORDINI:",ordini);



if(ordini.length===0){


contenitore.innerHTML =
"📭 Nessun ordine trovato";


return;

}



contenitore.innerHTML="";



ordini.forEach(ordine=>{


contenitore.innerHTML += `

<div class="ordine-box">

<h3>
${ordine["ID Ordine"]}
</h3>


<p>
👤 ${ordine.Nome}
${ordine.Cognome}
</p>


<p>
📞 ${ordine.Telefono}
</p>


<p>
📦 ${ordine.Prodotti}
</p>


<p>
💰 ${ordine.Totale} €
</p>


<p>
Stato:
${ordine.Stato}
</p>


</div>

`;


});


})


.catch(error=>{


console.error(error);


contenitore.innerHTML =
"❌ Errore caricamento ordini";


});


}