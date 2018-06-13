package solutions

import "math"

func MaxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return 1 + int(math.Max(float64(MaxDepth(root.Left)), float64(MaxDepth(root.Right))))
}
