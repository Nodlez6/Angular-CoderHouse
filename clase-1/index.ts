
class Dog {
    name: string;
    age: number;
    color: string;
    breed: string;
    chip: boolean;

    constructor(n: string, a: number, c: string, b: string, ch: boolean){
        this.name = n;
        this.age = a;
        this.color = c;
        this.breed = b;
        this.chip = ch;

    }
}

let Dogs: Dog[] = [];

let dog_uno: Dog = new Dog('Sury', 3, 'White', 'Poodle', false);
let dog_dos: Dog = new Dog('Cony', 6, 'Brown', 'Unknown' ,false);
let dog_tres: Dog = new Dog('Lulú', 12, 'White', 'Poodle', true);

Dogs.push(dog_uno);
Dogs.push(dog_dos);
Dogs.push(dog_tres);

let aux: boolean = true

while(aux){
    console.log('¿What dog would you like to adopt?');
    const answer = 'Sury';
    Dogs.forEach(dog => {
        if(dog.name === answer){
            console.log(`Okey, ${dog.name} is yours`);
            console.log(dog);
            aux = false;
            return;
        }
    })    
}


