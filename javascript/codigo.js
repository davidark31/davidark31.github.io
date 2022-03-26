const contenedor= document.querySelector(".contenedor");
let contador=0;

function crearLlave(nombre,modelo,precio){
	contador++;
	img="<img class='img-llave'src='img/llave.png'>"
	nombre=`<h2>${nombre}</h2>`;
	modelo=`<h3>${modelo}</h3>`;
	precio=`<p>precio: $ <b>${precio}</b></p>`;
	return [img,nombre,modelo,precio]
}


const changeHiden=(number)=>{
	document.querySelector(".key-data").value=number;
}

let documentFragment=document.createDocumentFragment();

for(let i=1;i<21;i++){
	let modelo=Math.round(Math.random()*100);
	let precio=Math.round(Math.random()*100+2000);

	let llave = crearLlave(`llave ${i}`,`Modelo ${modelo}`,precio);

	let div=document.createElement("DIV");
	div.addEventListener("click",()=>{changeHiden(modelo)});
	div.tabIndex=i;
	div.classList.add("Flex-item",`item-${i}`);
	div.innerHTML=llave[0]+llave[1]+llave[2]+llave[3];
	documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
