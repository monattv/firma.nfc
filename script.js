let product = {

forma:"Rotondo",

colore:"Nero",

coloreHex:"#111",

quantita:1,

prezzo:19.99,

descrizione:"",

foto:""

};






function setShape(shape){


product.forma=shape;


updateProduct();


}






function setColor(name,hex){


product.colore=name;

product.coloreHex=hex;


updateProduct();


}






function changeQty(value){


product.quantita += value;



if(product.quantita < 1){

product.quantita=1;

}


document.getElementById("qty").innerHTML=
product.quantita;


updateProduct();


}







function updateProduct(){



let box=document.getElementById("customProduct");



if(!box)return;



box.style.background=
product.coloreHex;




if(product.forma==="Rotondo"){

box.style.borderRadius="50%";

}


if(product.forma==="Quadrato"){

box.style.borderRadius="20px";

}



if(product.forma==="Esagonale"){

box.style.borderRadius="35%";

}




if(product.forma==="Personalizzata"){

box.style.borderRadius="10px";

}




document.getElementById("previewName").innerHTML=

"Portachiavi "
+
product.forma
+
" "
+
product.colore;




document.getElementById("summary").innerHTML=

product.forma
+
" - "
+
product.colore
+
"<br>"
+
"Quantità: "
+
product.quantita;



document.getElementById("total").innerHTML=

(product.prezzo * product.quantita)
.toFixed(2);


}









function addCart(){


product.descrizione =
document.getElementById("description").value;



let file =
document.getElementById("image").files[0];



product.foto =
file ? file.name : "nessuna";




localStorage.setItem(

"cart",

JSON.stringify(product)

);





window.location.href="checkout.html";


}




// CARICAMENTO CHECKOUT


let savedProduct =
JSON.parse(localStorage.getItem("cart"));



if(savedProduct && document.getElementById("productInfo")){


document.getElementById("productInfo").innerHTML=

`
Forma: ${savedProduct.forma}<br>
Colore: ${savedProduct.colore}<br>
Quantità: ${savedProduct.quantita}<br>
Personalizzazione:
${savedProduct.descrizione || "Nessuna"}
`;



document.getElementById("checkoutTotal").innerHTML=

(
savedProduct.prezzo *
savedProduct.quantita
).toFixed(2);



let box=document.getElementById("checkoutProduct");


box.style.background=
savedProduct.coloreHex;



if(savedProduct.forma==="Quadrato"){

box.style.borderRadius="20px";

}


if(savedProduct.forma==="Esagonale"){

box.style.borderRadius="35%";

}


}











// INVIO ORDINE


const checkoutForm =
document.getElementById("checkoutForm");



if(checkoutForm){



checkoutForm.addEventListener(
"submit",
async function(e){


e.preventDefault();



let cliente =
Object.fromEntries(
new FormData(checkoutForm).entries()
);




let ordine={


...cliente,


prodotto:
savedProduct.forma,


colore:
savedProduct.colore,


quantita:
savedProduct.quantita,


personalizzazione:
savedProduct.descrizione,


foto:
savedProduct.foto,


pagamento:
"Pagamento alla consegna",


totale:
(
savedProduct.prezzo *
savedProduct.quantita
).toFixed(2)


};






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


body:
JSON.stringify(ordine)



}

);




localStorage.removeItem("cart");



window.location.href=
"successo.html";





}

catch(error){



document.getElementById("message").innerHTML=

"❌ Errore durante l'invio";


console.log(error);



}



});


}
