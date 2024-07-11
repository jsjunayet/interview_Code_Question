const restPerameter = (x, y, ...z) => {
    return x+y+z.reduce((acc, val)=> acc+val, 0)
  }
  
  const x = restPerameter(1, 2, 3, 4,10,20,40,50);
  console.log(x)