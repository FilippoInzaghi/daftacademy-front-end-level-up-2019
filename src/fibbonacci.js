function fib(num) {
  if (!Number.isInteger(num)){
    return 'This is not an integer!'
  };
  if (num < 0){
    return 'The given number can not be negative!'
  };

  switch(num){
    case 0 :
      return [];
      break
    case 1 :
      return [0];
      break;
    case 2 :
      return [0,1];
      break;
  };
  
  let fibArray = [0, 1];
  let F0 = 0;
  let F1 = 1;
  for (let i = 2; i < num; i++){
      const temp = F0 + F1;
      fibArray.push(temp);
      F0 = F1;
      F1 = temp
  };
  return fibArray;
}
module.exports = fib;



