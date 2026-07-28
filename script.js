function openProduct(){


localStorage.setItem(
"cart",
"1"
);


let count=document.getElementById("cartCount");


if(count){

count.innerHTML="1";

}



window.location.href=
"prodotto.html";


}
