function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false
  } else {
    return true
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));