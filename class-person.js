class person{
    constructor(name,profession,age,gender,height,weight){
        this.name=name;
        this.profession=profession;
        this.age=age;
        this.gender=gender;
        this.height=height;
        this.weight=weight;
        
    }
    
}
var person1= new person("sachin","cricketer",48,"male", "5.5 feets",68);

console.log(person1.name);
console.log(person1.profession);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.height);
console.log(person1.weight);
console.log(person1);
