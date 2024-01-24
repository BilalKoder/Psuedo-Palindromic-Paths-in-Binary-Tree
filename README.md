Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be pseudo-palindromic if at least one permutation of the node values in the path is a palindrome.

Return the number of pseudo-palindromic paths going from the root node to leaf nodes.

![image](https://github.com/BilalKoder/Psuedo-Palindromic-Paths-in-Binary-Tree/assets/107485396/ea7931b2-c142-4786-b07f-23bdc3f91909)


This code follows the same logic as previously explained. The pseudoPalindromicPaths function takes the root of the binary tree as input and returns the number of pseudo-palindromic paths. The dfs function is a helper function that performs depth-first search and updates the frequency array while traversing the tree. The isPseudoPalindrome function checks if the current path is pseudo-palindromic based on the frequency array.
