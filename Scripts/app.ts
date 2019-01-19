/*
const person: objects.Person = new objects.Person(30, "Tom");
person.saysHello();
*/

// IIFE -- Immediately Invoked Function Expression
(function(){

    function Start() {
        const student: objects.Student = new objects.Student(20, "Sarah", "P008490000");
        student.saysHello();
        student.studies();
    }

    window.addEventListener("load", Start);

})();


