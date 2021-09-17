let light = ["red", "yellow", "green", "yellow"]

function* generateLights() {
  for(let item in light){
  
    while(item <= light.length){
     let i  = 0;   
    yield light[i];    
    i++
    yield light[i];      
     i++    
    yield light[i]
    i++
    yield light[i]
    i++                 
    }       
  }  
}

let generator = generateLights();

console.log(generator.next().value)