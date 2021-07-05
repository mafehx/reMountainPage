// Sorters
export function sorting(data, order) {
  let mp = 1;
  if (order === "asc") {
    mp = -1;
  } else if (order === "desc") {
    mp = 1;
  } else {
    alert("Error order input");
  }

  let sortedArray = [];
  // data = array of groups
  // mp = multiplicator to change sorting order
  data.forEach((group, index) => {
    data[index].data = group.data.sort((a, b) =>
      a.number > b.number ? 1 * mp : b.number > a.number ? -1 * mp : 0
    );
  });

  return data;
}
