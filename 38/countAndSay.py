class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """
        res = 1
        for _ in range(n-1):
            temp = 
            j = 0
            while j < len(res):
                count = 1
                while j < len(res)-1 and res[j] == res[j+1]:
                    j = j + 1
                    count = count + 1
                j = j + 1
                temp = temp + str(count) + res[j-1]
            res = temp
        return res
