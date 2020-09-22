var subarraySum = function(nums, k) {
  let total = 0;
    
  if (nums.length === 1) {
      return nums[0] === k ? 1 : 0
  }
  
  
  for(let i = 0; i < nums.length; i++) {
      let sum = 0;

          
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];
          if (sum === k) {
              total = total + 1;
          }
          
          
      }
  }

  return total;
};

console.log(subarraySum([100, 1,2,3,4], 3));