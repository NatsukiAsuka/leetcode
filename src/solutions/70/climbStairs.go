package solutions

func ClimbStairs(n int) int {
	arr := []int{1, 1}
	for i := 1; i < n; i++ {
		t := arr[1]
		arr[1] += arr[0]
		arr[0] = t
	}
	return arr[1]
}
