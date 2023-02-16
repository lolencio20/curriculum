
let botonInicio=document.getElementById("main-button"),
	botonConocimientos=document.getElementById("skills-button"),
	botonSobreMi=document.getElementById("about-button"),
	botonContacto=document.getElementById("contact-button");
let marginBody=document.getElementById("margin-body")
let botones=[botonInicio,botonConocimientos,botonSobreMi,botonContacto]
let habilidades=[]
let contConocimientos=document.getElementById("cont-conocimientos")
let skillBox
botones.forEach((item)=>{
	item.addEventListener("mousedown", (e)=>{
		switch(e.target.textContent){
			case "Inicio": 
				marginBody.innerHTML="body {margin-left:0vw}"
				break
			case "Conocimientos":
				marginBody.innerHTML="body {margin-left:-100vw} nav{margin-left:100vw}"
				break
			case "Sobre mi":
				marginBody.innerHTML="body {margin-left:-200vw} nav{margin-left:200vw}"
				break
			case "Contacto":
				marginBody.innerHTML="body {margin-left:-300vw} nav{margin-left:300vw}"
				break
		default:break
		}


	})
})
class habilidad{
	constructor(nombre,img,experiencia){
		this.nombre=nombre
		this.img=img
		this.exp=experiencia
	}
}
let HTML5= new habilidad("HTML5","imgs/HTML-5.png","Intermedio")
let CSS3= new habilidad("CSS3", "imgs/css-3.png","Intermedio")
let JavaScript= new habilidad("JavaScript", "imgs/js.png", "Avanzado")
let gitGithub= new habilidad("Git/GitHub","imgs/github.png","Intermedio")



habilidades.push(HTML5,CSS3,JavaScript,gitGithub)
console.log(habilidades)
habilidades.forEach((e)=>{
	skillBox=`<div class="conocimiento" id="${e.nombre}"><img src="${e.img}">
			<div>
			<h2>html</h2>
			<p>${e.exp}</p>
		</div>
	</div>`
	contConocimientos.innerHTML+=skillBox


})