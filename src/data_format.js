import { nameToId } from './name_to_id.js';

const stringCalc = function stringCalc(volume) {
  if (volume === null) {
    return "$0";
  } if (volume === 0) {
    return "Less than $1,000,000";
  } else if (volume < 1000 ) {
    return `$${volume} million`;
  } else {
    return `$${volume / 1000} billion`;
  }
};

const fillCalc = function fillCalc(volume) {
  if (volume === null) {
    return 'defaultFill';
  } else if (volume <= 10) {
    return 'oneToTen';
  } else if (volume <= 100) {
    return 'tenToHundred';
  } else if (volume <= 1000) {
    return 'hundredToThousand';
  } else if (volume > 1000) {
    return 'overThousand';
  }
};

const totalCalc = function totalCalc(start, end, obj) {
  let total = obj[start];
  if (start < end) {
    for (var i = start; i <= end; i++) {
      total += obj[i];
    }
  }
  return total;
};

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
};

export default dataFormater;
