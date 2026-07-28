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
