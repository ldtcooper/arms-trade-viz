import Datamap from 'datamaps';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';

const map = new Datamap(
  {
    element: document.getElementById('basic-map'),
    responsive: true,
    fills: {
      defaultFill: '#FFFFFF',
      target: '#000066',
      partner: '#ccccff'
    },
    data: dataFormater(EXPORT_DATA),
    geographyConfig: {
      borderColor: '#808080',
      highlightFillColor: '#3399ff',
      highlightBorderColor: "#003366",
      popupTemplate: function(geography, data) {
          return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong> <strong>Value: ${data.total}</strong></div>`;
        },
    }
  }
);

window.addEventListener('resize', function() {
    map.resize();
});
