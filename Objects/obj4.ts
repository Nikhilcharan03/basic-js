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
 let bikedata3 : bike =
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


  console.log("bikecolour" in bikedata3.bikeinfo) // to check key avilability
  console.log("keys")
  console.log(Object.keys(bikedata3))
  console.log("values")
  console.log(Object.values(bikedata3))
  console.log("entries")
  console.log(Object.entries(bikedata3))