# International Arms Flows: 2001-2016

## What is it?
A visualization of part of the Stockholm International Peace Research Institute's (SIPRI) [Arms Transfer Database](https://www.sipri.org/databases/armstransfers), which keeps track of major (over one million dollars) transfers of conventional weapons between countries and non-state armed groups. Specifically, this visualization will examine flows of arms to and from the United States between 2001 and 2016, although this scope may expand if time allows (see Bonus Features at the end.)

## MVPs

Users should be able to:

- [ ] See a map of the world.
- [ ] See arrows pointing to and from trading countries.
- [ ] Hover over arrows to see detailed information about exchanges.
- [ ] Click a button to switch between import views and export views.

Additionally, this project will have:

- [ ] An About section with information about SIPRI, the Arms Transfer Database, and the data on the map.

## Wireframes

![Wireframe](https://raw.githubusercontent.com/ldtcooper/arms-trade-viz/master/docs/export_wireframe.png)

**NB:** Content appears in black while notes appear in blue.

The app will consist of a single page containing:

- A header with:
  - A title
  - Links to my GitHub and LinkedIn
- A description of the data and the map (see MVPs section)
- A visualization section with:
  - An interactive world map
  - Arrows denoting flows of arms
  - A tooltip that appears when hovering over an arrow
  - Buttons to toggle between import and export views

## Technologies

This project will be implemented primarily in [D3](https://d3js.org/). SIPRI's data will be stored in a CSV file that will be read into my primary JavaScript file. The GeoJSON data to bind the data to the map will be taken from [Natural Earth](http://www.naturalearthdata.com/). Webpack will be used to bundle scripts and dependencies. Ideally, I will use SCSS to style my page, but if the setup proves to be too time-consuming, I may default to using plain CSS.

## Architecture

**NB:** This plan is going to be more a guideline than a rule. The structure of my project may change as I become more familiar with the ins and outs of D3.

The project directory will likely consist of six files, plus webpack and html boilerplate. Three of these files will be my data files: two CSVs for data about imports and exports of arms, and a GeoJSON file for my geographical data. The two others will be JavaScript files, probably to be called `map.js`, `arrows.js`, and `page.js`.

- `map.js` will take in GeoJSON and turn it into an interactive world map.
- `arrows.js` take in CSV data and turn it into arrow displaying

## Timeline

**Weekend:**
- [ ] Complete [Tom Noda's D3 Map Tutorial](http://www.tnoda.com/blog/2013-12-07).
- [ ] Gather and format SIPRI and GeoJSON data.
- [ ] Create index.html
- [ ] Create basic interactive map.

**Day 1:** Day One will be primarily dedicated to cementing my knowledge of D3 and figuring out how I will serve up my visualization.
- [ ] Get webpack up and running.
- [ ] Read up on linking maps and CSV data.
- [ ] Create functioning buttons for import and export modes.
  - [ ] Clicking button switches which dataset is drawn from.
- [ ] Learn how to use SCSS without Rails.
- [ ] Make any edits necessary to my first map.

**Day 2:** Day Two will be dedicated to getting arrows onto my map.
- [ ] Get paths between correct countries.
  - [ ] Arrows pointing from exporter to importer.
- [ ] Style paths to grow with arms sales.
  - [ ] Paths should be colored in but somewhat transparent.
  - [ ] Paths should get wider with more sales.
- [ ] Differentiate countries included in the data from those not.
  - [ ] US should be one color.
  - [ ] Importing/Exporting countries should be another.
  - [ ] Countries not trading arms with the US should be a third.

**Day 3:** Day Three will be all about putting tooltips on my map upon mousing over either a country or its arrow.
- [ ] Create event handlers for mousing over paths.
- [ ] Link clicks to a tooltip with the name of a country and its imports/exports.
  - [ ] Clicking link brings up that tooltip.
  - [ ] Fades paths between other countries and target.
  - [ ] Intensifies path between highlighted country and target.

**Day 4:** Day Four is going to be my big styling day.
- [ ] Write About section.
- [ ] Create header section
  - [ ] Title
  - [ ] Links to GitHub and LinkedIn
  - [ ] Style header
- [ ] Make any necessary style changes to map

## Bonus Features
With an interactive map of the arms trade between the U.S. and other countries done, this project could evolve in two main ways: covering more countries, and covering more time.

**Countries**
The easier way to increase the scope of this project would be to add more countries to it. Should I finish my MVPs early, I plan to add other major arms exporters such as Russia, China, and Germany to the map.

**Time**
Increasing the time scope of this project presents many challenges not present in increasing the country scope -- namely that many countries that existed at one point in time do not anymore. If I were to begin implementing an increase in time scope, I would begin by introducing a way to slice the current data by year (for example, to look at only arms transfers from 2005-2007).
