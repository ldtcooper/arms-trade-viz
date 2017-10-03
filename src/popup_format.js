import * as d3 from 'd3';

export const countryPopupTemplate = function popupTemplate(geography, data) {
  if (geography.id === "USA") {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong></div>`;
  } else if (data) {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong> <strong>Value: ${data.total}</strong></div>`;
  }
};

export const arcPopupTemplate = function popupTemplate(geography, data) {
  return `<div class="hoverinfo"><strong>Country: ${data.name}</strong> <strong>Value: ${data.total}</strong></div>`;
};
