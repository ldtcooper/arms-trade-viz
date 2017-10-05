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
      if (mode === 'Exports') {
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

const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener('click', () => {
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  mode = toggleButton.value;
  if (toggleButton.value === 'Imports') {
    toggleButton.value = 'Exports';
    map = mapMaker(IMPORT_DATA, startYear, endYear);
  } else {
    toggleButton.value = 'Imports';
    map = mapMaker(EXPORT_DATA, startYear, endYear);
  }
  arcDraw(mode, 'USA');
});

const pathButton = document.getElementById("path-button");
pathButton.addEventListener('click', () => {
  if (pathButton.value === 'See All Paths') {
    pathButton.value = 'Hide All Paths';
  } else {
    pathButton.value = 'See All Paths';
  }
});

let startBar = document.getElementById('start');
let endBar = document.getElementById('end');
startBar.addEventListener('change', () => {
  startYear = startBar.value;
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  startYear = startBar.value;
  const opts = endBar.getElementsByTagName("option");
  for (let i = 0; i < opts.length; i++) {
    opts[i].disabled = opts[i].value < startYear ? true : false;
  }
  if (mode === 'Exports') {
    map = mapMaker(EXPORT_DATA, startYear, endYear);
  } else {
    map = mapMaker(IMPORT_DATA, startYear, endYear);
  }
  arcDraw(mode, 'USA');
});

endBar.addEventListener('change', () => {
  endYear = endBar.value;
  while (mapDiv.firstChild) {
    mapDiv.removeChild(mapDiv.firstChild);
  }
  endYear = endBar.value;
  const opts = startBar.getElementsByTagName("option");
  for (let i = 0; i < opts.length; i++) {
    opts[i].disabled = opts[i].value > endYear ? true : false;
  }
  if (mode === 'Exports') {
    map = mapMaker(EXPORT_DATA, startYear, endYear);
  } else {
    map = mapMaker(IMPORT_DATA, startYear, endYear);
  }
  arcDraw(mode, 'USA');
});

// Initial map drawer
let map = mapMaker(EXPORT_DATA, startYear, endYear);
arcDraw('Exports', 'USA');

// Keeps map responsive
window.addEventListener('resize', function() {
    map.resize();
});
