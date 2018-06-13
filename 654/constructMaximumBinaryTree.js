/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
let constructMaximumBinaryTree = nums => ({
  if (!nums || nums.length == 0) return null;
  let max = Math.max(nums);
  let pos = nums.indexOf(max);
  let root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, pos));
  root.right = constructMaximumBinaryTree(nums.slice(pos + 1));
  return root;
});
