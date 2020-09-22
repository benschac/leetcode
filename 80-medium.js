/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const n = nums.length;
  let duplicatesAllowed = 2;
  let start = duplicatesAllowed;
  let end = duplicatesAllowed;
  while (end < n) {
    if (nums[start - duplicatesAllowed] != nums[end]) {
      nums[start++] = nums[end];
    }
    end++;
  }

  return start;
}

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
