# Javascript and Classes...

## OOP-->(Object-Oriented Programming)-->


## Object
--> Collection of properties and methods
-->toLowerCase-upecase


## Why use OOP??

## Parts of OOP
-->Object literal

--> Constructor Funcation
--> Prototypes
--> Classes
--> Instances (New,This)

## 4 Pillars..
--> Polymorphism
--> Abstraction
--> Inheritance
--> Encapsulation

➤ Polymorphism

👉 Same function, different behavior

Ex-->
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

➤ Abstraction

👉 Sirf important cheez dikhao, details chhupa do

Ex-->
class Car {
  start() {
    console.log("Car started");
  }
}

Inheritance

👉 Parent class se properties lena

Ex-->
class Person {
  eat() {
    console.log("Eating");
  }
}

class Student extends Person {}

➤ Encapsulation

👉 Data + methods ko ek class me bandhna

Ex-->
class User {
  #password = "12345"; // private
}
