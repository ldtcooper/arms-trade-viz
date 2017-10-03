const Datamap = require('datamaps');
import { EXPORT_DATA, IMPORT_DATA } from './data.js';

const arcRanges = function tradeRanges(volume) {
  switch (volume) {
    case volume < 2500:
      return 2;
    case volume < 5000:
      return 4;
    case volume < 7500:
      return 8;
    default:
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
    outputData[keys[i]] = {
      fillKey: 'partner',
      total: [totalCalc(dataset[keys[i]]["Total"])],
      arcKey: {strokeWidth: [arcRanges(dataset[keys[i]]["Total"])]}
    };
  }
};

const map = new Datamap(
  {
    element: document.getElementById('basic-map'),
    responsive: true,
    fills: {
      defaultFill: '#FFFFFF',
      target: '#000066',
      partner: '#ccccff'

    },
    geographyConfig: {
      borderColor: '#808080',
      highlightFillColor: '#3399ff',
      highlightBorderColor: "#003366"
    }
  }
);

map.arc([{
  origin: "United States",
  destination: "Israel"
}]);

window.addEventListener('resize', function() {
    map.resize();
});
