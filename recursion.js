/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length == 0) return 1;
  return nums.shift() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length == 0) {
    return 0;
  }
  let word = words.shift();
  let compare = longest(words);

  if (word.length > compare) {
    return word.length;
  } else {
    return compare;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length == 0) {
    return "";
  }

  let char = str.slice(0, 2);
  let newStr = str.slice(2, str.length);
  return char[0] + everyOther(newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  let first = str.slice(0, 1);
  let last = str.slice(str.length - 1, str.length);
  if (first == last) {
    str = str.slice(1, str.length - 1);
    return isPalindrome(str);
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (arr.length == 0) {
    return -1;
  }
  let newArr = [...arr];
  let word = newArr.shift();
  if (word == val) {
    let total = 0;
    return total;
  } else {
    let total = findIndex(newArr, val);
    if (total >= 0) {
      total++;
    }
    return total;
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length == 0) {
    return "";
  }
  let last = str.slice(str.length - 1, str.length);
  let newStr = str.slice(0, str.length - 1);
  return last + revString(newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = [];
  for (let o in obj) {
    if (typeof obj[o] == "object") {
      let newArr = gatherStrings(obj[o]);
      arr = arr.concat(newArr);
    } else {
      if (typeof obj[o] == "string") {
        arr.push(obj[o]);
      }
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, firstIdx = 0, lastIdx = arr.length - 1) {
  if (firstIdx <= lastIdx) {
    let middleIdx = Math.floor((firstIdx + lastIdx) / 2);
    let middleVal = arr[middleIdx];
    if (middleVal == val) {
      return middleIdx;
    } else if (middleVal > val) {
      return binarySearch(arr, val, firstIdx, middleIdx - 1);
    } else if (middleVal < val) {
      return binarySearch(arr, val, middleIdx + 1, lastIdx);
    }
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
