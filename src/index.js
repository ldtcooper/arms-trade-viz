import Datamap from 'datamaps';

const map = new Datamap(
  {
    element: document.getElementById('basic-map'),
    responsive: true,
    fills: {
      defaultFill: '#FFFFFF'
    },
    geographyConfig: {
      borderColor: '#808080',
      highlightFillColor: '#3399ff',
      highlightBorderColor: "#003366"
    }
  }
);

window.addEventListener('resize', function() {
    map.resize();
});
