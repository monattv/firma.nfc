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


.then(response=>response.json())


.then(risultato=>{


if(risultato.success){



localStorage.setItem(
"adminLogin",
"true"
);



window.location.href =
"dashboard.html";



}

else{


document.getElementById("errore").innerHTML =

"Password o username errati";



}



})


.catch(error=>{


console.error(error);



document.getElementById("errore").innerHTML =

"Errore collegamento";



});


}
