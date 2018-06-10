package solutions

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	var y = 0
	tmp := x
	for tmp != 0 {
		y = y*10 + tmp%10
		tmp /= 10
	}
	return x == y
}
