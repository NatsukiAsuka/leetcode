class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """

        if numRows <= 1 or s is None:
            return s
        n, ans = 2 * numRows - 2, 
        for i in range(numRows):
            for j in range(i, len(s), n):
                ans += s[j]
                if 0 < i < numRows - 1 and j + n - 2 * i < len(s):
                    ans += s[j + n - 2 * i]
        return ans

