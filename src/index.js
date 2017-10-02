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

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        alert(xmlhttp.responseText);
    }
};

xmlhttp.open("GET", "us_exports.csv", true);
xmlhttp.send();
