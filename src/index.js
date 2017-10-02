import Datamap from 'datamaps';

const map = new Datamap(
  {
    element: document.getElementById('basic-map'),
    responsive: true,
    fills: {
      defaultFill: '#FFFFFF'
    },
    geographyConfig: {
      borderColor: '#666699'
    }
  }
);

window.addEventListener('resize', function() {
    map.resize();
});
