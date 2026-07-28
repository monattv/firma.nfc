function scrollToOrder(){

document
.getElementById("order")
.scrollIntoView({
behavior:"smooth"
});

}





let forma="Rotondo";
let colore="Nero";



const prodotto=document.getElementById("product");




document.querySelectorAll(".choice")
.forEach(card=>{


card.onclick=()=>{


document.querySelectorAll(".choice")
.forEach(x=>x.classList.remove("active"));


card.classList.add("active");


forma=card.dataset.value;


document.getElementById("forma").value=forma;


aggiorna();


};


});






document.querySelectorAll(".color")
.forEach(c=>{


c.onclick=()=>{


document.querySelectorAll(".color")
.forEach(x=>x.classList.remove("active"));


c.classList.add("active");


colore=c.dataset.color;


document.getElementById("colore").value=colore;


aggiorna();


};


});






document
.getElementById("materiale")
.addEventListener("change",e=>{


document.getElementById("mat").value=e.target.value;


});







function aggiorna(){


document.getElementById("title")
.innerHTML=

"Portachiavi "+forma+" "+colore;



if(forma==="Rotondo"){

prodotto.style.borderRadius="50%";

}

if(forma==="Quadrato"){

prodotto.style.borderRadius="20px";

}

if(forma==="Esagonale"){

prodotto.style.borderRadius="35%";

}




if(colore==="Nero"){

prodotto.style.background="#000";

}

if(colore==="Verde"){

prodotto.style.background="#10b981";

}

if(colore==="Bianco"){

prodotto.style.background="#eee";

}

if(colore==="Oro"){

prodotto.style.background="#d4af37";

}


}





const form=document.getElementById("orderForm");



form.addEventListener("submit",async(e)=>{


e.preventDefault();



let dati=Object.fromEntries(

new FormData(form).entries()

);



dati.personalizzazione=
document.getElementById("personalizzazione").value;



dati.foto=
document.getElementById("foto").files[0]?.name || "nessuna";




let button=document.querySelector(".send");


button.innerHTML="⏳ Invio ordine...";

button.disabled=true;





try{


await fetch(

"https://script.google.com/macros/s/AKfycbyngEx24SuA0n7FDfbQ7QWaYdGK8TNGIu3njAdSkBUy21ZaL4ePcKMBYOqHFT2zGu0liw/exec",

{

method:"POST",

redirect:"follow",

headers:{

"Content-Type":

"text/plain;charset=utf-8"

},

body:JSON.stringify(dati)


}

);





document.getElementById("risposta").innerHTML=

"✅ Ordine completato! Ti contatteremo presto.";




form.reset();



}

catch(error){


document.getElementById("risposta").innerHTML=

"❌ Errore durante l'invio";


console.error(error);


}





button.innerHTML="🚀 Conferma ordine";

button.disabled=false;



});
