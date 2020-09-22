var hammingDistance = function(x, y) {

  let xbinary = (x >>> 0).toString(2)
  let ybinary = (y >>> 0).toString(2)
  let start = false;
  let distance = 0;


  function zeroPad(num) {
    return '0' + num
  }

  while(xbinary.length !== ybinary.length) {
    if(xbinary.length < ybinary.length) {
      xbinary = zeroPad(xbinary);
    } else {
      ybinary = zeroPad(ybinary);
    }
  }

  // xbinary = zeroPad(xbinary)
  // ybinary = zeroPad(ybinary)



  for (let i = 0; i < xbinary.length; i++) {
    const element = xbinary[i];
    

    if(element !== ybinary[i]) {
       
      distance += 1;
    
    }
  }

  return distance;
};


console.log(hammingDistance(1,4));
console.log(hammingDistance(4,10));