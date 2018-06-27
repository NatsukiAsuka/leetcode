class Solution {
public:
    bool judgeCircle(string moves) {
        unordered_map<char, int> m;
        for (char c : moves) ++m[c];
        return m[L] == m[R] && m[U] == m[D];
    }
};
