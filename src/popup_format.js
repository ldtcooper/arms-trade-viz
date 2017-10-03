const popupTemplate = function popupTemplate(geography, data) {
  if (geography.id === "USA") {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong></div>`;
  } else if (data) {
    return `<div class="hoverinfo"><strong>Country: ${geography.properties.name}</strong> <strong>Value: ${data.total}</strong></div>`;
  }
};

export default popupTemplate;
