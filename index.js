/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths = function(root) {
    let count = 0;

    function isPseudoPalindrome(freq) {
        let oddCount = 0;
        for (let i = 1; i <= 9; i++) {
            if (freq[i] % 2 !== 0) {
                oddCount++;
            }
        }
        return oddCount <= 1;
    }

    function dfs(node, freq) {
        if (!node) return;

        freq[node.val]++;
        if (!node.left && !node.right) {
            if (isPseudoPalindrome(freq)) {
                count++;
            }
        }

        dfs(node.left, [...freq]);
        dfs(node.right, [...freq]);
    }

    dfs(root, new Array(10).fill(0));
    return count;
};