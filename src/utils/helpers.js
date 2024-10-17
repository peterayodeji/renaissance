export function removeDuplicates(arr, prop) {
  const seen = new Set();
  return arr?.filter(item => {
    const propValue = item[prop];
    if (seen.has(propValue)) {
      return false;
    }
    seen.add(propValue);
    return true;
  });
}

const getRange = function (start, end, step = 1) {
  const range = [];
  for (let i = start; i < end; i += step) {
    range.push(i);
  }

  return range;
};

export function returnPaginationRange(totalPage, page, siblings = 1) {
  const DISTINCT_PAGINATION_ELEMENTS = 5;
  const totalPageNoInArray = DISTINCT_PAGINATION_ELEMENTS + siblings;
  if (totalPageNoInArray >= totalPage) {
    return getRange(1, totalPage + 1);
  }

  const leftSiblingsIndex = Math.max(page - siblings, 1);
  const rightSiblingsIndex = Math.min(page + siblings, totalPage);

  const showLeftDots = leftSiblingsIndex > 2;
  const showRightDots = rightSiblingsIndex < totalPage - 2;

  if (!showLeftDots && showRightDots) {
    const leftItemsCount = 3 + 2 * siblings;
    const leftRange = getRange(1, leftItemsCount + 1);
    return [...leftRange, ' ...', totalPage];
  } else if (showLeftDots && !showRightDots) {
    const rightItemsCount = 3 + 2 * siblings;
    const rightRange = getRange(totalPage - rightItemsCount + 1, totalPage + 1);
    return [1, '... ', ...rightRange];
  } else {
    const middleRange = getRange(leftSiblingsIndex, rightSiblingsIndex + 1);
    return [1, '... ', ...middleRange, ' ...', totalPage];
  }
}
