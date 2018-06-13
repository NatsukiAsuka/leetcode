func maxSubArray(nums []int) int {
	max := math.MinInt32
	num := 0
	for _, v := range nums {
		if num < 0 {
			num = v
		} else {
			num += v
		}
		max = int(math.Max(float64(max), float64(num)))
	}
	return max
}
