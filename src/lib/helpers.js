function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function groupBy(array, key) {
  const grouped = array.reduce((acc, currentValue) => {
    if (!acc[currentValue[key]]) {
      acc[currentValue[key]] = [];
    }

    acc[currentValue[key]].push(currentValue);

    return acc;
  }, {});

  return grouped;
}

export { randomColor, groupBy };
