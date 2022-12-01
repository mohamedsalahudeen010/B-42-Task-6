class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        if(rating==undefined){
            this.rating="PG"
        }else {this.rating=rating;}
        
    }
    getPG(Array){
       let result=[];
       for(let i=0;i<Array.length;i++){
        if(arr[i].rating=="PG"){
            result.push(arr[i]);
        }
       } 
       return result
    }
    
}
var movie1= new movie("Casino Royale","Eon Productions","PG13");
var movie2= new movie("Iron Man","Marvel Productions","PG");
var movie3= new movie("Harry Potter","Warner Brother Productions","PG13");
var movie4= new movie("Pirates of Carribean","Apple Productions","PG");
var movie5= new movie("Avengers-End Game","Marvel Productions","PG13");

console.log(movie1.title);
console.log(movie1.studio);

let arr=[movie1,movie2,movie3,movie3,movie4,movie5]

console.log(movie1.getPG(arr))
