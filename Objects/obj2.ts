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
 let bikedata1 : bike =
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
bikedata1.bikecc = 350 // updating the value of bikecc property
//bikedata1.bikeinfo.bikenumber = 123567
console.log(bikedata1)


