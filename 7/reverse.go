func reverse(x int) int {
	ans := 0
	n := 0
	for x != 0 {
		if ans > math.MaxInt32/10 || ans < math.MinInt32/10 {
			return 0
		}
		n = x % 10
		ans = ans*10 + n
		x = x / 10
	}
	return ans
}
