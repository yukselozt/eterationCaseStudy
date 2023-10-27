export const calculateTabbarBadge = (arr) => {
  var badgeCount = 0;
  for (let i = 0; i < arr.length; i++) {
    badgeCount += arr[i].quantity;
  }
  return badgeCount;
};
