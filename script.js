*{
box-sizing:border-box;
}


body{

margin:0;

font-family:'Poppins',sans-serif;

background:#050505;

color:white;

min-height:100vh;

overflow-x:hidden;

}


.background{

position:fixed;

width:100%;

height:100%;

background:
radial-gradient(circle at top,#252525,#050505 60%);

z-index:-1;

}



.container{

width:95%;

max-width:450px;

margin:40px auto;

animation:entrata 1s ease;

}



@keyframes entrata{

from{

opacity:0;

transform:translateY(40px);

}

to{

opacity:1;

transform:translateY(0);

}

}



.hero{

text-align:center;

}


.hero h1{

font-size:32px;

margin-bottom:5px;

}



.hero p{

color:#aaa;

}



.product-card{

background:rgba(255,255,255,.08);

backdrop-filter:blur(15px);

border:1px solid rgba(255,255,255,.15);

border-radius:25px;

padding:20px;

text-align:center;

margin:25px 0;

box-shadow:0 0 40px rgba(0,0,0,.5);

}



.product-card img{

width:220px;

border-radius:20px;

}



.price{

font-size:30px;

font-weight:700;

color:#00e5ff;

}



.features div{

margin:8px;

color:#ddd;

}



form{

background:rgba(255,255,255,.06);

padding:25px;

border-radius:25px;

backdrop-filter:blur(20px);

}



input,
textarea{

width:100%;

padding:14px;

margin-top:12px;

border-radius:12px;

border:none;

background:#111;

color:white;

font-size:15px;

}



.row{

display:flex;

gap:10px;

}



.row input{

width:50%;

}



textarea{

height:90px;

resize:none;

}



.quantity{

display:flex;

gap:10px;

margin-top:10px;

}



.quantity button{

width:50px;

border:none;

border-radius:12px;

background:#00e5ff;

font-size:25px;

}



.quantity input{

text-align:center;

}



.payment{

margin-top:25px;

}



.payment-box{

display:flex;

align-items:center;

gap:10px;

background:#111;

padding:15px;

border-radius:15px;

border:1px solid #00e5ff;

}



.payment p{

color:#00e5ff;

font-size:13px;

}



.order-btn{

width:100%;

margin-top:20px;

padding:16px;

border:none;

border-radius:50px;

font-size:18px;

font-weight:bold;

background:linear-gradient(90deg,#00e5ff,#0077ff);

color:white;

cursor:pointer;

animation:pulse 2s infinite;

}



@keyframes pulse{

50%{

transform:scale(1.03);

}

}



#risposta{

text-align:center;

font-size:18px;

margin-top:20px;

}



@media(max-width:400px){

.row{

flex-direction:column;

}

.row input{

width:100%;

}

}
