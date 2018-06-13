func minPathSum(grid [][]int) int {
	for i := 1; i < len(grid); i++ {
		grid[i][0] += grid[i-1][0]
	}
	for j := 1; j < len(grid[0]); j++ {
		grid[0][j] += grid[0][j-1]
	}
	for i := 1; i < len(grid); i++ {
		for j := 1; j < len(grid[0]); j++ {
			grid[i][j] = int(math.Min(float64(grid[i][j-1]), float64(grid[i-1][j])))+grid[i][j]
		}
	}
	return grid[len(grid)-1][len(grid[0])-1]
}
