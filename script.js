class habilidad{
	constructor(nombre,img,experiencia){
		this.nombre=nombre
		this.img=img
		this.exp=experiencia
	}
}
let habilidades=[]
let HTML5= new habilidad("HTML5","",3)
let CSS3= new habilidad("CSS3", "",2)
let JavaScript= new habilidad("JavaScript", "recursos/imagenes/js.png", 2)




habilidades.push(HTML5,CSS3)
console.log(habilidades)