const API_URL =
"https://script.google.com/macros/s/AKfycbyX9Kvz-Aa0PqfIoFLShhRcSuQYiffFFpZJKRncx_3S94PDN7-o83LGTHO5QrxILQ2V/exec";



function login(){


const username =
document.getElementById("username").value.trim();


const password =
document.getElementById("password").value.trim();


const button =
document.getElementById("loginBtn");


const btnText =
document.getElementById("btnText");


const loader =
document.getElementById("loader");


const status =
document.getElementById("status");





if(username === "" || password === ""){


status.innerHTML =
"⚠ Inserisci username e password";


return;


}





// avvio caricamento

button.disabled = true;

btnText.innerHTML =
"Accesso in corso";

loader.classList.add(
"show-loader"
);

status.innerHTML =
"Connessione al server...";







let controlloTimeout = setTimeout(()=>{


button.disabled=false;


btnText.innerHTML =
"Accedi";


loader.classList.remove(
"show-loader"
);


status.innerHTML =
"⚠ Il server non risponde. Riprova.";



},10000);







fetch(API_URL,{

method:"POST",

body:JSON.stringify({

tipo:"login",

username:username,

password:password

})


})



.then(response=>{


status.innerHTML =
"Risposta ricevuta...";


return response.text();


})



.then(testo=>{


clearTimeout(controlloTimeout);




console.log(
"RISPOSTA SERVER:",
testo
);




let risultato;



try{


risultato =
JSON.parse(testo);


}

catch(e){


throw new Error(
"La risposta del server non è JSON"
);


}





if(risultato.success){



status.innerHTML =
"✅ Accesso effettuato";


localStorage.setItem(
"adminLogin",
"true"
);



setTimeout(()=>{


window.location.href =
"dashboard.html";


},800);




}

else{


throw new Error(
"Username o password errati"
);


}



})



.catch(error=>{


clearTimeout(controlloTimeout);



console.error(
"ERRORE LOGIN:",
error
);



button.disabled=false;


btnText.innerHTML =
"Accedi";


loader.classList.remove(
"show-loader"
);



status.innerHTML =
"❌ " + error.message;



});



}