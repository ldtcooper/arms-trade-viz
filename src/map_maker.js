import Datamap from 'datamaps';
import { countryPopupTemplate } from './popup_format.js';
import dataFormatter from './data_format.js';


export const mapDiv = document.getElementById('basic-map');

export const mapMaker = function mapMaker(dataset, start, end) {
  return (new Datamap(
    {
      element: mapDiv,
      responsive: true,
      projection: 'mercator',
      fills: {
        defaultFill: 'gainsboro',
        target: '#171D40',
        oneToTen: '#bdd7e7',
        tenToHundred: '#6baed6',
        hundredToThousand: '#3182bd',
        overThousand: '#08519c'
      },
      data: dataFormatter(dataset, start, end),
      geographyConfig: {
        borderColor: '#304049',
        highlightFillColor: '#171D40',
        highlightBorderColor: "#304049",
        popupTemplate: countryPopupTemplate
      },
      arcConfig: {
        strokeColor: 'rgba(128, 0, 38, 0.5)',
        animationSpeed: 1000
      }
    }
  ));
};
