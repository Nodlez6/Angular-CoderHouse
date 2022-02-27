var Dog = /** @class */ (function () {
    function Dog(n, a, c, b, ch) {
        this.name = n;
        this.age = a;
        this.color = c;
        this.breed = b;
        this.chip = ch;
    }
    return Dog;
}());
var Dogs = [];
var dog_uno = new Dog('Sury', 3, 'White', 'Poodle', false);
var dog_dos = new Dog('Cony', 6, 'Brown', 'Unknown', false);
var dog_tres = new Dog('Lulú', 12, 'White', 'Poodle', true);
Dogs.push(dog_uno);
Dogs.push(dog_dos);
Dogs.push(dog_tres);
var aux = true;
var _loop_1 = function () {
    console.log('¿What dog would you like to adopt?');
    var answer = 'Sury';
    Dogs.map(function (dog) {
        if (dog.name === answer) {
            console.log("Okey, ".concat(dog.name, " is yours"));
            console.log(dog);
            aux = false;
            return;
        }
    });
    console.log('No dog has that name');
};
while (aux) {
    _loop_1();
}
