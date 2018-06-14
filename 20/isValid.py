class Solution:
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) % 2 != 0:
            return False
        stack = []
        for i in range(len(s)):
            if len(stack) == 0:
                stack.append(s[i])
            else:
                if 1<= ord(s[i]) - ord(stack[-1]) <= 2:
                    stack.pop()
                else:
                    stack.append(s[i])
        return len(stack) == 0
