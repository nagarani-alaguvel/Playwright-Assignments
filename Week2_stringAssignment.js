// Example 1 & 2: Length of Last Word

function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
}

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord(" fly me to the moon ")); // 4

// Example 3: Check Anagram

function isAnagram(str1, str2) {
    const formatString = (str) =>
        str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

    return formatString(str1) === formatString(str2);
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
