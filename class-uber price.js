class tariff{
    
    constructor(distance,VehicleType){
          this.distance=distance;
          this.VehicleType=VehicleType;
          
      }
       get fare (){
         if(this.VehicleType=="Hatchback"){
           let basePrice=500;
           let pricePerKM=14;
          return (`Uber Fare for ${this.distance}Km in Hatchback is Rs: ${(basePrice+this.distance*pricePerKM).toFixed(2)}`);}
          if(this.VehicleType=="Sedan"){
            let basePrice=700;
           let pricePerKM=16;
          return (`Uber Fare for ${this.distance}Km in Sedan is Rs: ${(basePrice+this.distance*pricePerKM).toFixed(2)}`);}
          if(this.VehicleType=="SUV"){
            let basePrice=1000;
           let pricePerKM=19;
          return (`Uber Fare for ${this.distance}Km in SUV is Rs: ${(basePrice+this.distance*pricePerKM).toFixed(2)}`);}
      }
      
      
  }
  var suv= new tariff(120,"SUV");
  var hatchback= new tariff(100,"Hatchback");
  var sedan= new tariff(100,"Sedan");
  
  console.log(suv.fare);
  console.log(hatchback.fare);
  console.log(sedan.fare);
