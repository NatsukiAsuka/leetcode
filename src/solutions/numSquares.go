package solutions

import (
	"math"
)

func NumSquares(n int) int {
	var arr []int
	for i := 1; i*i <= n; i++ {
		arr = append(arr, i*i)
	}

	dp := make([]int, n+1)
	for i := 1; i < len(dp); i++ {
		dp[i] = math.MaxInt32
	}

	for _, v := range arr {
		for i := v; i < len(dp); i++ {
			if dp[i] > dp[i-v]+1 {
				dp[i] = dp[i-v] + 1
			}
		}
	}
	return dp[n]
}
