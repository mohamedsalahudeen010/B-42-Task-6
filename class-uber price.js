class tariff{
    
    constructor(distance,pricePerKilometer){
          this.pricePerKilometer=pricePerKilometer;
          this.distance=distance;
          
      }
       get fare (){
          return (`Rs:${(this.pricePerKilometer*this.distance).toFixed(2)}`);
      }
      
      
  }
  var uber= new tariff(120,19);
  
  console.log(uber.fare);