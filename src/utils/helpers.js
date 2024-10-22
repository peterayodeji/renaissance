export function isValidRes([...values]) {
  const isArr = [...values]?.every(val => Array.isArray(val));
  const itemPresent = [...values]?.some(
    val => Array.isArray(val) && val.length > 0,
  );

  const isValid = isArr && itemPresent;
  return isValid;
}

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

export function collectUniqueTags(arr, searchValue) {
  const uniqueTags = new Set();
  const result = [];

  arr?.forEach(item => {
    item.tags.forEach(tag => {
      const key = item.subcategory + tag;
      if (
        tag.toLowerCase().includes(searchValue.toLowerCase()) &&
        !uniqueTags.has(key)
      ) {
        uniqueTags.add(key);
        result.push({ key, tag, subcategory: item.subcategory });
      }
    });
  });

  return result;
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
