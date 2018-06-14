class Solution(object):
    def selfDividingNumbers(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: List[int]
        """
        ans = []
        for i in range(left, right+1):
            val = i
            flag = 1
            while i:
                n = i % 10
                if not n or val % n != 0:
                    flag = 0
                    break
                i /= 10
            if flag:
                ans.append(val)
        return ans
