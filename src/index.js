import Datamap from 'datamaps';
import * as d3 from 'd3';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';
import { countryPopupTemplate, arcPopupTemplate } from './popup_format.js';
import { exportArcsGenerator, importArcsGenerator } from './arcs_generator.js';

// div where all the map magic happens
let mapDiv = document.getElementById('basic-map');

// Map functions
const mapMaker = function mapMaker(dataset, start, end) {
  return (new Datamap(
    {
      element: mapDiv,
      responsive: true,
      projection: 'mercator',
      fills: {
        defaultFill: '#FFFFFF',
        target: '#454A66',
        oneToTen: '#A6E1FA',
        tenToHundred: '#0E6BA8',
        hundredToThousand: '#0A2472',
        overThousand: '#091E5E'
      },
      data: dataFormater(dataset, start, end),
      geographyConfig: {
        borderColor: '#304049',
        highlightFillColor: '#171D40',
        highlightBorderColor: "#304049",
        popupTemplate: countryPopupTemplate
      },
      arcConfig: {
        strokeColor: 'rgba(191, 63, 63, 0.5)',
        animationSpeed: 1000
      }
    }
  ));
};

const arcDraw = (mode, target) => {
  d3.selectAll('.datamaps-subunit')
    .on('click', function(d, i) {
      let data = map.options.data[d.id];
      let w = data.totalNum ? data.totalNum : 0;
      if (mode === 'export') {
        if (d.id !== target) {
          map.arc([{origin: target, destination: d.id, strokeWidth: 2 * Math.trunc(Math.log(w) + 1)}]);
        }
      } else {
        if (d.id !== 'USA') {
          map.arc([{origin: d.id, destination: target, strokeWidth: 2 * Math.trunc(Math.log(w) + 1)}]);
        }
      }

    });
};

// default map values: exports from 2001-2016
let mode = 'Exports';
let startYear = 2001;
let endYear = 2016;

//event handers

let button = document.getElementById("toggle-button");
button.addEventListener('click', () => {
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  if (button.value === 'Imports') {
    button.value = 'Exports';
    map = mapMaker(IMPORT_DATA, startYear, endYear);
    arcDraw('import', 'USA');
  } else {
    button.value = 'Imports';
    map = mapMaker(EXPORT_DATA, startYear, endYear);
    arcDraw('export', 'USA');
  }
});



let startBar = document.getElementById('start');
let endBar = document.getElementById('end');
startBar.addEventListener('change', () => {
  startYear = startBar.value;
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  map = mapMaker();
});


// Initial map drawer
let map = mapMaker(EXPORT_DATA, startYear, endYear);
arcDraw('export', 'USA');

// Keeps map responsive
window.addEventListener('resize', function() {
    map.resize();
});
