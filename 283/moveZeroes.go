func moveZeroes(nums []int) {
	for index, current := 0, 0; current < len(nums); current++ {
		if nums[current] != 0 {
			nums[index], nums[current] = nums[current], nums[index]
			index++
		}
	}
}
