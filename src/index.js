import Datamap from 'datamaps';
import * as d3 from 'd3';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';
import { countryPopupTemplate, arcPopupTemplate } from './popup_format.js';
import { exportArcsGenerator } from './arcs_generator.js';


const map = new Datamap(
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
    data: dataFormater(EXPORT_DATA),
    geographyConfig: {
      borderColor: '#00072D',
      highlightFillColor: '#171D40',
      highlightBorderColor: "#00072D",
      popupTemplate: countryPopupTemplate
    },
    arcConfig: {
      strokeColor: 'gold',
      animationSpeed: 2000
    }
  }
);

d3.selectAll('.datamaps-subunit')
  .on('click', function(d, i) {
    let data = map.options.data[d.id];
    let w = data.totalNum ? data.totalNum : 0;
    if (d.id !== 'USA') {
      map.arc([{origin: 'USA', destination: d.id, strokeWidth: Math.trunc(Math.log(w) + 1)}]);
    }
  });

window.addEventListener('resize', function() {
    map.resize();
});
