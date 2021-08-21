/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
*/

var arrayStringsAreEqual = function(word1, word2) {
    let string1="",string2="";
    let len = word1.length > word2.length ? word1.length:word2.length;
    for(let i=0;i<len;i++){
      if(word1[i]){
        string1=string1+word1[i]
      }
      if(word2[i]){
        string2=string2+word2[i]
      }
    }
    if(string1 == string2){
        return true
    }else{
        return false;
    }
};