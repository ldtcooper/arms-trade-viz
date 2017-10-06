``` js
const arcDraw = (mode, target) => {
  d3.selectAll('.datamaps-subunit')
    .on('click', function(d, i) {
      let data = map.options.data[d.id];
      let w = data.totalNum ? data.totalNum : 0;
      if (mode === 'Exports') {
        if (d.id !== target) {
          map.arc(
            [
              {
                origin: target,
                destination: d.id,
                strokeWidth: 2 * Math.trunc(Math.log(w + 1))
              }
            ]
          );
        }
      } else {
        if (d.id !== 'USA') {
          map.arc(
            [
              {
                origin: d.id,
                destination: target,
                strokeWidth: 2 * Math.trunc(Math.log(w + 1))
              }
            ]
          );
        }
      }
    }
  );
};
```
