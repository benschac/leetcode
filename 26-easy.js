// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function (nums) {
  let idx = 0;

  for (let j = 1; j < nums.length; j++) {
    const element = nums[j];

    if (element !== nums[idx]) {
      idx++;
      nums[idx] = element;
    }
  }

  return nums;
};

console.log(removeDuplicates([1, 1, 2, 2, 3]));
