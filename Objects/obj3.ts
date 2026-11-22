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
 let bikedata2 : bike =
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

  //delete bikedata2.bikename;
  //delete bikedata2.bikeinfo.bikecategory;
  //delete bikedata2.bikeinfo;
  console.log(bikedata2)

  