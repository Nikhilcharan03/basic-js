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
 let bikedata4 : bike =
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

  for( let a in bikedata4)   // to get individual values
    {
    console.log(a)

  }

  console.log("..................")
   
  //for (let b in bikedata4)
  //{
   // console.log(bikedata4[b])
 // } 

 console.log(typeof bikedata4.bikecc)
 console.log(typeof bikedata4.bikename)