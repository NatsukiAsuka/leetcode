package solutions

import "math"

func LengthOfLongestSubstring(s string) int {
	if len(s) == 0 {
		return 0
	}
	m := make(map[rune]int)
	var (
		max  = 0
		left = 0
	)
	for k, v := range s {
		if index, ok := m[v]; ok && left <= index {
			left = index + 1
		}
		m[v] = k
		max = int(math.Max(float64(max), float64(k+1-left)))
	}
	return max
}
