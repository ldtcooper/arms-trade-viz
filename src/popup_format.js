export const countryPopupTemplate = function popupTemplate(geography, data) {
  if (geography.id === "USA") {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong></div>`;
  } else if (data) {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong> <strong>Value: ${data.totalStr}</strong></div>`;
  } else {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong> <strong>Value: $0</strong></div>`;
  }
};
