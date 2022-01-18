const dividir = require ("./mod_promesas");
const colors = require('colors');
const argv = require('yargs').argv;


//OBJETOS
const persona = {
    nombre: 'Juan',
    apellido: 'López',
    departamento: 'Informatica',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.departamento}`
    }

}
//console.log(persona.getNombre());

let {nombre,apellido,departamento} = persona;

/*let nombre = persona.nombre;
let apellido = persona.apellido;
let departamento = persona.departamento;*/

console.log(nombre,apellido,departamento);

//ARRAYS
plantilla = ['Juan','Maria','Rosa'];
let [n1,n2,n3] = plantilla;
console.log(n1,n2,n3);

//FUNCIONES
const suma = (n1,n2) =>{
    return n1+n2;
}

console.log(suma(3,4));

//TIEMPO DE ESPERA 
/*setTimeout(() => {
    console.log('Hola Mundo')
}, 1500);*/

const getUsuarioById = (id) =>{
        const plantilla = [
        {id : 1, nombre: 'Juan'},
        {id: 2,nombre: 'Maria'}
    ];

    const miPromesa = new Promise(
        (resolve,reject) =>{
            let usuario = plantilla.find(persona => persona.id == id)?.nombre;  
            if(usuario){
                resolve(usuario);
            }else{
                reject(`Error usario con id ${id} NO EXISTE`);
            }
        }
    )
    return miPromesa;
}

//getUsuarioById(1,(usu)=>console.log('Usuario: '+usu));


//Promesa
/*const miPromesa = new Promise(
    (resolve,reject) =>{
        reject('Todo mal');
        resolver('Todo bien');
    }
);*/


getUsuarioById(1)
.then((usuario)=>console.log('Usuario encontrado '.blue +usuario))
.catch((msg)=>console.log(msg));

console.log('DIVISION'.bgBlue);
console.log(argv);
n1 = argv.n1;
n2 = argv.n2;
dividir(n1,n2)
.then(( resultado )=>console.log(`resultado ${resultado}`.rainbow))
.catch((msg)=>console.log(msg));


