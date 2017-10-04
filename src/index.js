import Datamap from 'datamaps';
import * as d3 from 'd3';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';
import { countryPopupTemplate, arcPopupTemplate } from './popup_format.js';
import { exportArcsGenerator } from './arcs_generator.js';

let mode = 'export';


let button = document.querySelector("input");
let mapDiv = document.getElementById('basic-map');
button.addEventListener('click', () => {
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  if (button.value === 'Imports') {
    button.value = 'Exports';
    map = mapMaker(IMPORT_DATA);
  } else {
    button.value = 'Imports';
    map = mapMaker(EXPORT_DATA);
  }
});

const mapMaker = function mapMaker(dataset) {
  return (new Datamap(
    {
      element: document.getElementById('basic-map'),
      responsive: true,
      fills: {
        defaultFill: '#FFFFFF',
        america: '#454A66',
        oneToTen: '#A6E1FA',
        tenToHundred: '#0E6BA8',
        hundredToThousand: '#0A2472',
        overThousand: '#091E5E'
      },
      data: dataFormater(dataset),
      geographyConfig: {
        borderColor: '#304049',
        highlightFillColor: '#171D40',
        highlightBorderColor: "#304049",
        popupTemplate: countryPopupTemplate
      },
      arcConfig: {
        strokeColor: 'rgba(191, 63, 63, 0.5)',
        animationSpeed: 2000
      }
    }
  ));
};

let map = mapMaker(EXPORT_DATA);

d3.selectAll('.datamaps-subunit')
  .on('click', function(d, i) {
    let data = map.options.data[d.id];
    let w = data.totalNum ? data.totalNum : 0;
    if (d.id !== 'USA') {
      map.arc([{origin: 'USA', destination: d.id, strokeWidth: 2 * Math.trunc(Math.log(w) + 1)}]);
    }
  });

window.addEventListener('resize', function() {
    map.resize();
});
