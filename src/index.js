import Datamap from 'datamaps';
import * as d3 from 'd3';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';
import popupTemplate from './popup_format.js';
import { exportArcsGenerator } from './arcs_generator.js';


const map = new Datamap(
  {
    element: document.getElementById('basic-map'),
    responsive: true,
    fills: {
      defaultFill: '#FFFFFF',
      target: '#001C55',
      partner: '#A6E1FA'
    },
    data: dataFormater(EXPORT_DATA),
    geographyConfig: {
      borderColor: '#00072D',
      highlightFillColor: '#0A2472',
      highlightBorderColor: "#00072D",
      popupTemplate
    },
    arcConfig: {
      strokeColor: 'rgba(14,107,168, 0.4)'
    }
  }
);

map.arc(exportArcsGenerator(EXPORT_DATA));

window.addEventListener('resize', function() {
    map.resize();
});
