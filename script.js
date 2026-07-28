// ===============================
// CONFIGURAZIONE PRODOTTO
// ===============================


let product = {

    nome: "Portachiavi NFC Base",

    forma: "Rotondo",

    colore: "Nero",

    coloreHex: "#111111",

    quantita: 1,

    prezzo: 19.99,

    descrizione: "",

    foto: ""

};




// ===============================
// APRI CONFIGURATORE
// ===============================


function openProduct(button){


    animateCart();


    setTimeout(()=>{

        window.location.href="prodotto.html";

    },300);


}






// ===============================
// SCELTA FORMA
// ===============================


function setShape(shape){


    product.forma = shape;


    updatePreview();


}






// ===============================
// SCELTA COLORE
// ===============================


function setColor(nome, colore){


    product.colore = nome;

    product.coloreHex = colore;


    updatePreview();


}






// ===============================
// QUANTITA
// ===============================


function changeQty(value){


    product.quantita += value;



    if(product.quantita < 1){

        product.quantita = 1;

    }



    let quantity =
    document.getElementById("quantity");



    if(quantity){

        quantity.innerHTML =
        product.quantita;

    }



    updatePreview();


}






// ===============================
// AGGIORNA ANTEPRIMA
// ===============================


function updatePreview(){



let box =
document.getElementById("customProduct");



if(!box) return;




box.style.background =
product.coloreHex;




switch(product.forma){


case "Rotondo":

box.style.borderRadius="50%";

break;



case "Quadrato":

box.style.borderRadius="20px";

break;



case "Rettangolare":

box.style.borderRadius="15px";

box.style.width="280px";

break;



case "Esagonale":

box.style.borderRadius="35%";

break;



case "Personalizzata":

box.style.borderRadius="10px";

break;


}




let title =
document.getElementById("previewTitle");



if(title){

title.innerHTML =

"Portachiavi "
+
product.forma
+
" "
+
product.colore;

}





let summary =
document.getElementById("summary");



if(summary){

summary.innerHTML =

product.forma
+
" | "
+
product.colore
+
" | Quantità "
+
product.quantita;

}





let price =
document.getElementById("price");



if(price){

price.innerHTML =

(product.prezzo * product.quantita)
.toFixed(2);

}



}








// ===============================
// AGGIUNGI AL CARRELLO
// ===============================


function addCart(){



let text =
document.getElementById("description");



if(text){

product.descrizione =
text.value;

}




let file =
document.getElementById("image");



if(file && file.files[0]){


product.foto =
file.files[0].name;


}





localStorage.setItem(

"cart",

JSON.stringify(product)

);




animateCart();



setTimeout(()=>{


window.location.href="cart.html";


},600);



}









// ===============================
// ANIMAZIONE CARRELLO
// ===============================


function animateCart(){


let cart =
document.querySelector(".cart");



if(cart){


cart.style.transform="scale(1.15)";



setTimeout(()=>{

cart.style.transform="scale(1)";

},300);


}


}









// ===============================
// CHECKOUT
// ===============================


let savedProduct =

JSON.parse(
localStorage.getItem("cart")
);






if(savedProduct){



let details =
document.getElementById("orderDetails");



if(details){


details.innerHTML =

`
<strong>${savedProduct.nome}</strong>
<br><br>

Forma:
${savedProduct.forma}

<br>

Colore:
${savedProduct.colore}

<br>

Quantità:
${savedProduct.quantita}

<br>

Personalizzazione:
${savedProduct.descrizione || "Nessuna"}

`;



}




let total =
document.getElementById("checkoutTotal");



if(total){


total.innerHTML =

(
savedProduct.prezzo *
savedProduct.quantita

).toFixed(2);


}




let preview =
document.getElementById("orderPreview");



if(preview){


preview.style.background =

savedProduct.coloreHex;



}



}









// ===============================
// INVIO ORDINE GOOGLE SHEET
// ===============================


let checkoutForm =

document.getElementById("checkoutForm");





if(checkoutForm){



checkoutForm.addEventListener(

"submit",

async function(e){


e.preventDefault();




let cliente =

Object.fromEntries(

new FormData(checkoutForm)

.entries()

);






let ordine = {


data:

new Date()
.toLocaleString("it-IT"),



...cliente,



prodotto:

savedProduct.nome,



forma:

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



window.location.href="successo.html";




}

catch(error){



let msg =
document.getElementById("message");



if(msg){

msg.innerHTML =
"❌ Errore invio ordine";

}



console.log(error);



}



}



);

}
