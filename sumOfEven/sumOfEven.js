function sumOfEven(start,end){
    if(typeof start !=='number' || typeof end !=='number'){
      return 'Invalid number supplied';
    }
    if(start >= end){
      return 'invalid number range'
    }
    var sum=0;
    for(var i=start; i<=end;i++){
      if(i%2===0){
        sum=sum+i;
      }
    }
    return sum;
  }
  console.log(sumOfEven(300,20));