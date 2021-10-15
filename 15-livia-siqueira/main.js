(function () {
    function ConstructorPerson(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.getFullName = function getFullName() {
            return this.name + " " + this.lastName;
        }
        this.getAge = function getAge() {
            return this.age;
        }
        this.addAge = function addAge() {
            this.age += arguments[0];
            return this;
        }
    }
    var equalSobrenome = 'Siqueira';
    var livia = new ConstructorPerson('Livia', equalSobrenome, 19);
    var flavia = new ConstructorPerson('Flávia', equalSobrenome, 23);
    var lucia = new ConstructorPerson('Lúcia', equalSobrenome, 48);
    var people = [];
    people.push(livia, flavia, lucia);

    //pessoas
    for(var i = 0; i<people.length;i++){
        console.log(people[i]);
    }
    console.log("Nomes completos: ");
    for(var i = 0; i<people.length;i++){
        console.log('\n' + (i+1)+ '° ' + people[i].getFullName());
    }
    
    var retornaPeople = function retornaPeople() {
        for (var i = 0; i < people.length; i++) {
            console.log(people[i].getFullName() + ' tem ' + people[i].getAge() + ' anos.');
        }
    }
    console.log(retornaPeople());

    livia.addAge(13);
    lucia.addAge(12);
    flavia.addAge(2);
    var retornaPeopleNewAge = function retornaPeopleNewAge() {
        for (var i = 0; i < people.length; i++) {
            console.log(people[i].getFullName() + ' agora tem ' + people[i].getAge() + ' anos.');
        }
    }
    console.log(retornaPeopleNewAge());
})();