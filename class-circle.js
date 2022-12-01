 class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        
    }
    get circleRadius(){
        return this.radius
    }
    get circleColor(){
        return this.color
    }
    set circleRadius(radius){
        this.radius=radius;
    }
    set circleColor(color){
        this.color=color;
    }
    get string(){
        return `Radius of the Circle is ${this.radius} and 
        Color of the Circle is ${this.color} `
    }
     
     get circleArea (){
        return (Math.PI*this.radius*this.radius).toFixed(2);
    }
    get circumference(){
        return (2*Math.PI*this.radius).toFixed(2);
    }
}
var circle1= new circle(1.0,"red");



console.log(circle1.circleRadius);
console.log(circle1.circleColor); 
console.log(circle1.string);      
console.log(circle1.circleArea);
console.log(circle1.circumference);