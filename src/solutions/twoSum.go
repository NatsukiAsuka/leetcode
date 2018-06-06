package solutions

func TwoSum(nums []int, target int) []int {
	m := make(map[int]int)
	for k, v := range nums {
		if _, ok := m[target-v]; ok {
			return []int{m[target-v], k}
		}
		m[v] = k
	}
	return nil
}
