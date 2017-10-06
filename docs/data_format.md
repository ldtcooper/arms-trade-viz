## Data Formatter

``` js
const totalCalc = function totalCalc(start, end, obj) {
  let total = obj[start];
  if (start < end) {
    for (var i = start; i <= end; i++) {
      total += obj[i];
    }
  }
  return total;
};

const dataFormatter = function dataFormatter(dataset, start, end) {
  const keys = Object.keys(dataset);
  let outputData = {};
  for (let i = 0; i < keys.length; i++) {
    let total = totalCalc(start, end, dataset[keys[i]]);
    outputData[nameToId[keys[i]]] = {
      totalNum: total,
      fillKey: fillCalc(total),
      totalStr: stringCalc(total),
    };
  }
  outputData["USA"] = { fillKey: "target"};
  return outputData;
};```
