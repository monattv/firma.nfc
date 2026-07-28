const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";





function login(){


let username =
document.getElementById("username").value;



let password =
document.getElementById("password").value;




fetch(API_URL,{

method:"POST",

body:JSON.stringify({

tipo:"login",

username:username,

password:password

})

})


.then(r=>r.json())


.then(risultato=>{


if(risultato.success){


localStorage.setItem(
"adminLogin",
"true"
);



window.location.href="dashboard.html";


}

else{


document.getElementById("errore").innerHTML =
"Username o password errati";


}


});


}








function caricaOrdini(){



fetch(API_URL + "?azione=ordini")


.then(response=>response.json())


.then(ordini=>{



let contenitore =
document.getElementById("ordini");



contenitore.innerHTML="";





if(ordini.length===0){


contenitore.innerHTML =
"<p>Nessun ordine</p>";

return;


}





ordini.forEach(ordine=>{


contenitore.innerHTML += `



<div class="ordine-box">


<h3>

${ordine["ID Ordine"]}

</h3>


<p>

Cliente:

${ordine.Nome}

${ordine.Cognome}

</p>



<p>

Telefono:

${ordine.Telefono}

</p>



<p>

Prodotti:

<br>

${ordine.Prodotti}

</p>



<p>

Totale:

${ordine.Totale} €

</p>



<p>

Stato:

${ordine.Stato}

</p>



</div>


`;



});



});



}
