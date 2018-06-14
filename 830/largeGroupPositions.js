let largeGroupPositions = S => {
    if (S.length === 0 || S === "") return [];
    const ans = [];
    let [left, right] = [0, 0];
    let cur = S[0];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === cur) {
            right = i;
            if (right === S.length - 1 && right - left >= 2) {
                ans.push([left, right]);
            }
        }
        else {
            if (right - left >= 2) {
                ans.push([left, right])
            }
            left = right = i;
            cur = S[i];
        }
    }
    return ans;
};
