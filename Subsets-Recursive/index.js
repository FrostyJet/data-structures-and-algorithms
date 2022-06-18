function getSubstets(arr) {
  const result = [];
  function subsets(list, tmpSubset = [], index = 0) {
    if (index === list.length) {
      result.push(tmpSubset);
      return;
    }

    // not included
    subsets(list, tmpSubset.slice(), index + 1);

    // included
    tmpSubset.push(list[index]);
    subsets(list, tmpSubset.slice(), index + 1);
  }
  subsets(arr);

  return result;
}

console.log(getSubstets(["A", "B", "C"]));
