import Datamap from 'datamaps';
import * as d3 from 'd3';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import { mapDiv, mapMaker } from './map_maker.js';

const arcDraw = (mode, target) => {
  d3.selectAll('.datamaps-subunit')
    .on('click', function(d, i) {
      let data = map.options.data[d.id];
      let w = data.totalNum ? data.totalNum : 0;
      if (mode === 'Exports') {
        if (d.id !== target) {
          map.arc(
            [
              {
                origin: target,
                destination: d.id,
                strokeWidth: 2 * Math.trunc(Math.log(w + 1))
              }
            ]
          );
        }
      } else {
        if (d.id !== 'USA') {
          map.arc(
            [
              {
                origin: d.id,
                destination: target,
                strokeWidth: 2 * Math.trunc(Math.log(w + 1))
              }
            ]
          );
        }
      }
    }
  );
};

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
    pathButton.value = 'See All Paths';
  } else {
    toggleButton.value = 'Imports';
    map = mapMaker(EXPORT_DATA, startYear, endYear);
    pathButton.value = 'See All Paths';
  }
  arcDraw(mode, 'USA');
});

const pathButton = document.getElementById("path-button");
pathButton.addEventListener('click', () => {
  if (pathButton.value === 'See All Paths') {
    pathButton.value = 'Hide All Paths';
    const keys = Object.keys(map.options.data);
    console.log(keys);
    let arcs = [];
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] !== 'USA') {
        let origin = mode === 'Imports' ? keys[i] : 'USA';
        let destination = mode === 'Imports' ? 'USA' : keys[i];
        let strokeWidth = 2 * Math.trunc(Math.log(map.options.data[keys[i]].totalNum + 1));
        console.log(arcs);
        arcs.push({origin, destination, strokeWidth});
      }
    }
    map.arc(arcs);
  } else {
    pathButton.value = 'See All Paths';
    map.arc([]);
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

// default map values: exports from 2001-2016
let mode = 'Exports';
let startYear = 2001;
let endYear = 2016;

// Initial map drawer
let map = mapMaker(EXPORT_DATA, startYear, endYear);
arcDraw('Exports', 'USA');

// Keeps map responsive
window.addEventListener('resize', function() {
    map.resize();
});
