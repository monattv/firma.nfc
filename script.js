*{
box-sizing:border-box;
}


body{

margin:0;

font-family:Poppins,sans-serif;

background:#050505;

color:white;

}


.page{

width:100%;

max-width:650px;

margin:auto;

padding:20px;

}



header{

text-align:center;

animation:fade 1s;

}


header h1{

font-size:35px;

}



.card{

background:#111;

border:1px solid #222;

border-radius:25px;

padding:25px;

margin:20px 0;

box-shadow:0 20px 40px #000;

animation:up .7s;

}



@keyframes up{

from{

opacity:0;

transform:translateY(20px);

}

to{

opacity:1;

}

}



.options{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:15px;

}



.option{

height:100px;

background:#181818;

border-radius:20px;

display:flex;

align-items:center;

justify-content:center;

flex-direction:column;

font-size:30px;

cursor:pointer;

transition:.3s;

}



.option span{

font-size:14px;

}



.option.active{

border:2px solid #00e5ff;

transform:scale(1.04);

}




.colors{

display:flex;

gap:15px;

justify-content:center;

}



.color{

width:45px;

height:45px;

border-radius:50%;

cursor:pointer;

border:3px solid transparent;

}



.color.active{

border-color:white;

transform:scale(1.2);

}



.black{
background:black;
}

.white{
background:white;
}

.blue{
background:#0066ff;
}

.red{
background:red;
}

.gold{
background:gold;
}



.preview{

text-align:center;

}



#productPreview{

width:160px;

height:160px;

margin:auto;

border-radius:50%;

background:#000;

display:flex;

align-items:center;

justify-content:center;

font-size:70px;

transition:.4s;

}



strong{

font-size:30px;

color:#00e5ff;

}



input,
textarea{

width:100%;

padding:15px;

margin-top:12px;

background:#080808;

border:1px solid #333;

border-radius:15px;

color:white;

font-size:15px;

}



textarea{

height:120px;

resize:none;

}



.upload{

display:block;

margin-top:15px;

background:#222;

padding:15px;

border-radius:15px;

cursor:pointer;

}



.upload input{

display:none;

}



.payment{

margin-top:20px;

}



.paybox{

padding:18px;

background:#050505;

border:1px solid #00e5ff;

border-radius:15px;

}



button{

width:100%;

margin-top:20px;

padding:18px;

border:none;

border-radius:50px;

background:linear-gradient(90deg,#00e5ff,#0066ff);

color:white;

font-size:18px;

font-weight:bold;

cursor:pointer;

}



button:hover{

transform:scale(1.03);

}



#risposta{

text-align:center;

font-size:18px;

}




@media(max-width:500px){


.page{

padding:12px;

}


header h1{

font-size:26px;

}


.options{

grid-template-columns:1fr;

}



.card{

padding:18px;

}


}
