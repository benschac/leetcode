// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// highest
// if got lower forget and start sub array again

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

function maxSubArray(arr) {
  let highest = Number.MIN_SAFE_INTEGER;
  let sum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (sum < 0) {
      sum = 0;
    }

    sum = sum + current;

    if (highest < sum) {
      highest = sum;
    }
  }

  return highest;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
