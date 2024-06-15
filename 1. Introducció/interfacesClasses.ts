// Les interfaces són plantilles per a tipar variables dins d'objectes
interface Vehicle {
    marca: string;
    rodes: number;
    functiona: boolean;
}
// Normalment es fan servir per a validar que un objecte passat com a paràmetre d'una funció té les propietats necessàries
const moto = {
    marca: "People",
    rodes: 2,
    functiona: true
}
const mostrarVehicle = (vehicle: Vehicle)=>{
    console.log(vehicle.marca, vehicle.rodes, vehicle.functiona)
}
mostrarVehicle(moto)
// Si un objecte cridat a la funció té més propietats que la interface, la funció seguirà funcionant igual
// A una interface també podem fer que hi hagi un mètode obligatori
interface Hora{
    zona: string;
    hora: Date;
    donarHora(): string;
}
// Les interfaces en general es fan servir com a requisits per a objectes quan són paràmetres de funcions, els objectes han de tenir per collons les propietats posades a la interface per a que la funció funcioni

// Les classes són plantilles que ajuden a crear objectes amb mètodes i propietats predeterminades
class Fruita {
    type: string = "Fruita";
    ferSuc(): void{
        console.log("Quin suc més bo")
    }
}
const maduixa = new Fruita();
maduixa.ferSuc();
// Podem també crear una classe que hereti mètudes i valors d'una altre amb "extends"
class Cítric extends Fruita {
    atacar():void{
        console.log("Pxxxt")
    }
}
const taronja = new Cítric();
taronja.ferSuc()
// Si posem un mètode amb a la classe nova amb el mateix nom que un mètode que la classe vella, la de la classe nova és la que s'aplica
// En quant a mètodes de classes es poden afegir modificadors per a restringir-ne l'ús
/*Són aquests:
public: no canvia res, el mètode pot ser utilitzat per altres mètodes dins la classe i les instàncies de la classe. No cal posar la paraula ja que és l'opció per defecte
protected: el mètode pot ser utilitzat per altres mètodes dins la classe o per mètodes dins de classes fill
private: el mètode només pot fer-se servir per altres mètodes dins la classe, no per instàncies
 */
// En quant a variables dins la classe, podem fer que estiguin definides per la classe en si o podem fer un constructor per a definir-les a cada instància
class Carn {
    animal:string;
    constructor(animal:string){
        this.animal = animal
    }
}
// Si posem una classe fill a una classe amb constructor, cada instància de la classe fill farà servir el constructor de la classe pare
// Podem posar un constructor nou a la classe fill, però ho hem de fer d'aquesta manera
class Muscul extends Carn{
    muscle: string;
    constructor(muscle:string,animal:string){
        super(animal)
        this.muscle = muscle
    }
}
// El mètode "super" ha d'anar abans de la definició de les variables de la classe fill