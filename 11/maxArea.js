/**
 * @param {number[]} height
 * @return {number}
 */
let convert = height => {
    let [maxArea, left, right] = [0, 0, height.length - 1];
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) {
            left++;
        } else {
            right++;
        }
    }
    return maxArea;
};
