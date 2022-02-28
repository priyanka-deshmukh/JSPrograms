// Length of last word

var lengthOfLastWord = function(s) {
    // s.match(/\b(\w+)\b/g).slice(-1)[0].length also returns similar result. but slower than pop.
    return s.match(/\b(\w+)\b/g).pop().length;
}