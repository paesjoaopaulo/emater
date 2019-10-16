export const sortByNameAsc = (a, b) => {
  if (a instanceof Object) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
  } else {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
  }
  return 0;
};
