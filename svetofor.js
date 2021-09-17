let light = ["red", "yellow", "green", "yellow"]

function* generateLights() {
  for(let item in light){
  
    while(item <= light.length){
     for(let i = 0; i <= light.length; i++){
      yield light[i]
    } 
                   
    }       
  }  
}

let generator = generateLights();

console.log(generator.next().value)