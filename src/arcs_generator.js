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

export const exportArcsGenerator = function arcsGenerator(dataset) {
  const keys = Object.keys(dataset);
  let outputData = [];
  for (var i = 0; i < keys.length; i++) {
    try {
          outputData.push({
          origin: "USA",
          destination: nameToId[keys[i]],
          options: {strokeWidth: arcRanges(dataset[keys[i]]["Total"])}
        });
      } catch(e) {
        console.log(e);
      }
  }
  console.log(outputData);
  return outputData;
};

export const importArcsGenerator = function arcsGenerator(dataset) {
  const keys = Object.keys(dataset);
  let outputData = [];
  for (var i = 0; i < keys.length; i++) {
    outputData.push({
      origin: nameToId[keys[i]],
      destination: "USA",
      options: {strokeWidth: arcRanges(dataset[keys[i]]["Total"])}
    });
  }
  return outputData;
};
