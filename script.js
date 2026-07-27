const form=document.getElementById("orderForm");


let forma="Rotondo";
let colore="Nero";



document.querySelectorAll(".option").forEach(el=>{


el.onclick=()=>{


document.querySelectorAll(".option")
.forEach(x=>x.classList.remove("active"));


el.classList.add("active");


forma=el.dataset.forma;


document.getElementById("forma").value=forma;


aggiorna();


};


});





document.querySelectorAll(".color").forEach(el=>{


el.onclick=()=>{


document.querySelectorAll(".color")
.forEach(x=>x.classList.remove("active"));


el.classList.add("active");


colore=el.dataset.colore;


document.getElementById("colore").value=colore;


document.getElementById("coloreScelto").innerHTML=colore;


aggiorna();


};


});






function aggiorna(){


document.getElementById("previewText").innerHTML=

"Portachiavi "+forma+" "+colore;



let box=document.getElementById("productPreview");


if(forma==="Rotondo"){

box.style.borderRadius="50%";

}

if(forma==="Quadrato"){

box.style.borderRadius="15px";

}

if(forma==="Esagonale"){

box.style.borderRadius="30%";

}



}





form.addEventListener("submit",async e=>{


e.preventDefault();



let dati=Object.fromEntries(
new FormData(form).entries()
);



dati.personalizzazione=
document.getElementById("personalizzazione").value;



dati.foto=
document.getElementById("foto").files[0]?.name || "nessuna";




let btn=document.querySelector("button");

btn.innerHTML="⏳ Invio...";




try{


await fetch(

"https://script.google.com/macros/s/AKfycbyngEx24SuA0n7FDfbQ7QWaYdGK8TNGIu3njAdSkBUy21ZaL4ePcKMBYOqHFT2zGu0liw/exec",

{


method:"POST",

redirect:"follow",

headers:{

"Content-Type":"text/plain;charset=utf-8"

},

body:JSON.stringify(dati)


}

);



document.getElementById("risposta").innerHTML=

"✅ Ordine inviato correttamente";



form.reset();


}

catch(err){


document.getElementById("risposta").innerHTML=

"❌ Errore invio";


console.log(err);


}



btn.innerHTML="🚀 ORDINA ORA";


});
