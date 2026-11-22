interface bike
 {
    bikecompany : string,
    bikemodel : string,
    bikecc : number,
    bikename : string,
    bikeinfo : {
      bikebreaks : string,
      bikesuspension : string,
      bikecolour : string,
      bikereading : number,
      bikecategory : string
    }

 }
 let bikedata5 : bike =
  {
    bikecompany : "triumph",
    bikemodel : "speed 400",
    bikecc : 400,
    bikename : "blacky",
    bikeinfo : {
      bikebreaks : "brambo disk",
      bikesuspension : "monoshock",
      bikecolour : "black",
      bikereading : 120,
      bikecategory : "street" 
    }
  }

interface car 
{
    carcompany : string,
    carmodel : string,
    carcost : number,
    carcolour : string
}
 let cardata :car = {
     carcompany: "bmw",
     carmodel: "x4",
    carcost: 750000000,
     carcolour: "nardo grey"
 }


let twovechiles = { ...bikedata5, ...cardata }
console.log(twovechiles)