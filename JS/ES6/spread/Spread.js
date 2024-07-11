



const spreadOperated = (x, y, ...z) => {
    return x+y+z.reduce((acc, val)=> acc+val, 0)
  }
  const array =[5,10,15,20]
  
  const z = spreadOperated(10, 20, ...array);
  console.log(z)
  

