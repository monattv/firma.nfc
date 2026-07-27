const form=document.getElementById("orderForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const dati=new FormData(form);

const obj=Object.fromEntries(dati.entries());

// QUI METTEREMO IL LINK DI GOOGLE

console.log(obj);

document.getElementById("risposta").innerHTML="Ordine inviato!";

form.reset();

});