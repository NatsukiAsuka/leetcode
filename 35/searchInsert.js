/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
  let [left, right] = [0, nums.length];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target)
      right = mid - 1;
    else
      left = mid + 1;
  }
  return left;
};
