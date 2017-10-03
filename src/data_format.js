import { nameToId } from './name_to_id.js';

const arcRanges = function tradeRanges(volume) {
  if (volume < 2500) {
    return 2;
  } else if (volume < 5000) {
    return 4;
  } else if (volume < 7500) {
    return 8;
  } else {
    return 16;
  }
};

const totalCalc = function totalCalc(volume) {
  if (volume === 0) {
    return "Less than $1,000,000";
  } else if (volume < 1000 ) {
    return `$${volume} million`;
  } else {
    return `$${volume / 1000} billion`;
  }
};

const dataFormater = function dataFormater(dataset) {
  const keys = Object.keys(dataset);
  let outputData = {};
  for (let i = 0; i < keys.length; i++) {
    outputData[nameToId[keys[i]]] = {
      fillKey: 'partner',
      total: totalCalc(dataset[keys[i]]["Total"]),
      arcKey: {strokeWidth: arcRanges(dataset[keys[i]]["Total"])}
    };
  }
  outputData["USA"] = { fillKey: "target"};
  return outputData;
};

export default dataFormater;
