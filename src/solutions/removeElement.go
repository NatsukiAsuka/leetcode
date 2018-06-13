package solutions

func RemoveElement(nums []int, val int) int {
	ans := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == val {
			continue
		}
		nums[ans] = nums[i]
		ans++
	}
	return ans
}
