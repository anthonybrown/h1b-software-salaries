
/* var React = require('react'),
   _ = require('lodash'),
   d3 = require('d3'),
   drawers = require('./drawers.jsx'),
   Controls = require('./controls.jsx'),
   meta = require('./meta.jsx'); */

import React from 'react';

import H1BGraph from './components/H1BGraph';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function () {
    return this.charAt(0).toLowerCase() + this.slice(1);
}

React.render(
    <H1BGraph url="data/h1bs.csv" />,
    document.querySelectorAll('.h1bgraph')[0]
);
