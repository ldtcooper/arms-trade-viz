``` js
const dataFormater = function dataFormater(dataset, start, end) {
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
