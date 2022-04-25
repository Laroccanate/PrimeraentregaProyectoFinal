class perro{
    constructor(nombre,duenio,sexo,anio,telefono){
        this.nombre=nombre
        this.duenio=duenio
        this.sexo=sexo
        this.anio=anio
        this.telefono=telefono
        }
        
}

let perro1 = new perro ("jack", "raul", "macho", 2010, "4444-4444")
let perro2 = new perro ("pancha", "alicia", "hembra", 2015, "5555-5555")
let perro3 = new perro ("firulais", "ruben", "macho", 2019, "9999-9999")
let perro4 = new perro ("morgan", "bruno", "macho", 2016, "3333-3333")
let perro5 = new perro ("raviol", "paula", "hembra", 2017, "2222-2222")
let perro6 = new perro ("luna", "marco", "hembra", 2018, "7777-7777")



const jauria =[] 

jauria.push(perro1)
jauria.push(perro2)
jauria.push(perro3)
jauria.push(perro4)
jauria.push(perro5)
jauria.push(perro6)

console.log(jauria)


function agregarPerro () {
    let nuevoNombre = prompt("Ingrese el nombre").toLowerCase()
    let nuevoDuenio = prompt("ingrese el nombre del dueño").toLowerCase()
    let nuevoSexo =  prompt("macho o hembra").toLowerCase()
    let nuevoAnio = Number(prompt("Ingrese el año en que nacio"))
    let nuevoTelefono = prompt("Ingrese el numero de telefono")
    let nuevoPerro = new perro(nuevoNombre,nuevoDuenio,nuevoSexo,nuevoAnio,nuevoTelefono)
    jauria.push(nuevoPerro)
    console.log(jauria)
}
do{
    respuesta = prompt("Desa ingresar un nuevo perro?").toLowerCase()

if (respuesta == "si"){
    agregarPerro()
    respuesta = prompt("Desa ingresar un nuevo perro?").toLowerCase()
}
if (respuesta == "no"){
    alert("Muchas gracias! Hasta la proxima!")
}
}while (respuesta !== "si" && respuesta !== "no")

let macho = jauria.filter(perro=>perro.sexo=="macho")
console.log(macho)
let hembra = jauria.filter(perro=>perro.sexo=="hembra")
console.log(hembra)

let aquienBusca = prompt("Ingrese el nombre del perro que busca").toLowerCase()
let nombrePerro = jauria.find(perro=>perro.nombre==aquienBusca)
if (nombrePerro == undefined){
    console.log("El perro que busca no se encuentra en nuestra base de datos")
}else console.log(nombrePerro)

