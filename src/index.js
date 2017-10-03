import Datamap from 'datamaps';
import { EXPORT_DATA, IMPORT_DATA } from './data.js';
import dataFormater from './data_format.js';
import popupTemplate from './popup_format.js';

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
      popupTemplate
    }
  }
);

window.addEventListener('resize', function() {
    map.resize();
});
