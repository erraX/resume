var longestPalindrome = function (s) {
  const dp = Array(s.length + 1)
    .fill()
    .map(() => []);

  for (let l = 0; l <= s.length; l++) {
    for (let i = 0; i <= s.length - l; i++) {
      if (l <= 1) {
        dp[l][i] = true;
        continue;
      }

      const head = s[i];
      const tail = s[i + l - 1];
      if (head === tail) {
        dp[l][i] = dp[l - 2][i + 1];
      } else {
        dp[l][i] = false;
      }
    }
  }

  for (let l = s.length; l >= 0; l--) {
    for (let i = 0; i <= s.length - l; i++) {
      if (dp[l][i]) {
        return s.substr(i, l);
      }
    }
  }
};

console.log('longestPalindrome', longestPalindrome('abba'));
