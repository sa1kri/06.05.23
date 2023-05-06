function isPalindrome(arr) {
    for (let i =0; i <arr.length / 2; i++) {
        i9f (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
function canBePalindrome(arr) {
    const count = new Map();
    for (let i=0; i<arr.length; i++) {
        const counts.set(arr[i]) || 0;
        counts.set(arr[i], count+1);
    }
    let oddCount = 0;
    for (const count of counts.values()){
        if (count % 2 !== 0){
            oddCount++;
        }
        if (oddCount > 1){
            return false;
        }
    }
    return true;
}

function canBePalindromeAfterPermutation(arr){
    if (arr.length <= 1) {
        return true;
    }
    if (canBePalindrome(arr)){
        return false;
    }
    const sortedArr = arr.sort();
    return isPalindrome(sortedArr);
}