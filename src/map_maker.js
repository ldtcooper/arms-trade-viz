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
        target: '#454A66',
        oneToTen: '#A6E1FA',
        tenToHundred: '#0E6BA8',
        hundredToThousand: '#0A2472',
        overThousand: '#091E5E'
      },
      data: dataFormatter(dataset, start, end),
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
