class Solution:
    def peakIndexInMountainArray(self, A):
        """
        :type A: List[int]
        :rtype: int
        """
        n = len(A)
        i = 0
        while i+1 < n and A[i] < A[i+1]:
            i += 1
        return i
