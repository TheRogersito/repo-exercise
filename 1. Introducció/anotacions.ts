// Les anotacions són la manera que té el typescript per a definir el tipus d'una variable
// Per a tipus variables simples seria així:
const platans: number = 5;
// La paraula "number" indica que la variable plàtans és un número. L'anotació també pot ser string, boolean...
// Quan intentem reassignar un valor a una variable(sempre que no sigui const), només ho podrem fer si la reassignació és del mateix tipus
// Recorda també que podem anotar diferents tipus de variable per una sola variable en cas que aquesta pugui canviar de tipus en algún moment, es faria amb l'operador de OR(|)
const ciutat : boolean | number = false;

// Amb variables complexes la cosa canvia, per exemple amb arrays hem de definir el tipus de variable que tindrà els elements de l'array, mira l'exemple:
const fruites: string[] = ["Maduixa","Sindria","Taronja"]
// No podem afegir a l'array variables de diferent tipus a l'anotació
// També podem fer anotacions d'arrays dins d'arrays
const cotxe : string [][] = [
    ["Blanc"],
    ["200cc"],
    ["2015"]
]
// Si volem que un array pugui tenir variables de més d'un tipus, ho podem fer amb el símbol | que hem vist abans
const dates:(Date|string)[]=[new Date(),"27/12/2024"]
// Així garantitzem que podrem fer un push a l'array amb els tipus de variables indicats

// Per a objectes la cosa es complica, hem de definir el tipus de variable per cada elements dins l'objecte, mira l'exemple
const persona: {nom:string, edat:number, viu:boolean} = {
    nom:"Roger",
    edat: 25,
    viu:true
}

// Les funcions són una mica més complicades, hem de definir els tipus dels paràmetres i el tipus del que retorna
const multiplicaPer2 : (numero:number)=>number = (numero:number)=>{
    const resultat: number = numero*2;
    return resultat;
}
// En cas que la funció no tingui un return, el tipus que posem a lo de retornar és "void"
// Una altre manera d'expressar el mateix seria d'aquesta manera
const multiplicaPer3 = (numero:number):number=>{
    const resultat: number = numero*3;
    return resultat
}

// Per a fer servir com a paràmetres objectes en una funció, podem desestructurar l'objecte en el paràmetre, però tingues en compte que paràmetres i anotacions han d'anar separats
const mostrarDades = ({nom, edat}:{nom:string, edat:number}):void =>{
    console.log(nom,edat)
}
// En aquest cas el paràmetre seria un objecte amb les propietats nom i edat

// Es pot declarar una variable amb el tipus "any", però això no ajuda, ja que Typescript ignorarà alguns errors que es podrien detectar si anotem la variable amb el tipus que correspon

// Al typescript hi ha l'opció de fer que els arrays tinguin una estructura específica amb el que s'anomena "tuples". Determinen el tipus de dades que té cada element d'un array
const hawaiana : [string, number, boolean] = ["Pinya", 3, true]
// també podem desar l'anotació del tuple en una paraula amb l'expressió type
type Pizza = [string, number, boolean]
const barbacoa: Pizza=["Carn", 4, true]
// Els tuples no s'utilitzen gaire, però oi que és guay saber coses noves?

// També existeixen els generics, són una espècie de paràmetre per a la creació d'una classe i aquest paràmetre és un tipat, mira l'exemple
class ExempleGeneric<ElGeneric> {
    data:ElGeneric
}
const exempleGenericNumero = new ExempleGeneric<number>()
exempleGenericNumero.data=2
const exempleGenericString = new ExempleGeneric<string>()
exempleGenericString.data="asasa"
// És costum que el genèric sigui anomenat T d'aquesta manera <T>