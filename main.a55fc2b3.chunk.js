(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(43);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(20);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(73);

// EXTERNAL MODULE: ./src/css/normalize.css
var normalize = __webpack_require__(93);

// EXTERNAL MODULE: ./src/css/colors.css
var colors = __webpack_require__(94);

// EXTERNAL MODULE: ./src/css/fonts.css
var fonts = __webpack_require__(95);

// EXTERNAL MODULE: ./src/css/main.css
var main = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/rellax/rellax.js
var rellax_rellax = __webpack_require__(44);
var rellax_default = /*#__PURE__*/__webpack_require__.n(rellax_rellax);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/d3fc-label-layout/build/d3fc-label-layout.js
var d3fc_label_layout = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/d3/index.js + 114 modules
var d3 = __webpack_require__(21);

// EXTERNAL MODULE: ./src/js/App/weepeople.css
var weepeople = __webpack_require__(107);

// CONCATENATED MODULE: ./src/js/App/app.js




 // VARS

var height, width, maxPerRow;
var countX = 0;
var countY = 0;
var lineHeight = 6;
var y = lineHeight; // const maxPerRow = 20;

var figureHeight = 30;
var figureWidth = 25;
var labelPadding = 2;
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var app_init = function init(data, el) {
  var container = d3["a" /* select */](el);
  width = container.style('width').slice(0, -2);
  maxPerRow = Math.floor(width / (figureWidth + labelPadding * 2)); // set height & width

  height = Math.floor(data.length / maxPerRow * figureHeight * 3);
  d3["a" /* select */]('#app').style('height', "".concat(height, "px"));
  var svg = container.append('svg').attr('viewbox', [0, 0, width, height]).style('height', "".concat(height, "px")); // people icons

  var figure = svg.append('g').selectAll('text').data(data).enter().append('text').attr('class', 'figure').style('opacity', function (d) {
    return !d.school ? 0.4 : 1;
  }).attr('x', function (d, i) {
    countX += 1;
    var x = countX * figureWidth;

    if (x > width) {
      countX = 0;
      x = countX * figureWidth;
    }

    return x;
  }).attr('dy', function (d) {
    return "".concat(randomNumber(1, 8), "%");
  }).attr('y', function (d, i) {
    countY += 1;

    if (countY / (width / figureWidth) >= 1) {
      countY = 0;
      y += lineHeight;
    }

    return "".concat(y, "rem");
  });
  figure.append('tspan').text(function (d) {
    return d.school ? d.name : null;
  }).attr('class', 'tspan text name');
  figure.append('tspan').text(function (d) {
    return d.school ? "Died ".concat(d.death_date) : null;
  }).attr('dy', 15).attr('dx', -105).attr('class', 'tspan text');
  figure.append('tspan').text(function (d) {
    return "".concat(alphabet[Math.floor(Math.random() * alphabet.length)], " ");
  }).attr('class', function (d) {
    return d.school ? 'weepeople bc' : 'weepeople tspan';
  }); // // the component used to render each label
  // const textLabel = layoutTextLabel()
  //   .padding(labelPadding)
  //   .value(d => d.name);
  // // a strategy that combines simulated annealing with removal
  // // of overlapping labels
  // const strategy = layoutRemoveOverlaps(layoutGreedy());
  // // create the layout that positions the labels
  // const labels = layoutLabel(strategy)
  //     .size((d, i, g) => {
  //         // measure the label and add the required padding
  //         const textSize = g[i].getElementsByTagName('text')[0].getBBox();
  //         return [textSize.width + labelPadding * 2, textSize.height + labelPadding * 2];
  //     })
  //     .position(d => projection(d.geometry.coordinates))
  //     .component(textLabel);
  // // render!
  // svg.datum(data)
  //      .call(labels);
  // const container = document.getElementById('app');
  // data.forEach(d => {
  // 	const letter = `${alphabet[Math.floor(Math.random() * alphabet.length)]} `;
  // 	const el = document.createElement('span');
  // 	// BC or not?
  // 	el.className = d.school ? 'weepeople bc' : 'weepeople';
  // 	el.append(letter);
  // 	container.append(el);
  // });
};

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// EXTERNAL MODULE: ./src/data/data.js
var data_data = __webpack_require__(45);
var data_default = /*#__PURE__*/__webpack_require__.n(data_data);

// CONCATENATED MODULE: ./src/index.js



// CSS



 // JS





var src_init = /*#__PURE__*/function () {
  var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var rellax;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            rellax = new rellax_default.a('.rellax');
            app_init(data_default.a.sort(function () {
              return Math.random() - 0.5;
            }), '#background');

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

src_init();

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = [{
  "name": "[Unknown] Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "[Unknown] Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "[Jerimian] Ballentyne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "[Unknown] Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "A. Patrip",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "A. Thibert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Abel Evan Francois",
  "death_date": "ca. 1917-1920",
  "school": "Lejac (Stuart Lake)",
  "year": "1920"
}, {
  "name": "Abel Half",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Abel Ward",
  "death_date": "ca. 1936",
  "school": "Coqualeetza",
  "year": "1936"
}, {
  "name": "Abraham Bighetty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Abraham Moses Nakogee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Absolam Monias",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Absolom Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ackeepineskung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ada Keg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ada Roberts",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ada Tom",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ada Yako",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adéline Lépiné",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adaline Makokis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Bearhead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Big Feet",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam J. Noskeye",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Kamakawtay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Muskego",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Oochoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Phillip",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Stieman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adam Takakihinew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adelaide Pictwiwesin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adele Tambour",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adelina Paul",
  "death_date": "Oct. 10, 1900",
  "school": "Kuper Island",
  "year": "1900"
}, {
  "name": "Adeline Celestine Jones",
  "death_date": "Oct. 13, 1917",
  "school": "Kuper Island",
  "year": "1917"
}, {
  "name": "Adeline Ellize",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adeline Lépiné",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adeline T’Lo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adelside Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adolophe",
  "death_date": "ca. 1891-1892",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1892"
}, {
  "name": "Adolph Maurus",
  "death_date": "Dec. 15, 1936",
  "school": "Christie",
  "year": "1936"
}, {
  "name": "Adolphus Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Adrian Reynold G. George",
  "death_date": "Apr. 25, 1959",
  "school": "Kamloops (St. Louis)",
  "year": "1959"
}, {
  "name": "Agatha (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agatha Flamand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agathe Chippewyan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Abraham",
  "death_date": "Jan. 01, 1941",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1941"
}, {
  "name": "Agnes Ahpistawasis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Amos",
  "death_date": "Dec. 20, 1952",
  "school": "Christie",
  "year": "1952"
}, {
  "name": "Agnes Ben",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Black Boy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Cartwright",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Kahkeetoomayou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Keevin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Michou",
  "death_date": "Dec. 28, 1935",
  "school": "Kamloops (St. Louis)",
  "year": "1935"
}, {
  "name": "Agnes Mucheasakack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Sawan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Agnes Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Aka Chueechoque Hardy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Bellegarde",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Big Plume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Brittain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Davey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Gladu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Hance",
  "death_date": "Jan. 31, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Albert Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Joseph-Henry",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Keeshack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Lindsay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Mapils",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Mechawes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Morrison",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Nepinak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Penance",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Pictou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Plain Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Sylvestre",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Tom",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Upistipas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albert Wiarikwaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albertine Hupse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Albina Dumas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Aldina Kewaskunikere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alec Gras de Rat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alec Michel",
  "death_date": "Jan. 01, 1940",
  "school": "Lejac (Stuart Lake)",
  "year": "1940"
}, {
  "name": "Alec Sam",
  "death_date": "Mar. 31, 1937",
  "school": "Coqualeetza",
  "year": "1937"
}, {
  "name": "Alex Bob",
  "death_date": "May. 18, 1946",
  "school": "Cariboo",
  "year": "1946"
}, {
  "name": "Alex Bone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Byhette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex C. Prince",
  "death_date": "Mar. 31, 1944",
  "school": "Lejac (Stuart Lake)",
  "year": "1944"
}, {
  "name": "Alex Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Edjeregon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Grandfarand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Mcgarty Otakysy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Onamekee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Opikew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Shinguish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alex Sochowski",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Aukuck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Callingbull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander James Horsefall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander John",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Knaggs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexander Sakepukaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexandra Diablo",
  "death_date": "Nov. 21, 1964",
  "school": "St. George’s",
  "year": "1964"
}, {
  "name": "Alexandra Chookomoolin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexandre Callingbull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexandre Wemigwams",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexandrine Ladoucer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexis Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexis Kahkikyas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alexis Rain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Bellegarde",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Ermine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Fortin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Iserhoff",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred James (A)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred James (B)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Laliberte",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Lecris",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Little Bighead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Loutitt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred McKay",
  "death_date": "Jan. 01, 1932",
  "school": "St. Michael’s",
  "year": "1932"
}, {
  "name": "Alfred Pascal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Rain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Red Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred Whitehawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alfred William",
  "death_date": "Sep. 07, 1909",
  "school": "Kuper Island",
  "year": "1909"
}, {
  "name": "Alfred Wilson",
  "death_date": "Jul. 25, 1935",
  "school": "Lejac (Stuart Lake)",
  "year": "1935"
}, {
  "name": "Alice",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Abel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Aukuck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Benoit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Blueboy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Bompass",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Delorme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Dick",
  "death_date": "Jan. 01, 1926",
  "school": "Coqualeetza",
  "year": "1926"
}, {
  "name": "Alice Dodman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Garr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice George",
  "death_date": "ca. Oct. 1939",
  "school": "Christie",
  "year": "1939"
}, {
  "name": "Alice Kasiminookis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Lonesinger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Mcpherson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Rabbit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Samakeese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Tangie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alice Wapachee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alick Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alina Alexandre",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Aline Galley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allan Chappise",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allan Prikski",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allan Pukski",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allan Severight",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allan White Horse Medicine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allen Calf Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allen Glen Pelletier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allen Jameson",
  "death_date": "ca. 1941",
  "school": "Kuper Island",
  "year": "1941"
}, {
  "name": "Allen Medicine White Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allen Napo or Mayopo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Allen Patrick Willie",
  "death_date": "Jan. 01, 1937",
  "school": "Lejac (Stuart Lake)",
  "year": "1937"
}, {
  "name": "Allen Sam",
  "death_date": "Not known",
  "school": "Lejac (Stuart Lake)",
  "year": "Not known"
}, {
  "name": "Alma Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alma Mathilde Evans",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Aloysius Daniel",
  "death_date": "May. 15, 1922",
  "school": "Kuper Island",
  "year": "1922"
}, {
  "name": "Aloysius McDougall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Aloysius Wilson",
  "death_date": "Jul. 10, 1920",
  "school": "Kuper Island",
  "year": "1920"
}, {
  "name": "Alpheus Mclean",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alphonsine Dominic",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alvin Oshie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Alvina Brass",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amanda Frenchie",
  "death_date": "ca. 1892",
  "school": "Kuper Island",
  "year": "1892"
}, {
  "name": "Amanda James",
  "death_date": "Dec. 01, 1909",
  "school": "Kuper Island",
  "year": "1909"
}, {
  "name": "Ambrose Alexander",
  "death_date": "Sep. 27, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Ambrose Skead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amelia A.",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amelia Bunn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amelia Cheesman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amelia Jim",
  "death_date": "Jul. 24, 1900",
  "school": "Coqualeetza",
  "year": "1900"
}, {
  "name": "Amelia Waterchief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amos Blackhawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amos Jacob",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amos Johnson",
  "death_date": "Jan. 27, 1906",
  "school": "Kuper Island",
  "year": "1906"
}, {
  "name": "Amos Lefthand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amy Abraham",
  "death_date": "ca. Jan. 1939",
  "school": "St. Mary’s",
  "year": "1939"
}, {
  "name": "Amy Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Amy Shot Both Sides",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anastasia William",
  "death_date": "ca.Jan. 1934",
  "school": "St. Mary’s",
  "year": "1934"
}, {
  "name": "Anastasie",
  "death_date": "ca. 1891-1892",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1892"
}, {
  "name": "Anderson Sye",
  "death_date": "Jan. 01, 1934",
  "school": "Christie",
  "year": "1934"
}, {
  "name": "André (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "André Esakke",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andre Nah-Nah-Qua-Hung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrea Helen Alfred",
  "death_date": "Jun. 04, 1965",
  "school": "St. Michael’s",
  "year": "1965"
}, {
  "name": "Andrew F. Johnston",
  "death_date": "Apr. 30, 1902",
  "school": "Coqualeetza",
  "year": "1902"
}, {
  "name": "Andrew Gordon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew H. Paul",
  "death_date": "Jan. 01, 1937",
  "school": "Lejac (Stuart Lake)",
  "year": "1937"
}, {
  "name": "Andrew Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Joseph",
  "death_date": "May. 22, 1938",
  "school": "Kuper Island",
  "year": "1938"
}, {
  "name": "Andrew Laroque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Ologok",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Sam",
  "death_date": "ca.Dec. 1939",
  "school": "Lejac (Stuart Lake)",
  "year": "1939"
}, {
  "name": "Andrew Silver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Small Feet",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Stacey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Tom",
  "death_date": "Sep. 08, 1939",
  "school": "Christie",
  "year": "1939"
}, {
  "name": "Andrew Tootoosis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew W. Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Wahcaneh",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Andrew Williams",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angela Black Water",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angela Hungry Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angela Kiyawasew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angela Red Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angele Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelina Hoof",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelina Margaret Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Amajiwegijig",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Bonnet Rouge",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Kakekamic",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Marcel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Red Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angelique Trudeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anges Edna Rednose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Alfred Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Anaquot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Crocker",
  "death_date": "ca. 1902-1903",
  "school": "Kuper Island",
  "year": "1903"
}, {
  "name": "Angus Kamenewetawin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Mcnabb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Stover",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Tarbell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Angus Windigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ann Darazele",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ann Goodswimmer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ann Mary Rivier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Aitel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Allary",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Amie",
  "death_date": "Oct. 19, 1918",
  "school": "Kuper Island",
  "year": "1918"
}, {
  "name": "Anna Awasse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Baldhead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Big Plume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Littlechief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Mackie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Makokis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Manitowabi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Nejatatic",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anna Whitstone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annabella Mcnab",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annabelle Spence",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anne Pekonniassang",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anne Wagamese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annette Many Bears",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Begouiassan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Bighetti",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Charley Short",
  "death_date": "Oct. 23, 1898",
  "school": "Coqualeetza",
  "year": "1898"
}, {
  "name": "Annie Crane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Crane Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Frank",
  "death_date": "Jan. 21, 1940",
  "school": "Kamloops (St. Louis)",
  "year": "1940"
}, {
  "name": "Annie Gishick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Howe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Hunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Jack",
  "death_date": "Not known",
  "school": "Alberni",
  "year": "Not known"
}, {
  "name": "Annie John",
  "death_date": "May. 25, 1948",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1948"
}, {
  "name": "Annie Katchimut",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Kegeshyoung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Koe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Laviolette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Lahache",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Lucy Andrew",
  "death_date": "Jan. 20, 1940",
  "school": "Kamloops (St. Louis)",
  "year": "1940"
}, {
  "name": "Annie Mark",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Moving Tent",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Oseemeemas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Oxebin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Pappenburger",
  "death_date": "ca. Jan. 1910",
  "school": "Kuper Island",
  "year": "1910"
}, {
  "name": "Annie Peters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Peyachew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Sakwayhese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Sindilhyn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Sweet Grass",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Tommy",
  "death_date": "Jun. 23, 1917",
  "school": "Kuper Island",
  "year": "1917"
}, {
  "name": "Annie Wadsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Wisegais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Annie Yellow Wings",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anthony Moustach",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anthony Percy Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Anthony Pierre",
  "death_date": "Not known",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "Not known"
}, {
  "name": "Anthony Regis Blackhand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoine Derocher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoine Jackpine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoine Katous",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoine Martineau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoine Wisk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoinette Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Antoinette Tap-Pee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arcelle William",
  "death_date": "May. 19, 1943",
  "school": "Kamloops (St. Louis)",
  "year": "1943"
}, {
  "name": "Archie Boland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Cochrane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Feathers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Half",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Lamilise",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Archie Oxime",
  "death_date": "Jun. 20, 1919",
  "school": "Kamloops (St. Louis)",
  "year": "1919"
}, {
  "name": "Archie Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Aristide Across the Mountain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Armandine Viviers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arnot Robinson",
  "death_date": "Not known",
  "school": "Elizabeth Long Memorial Home for Girls",
  "year": "Not known"
}, {
  "name": "Arsenekapi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur",
  "death_date": "ca. July 1913",
  "school": "Ahousaht",
  "year": "1913"
}, {
  "name": "Arthur Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Heavy Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Johnstone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Miller",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Mousseau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Staats",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Arthur Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Asa Peters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Audrey Le Sage",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Audrey Wesley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "August Jimmy",
  "death_date": "Mar. 30, 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "August John Dick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "August Tseleokanum",
  "death_date": "Feb. 04, 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Augustine",
  "death_date": "Jan. 01, 1905",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1905"
}, {
  "name": "Augustine Allen",
  "death_date": "ca. Aug. 1920",
  "school": "Cariboo",
  "year": "1920"
}, {
  "name": "Augustus Jacket",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Awasis (Sturgeon Lake Reserve)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Baby Bill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Baptiste Xavier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Baptistine Laferty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Barbara Little Shield",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Barnadette Bruyere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Basil Contois",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Basil Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Batestine Cha",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Egodgin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Hoof",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Laferty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Lafferty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Lasens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beatrice Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Belinda James",
  "death_date": "Jun. 05, 1909",
  "school": "Coqualeetza",
  "year": "1909"
}, {
  "name": "Belinda Marie Jack",
  "death_date": "Nov. 17, 1966",
  "school": "Kuper Island",
  "year": "1966"
}, {
  "name": "Belinda Raw Eater",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Andy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Callihoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Daniel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Maminawatum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Moar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Papastesis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Peter",
  "death_date": "May. 30, 1910",
  "school": "Ahousaht",
  "year": "1910"
}, {
  "name": "Bella Rain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Simon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Snowshoe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella T’Atti",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Vittrekwa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bella Wickle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ben Albert Foley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Benjamin Beaconsfield Cheguans",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Benjamin Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Benjamin Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Benjamin Striped Back",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernadette Hart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernadette Naitamepinesse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernadette Strong",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernadette Thomas",
  "death_date": "ca. Jan. 1948",
  "school": "Kuper Island",
  "year": "1948"
}, {
  "name": "Bernard Heavy Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernard Iveran Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernard Kamatchamasis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernard Pratt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernard Starlight",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bernice Billy",
  "death_date": "Jan. 01, 1946",
  "school": "Lejac (Stuart Lake)",
  "year": "1946"
}, {
  "name": "Bernice Wadsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertha Fred",
  "death_date": "Feb. 14, 1937",
  "school": "Alberni",
  "year": "1937"
}, {
  "name": "Bertha Jimmy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertha Lillian White",
  "death_date": "Jun. 20, 1942",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1942"
}, {
  "name": "Bertha Many Feathers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertha Pierre",
  "death_date": "Jun. 29, 1944",
  "school": "Lejac (Stuart Lake)",
  "year": "1944"
}, {
  "name": "Bertha Ruby Stewart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertha Two Thieves",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertie Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertie Kitty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertie Mistaken Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bertie Weasel Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bessie Gouchier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bessie Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bessie Wah Pah Hoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Betsie Osborne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Betsy Lepatac",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Betsy Osborne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Betsy Raindeer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Betsy Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beulah Henry",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Beverly Joseph",
  "death_date": "Jan. 01, 1959",
  "school": "Kuper Island",
  "year": "1959"
}, {
  "name": "Bibiane Bighetty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Bear Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Big Plume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Colder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Kovic",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Sleigh",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Stabbing First",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Billy Wolki",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bina Arcan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Blanche Madden",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bob Pierre",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Bob Reddish Gun",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bobby Joseph Bell",
  "death_date": "Jan. 01, 1961",
  "school": "Kamloops (St. Louis)",
  "year": "1961"
}, {
  "name": "Bobby Many Wounds",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bobby Okhena",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bradley Thomas Smith",
  "death_date": "Oct. 14, 1959",
  "school": "St. Mary’s",
  "year": "1959"
}, {
  "name": "Brian Dillon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Brian Low Horn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bruce Jumbo",
  "death_date": "Apr. 08, 1972",
  "school": "St. George’s",
  "year": "1972"
}, {
  "name": "Bruce Reynold Mack",
  "death_date": "May. 20, 1972",
  "school": "St. George’s",
  "year": "1972"
}, {
  "name": "Bruce Wapiske",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bryan Simon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Bucky Arnold",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "C. Windsor Three Suns",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Célestin Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Céline Crapaud",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Céline Kfwitli",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Camilla Bertha Whitehawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Camille (Hay River)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Camille Charbonneau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Campbell William Pratt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Carl Robert Napio",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Carl Tanner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Carle Wynes Linklater/Linkeleter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Carmen Chonkolay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline (Fort Providence)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Angus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Bunn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Burnam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Felix",
  "death_date": "Jun. 02, 1966",
  "school": "Kuper Island",
  "year": "1966"
}, {
  "name": "Caroline Gardippie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Harris",
  "death_date": "Feb. 21, 1927",
  "school": "Kamloops (St. Louis)",
  "year": "1927"
}, {
  "name": "Caroline Jacob",
  "death_date": "ca. Dec. 1892",
  "school": "Kuper Island",
  "year": "1892"
}, {
  "name": "Caroline Kinose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Minoose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Simpson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Waukay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Caroline Williams",
  "death_date": "Apr. 20, 1920",
  "school": "Kuper Island",
  "year": "1920"
}, {
  "name": "Carrie George",
  "death_date": "Apr. 06, 1916",
  "school": "Ahousaht",
  "year": "1916"
}, {
  "name": "Carrie Quackageezick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Carrie Vincent",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Bear Hat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Bewa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Flamend",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Jacob",
  "death_date": "ca. Dec. 1892",
  "school": "Kuper Island",
  "year": "1892"
}, {
  "name": "Catherine Johnny",
  "death_date": "ca. 1915",
  "school": "Kuper Island",
  "year": "1915"
}, {
  "name": "Catherine Mackay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Marshall",
  "death_date": "Jan. 01, 1941",
  "school": "Christie",
  "year": "1941"
}, {
  "name": "Catherine Peyetchew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Shanari",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Tom",
  "death_date": "Jan. 14, 1911",
  "school": "Kuper Island",
  "year": "1911"
}, {
  "name": "Catherine Vittrekwa (A)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Vittrekwa (B)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Catherine Williamson",
  "death_date": "Mar. 13, 1929",
  "school": "St. Mary’s",
  "year": "1929"
}, {
  "name": "Cathline Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cavell Carry Something (Running Antelope Band)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecelia Cameron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecil Briton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecil Taylor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecil Williams",
  "death_date": "Sep. 14, 1939",
  "school": "Christie",
  "year": "1939"
}, {
  "name": "Cecile Mattinas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecile Mcbeth Malloeuf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecile Prairie Chicken",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecile Taylor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecilia Catcheway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecilia Nepichat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecilia Noel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cecilia Quinae",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Celena Alexis",
  "death_date": "Mar. 02, 1977",
  "school": "Cariboo",
  "year": "1977"
}, {
  "name": "Celile Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Celina Thomas",
  "death_date": "ca. Mar. 1900",
  "school": "Kuper Island",
  "year": "1900"
}, {
  "name": "Celine (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Chantal Eugene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlemagne Damas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Carpenter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Cheese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Fireing Stoney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Fortin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Fournier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Grandbois",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Hunter (Fort Albany)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Hunter (Red Deer)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Morrisseau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Mountain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Ningishkung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Ombash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Shageze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charles Wenjack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Amos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Big Lake",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Bob",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Charlie Douglas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Many Times Going",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie McNab",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Mechangabo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Penahsewa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Staats",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlie Tobaccojuice",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Cheeo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Drynocke",
  "death_date": "ca. 1938",
  "school": "St. George’s",
  "year": "1938"
}, {
  "name": "Charlotte Endageezick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Mercredi (Cross Lake)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Mercredi (Holy Angels)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Sagutch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Sandy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charlotte Tangie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Charly Cooper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Chester Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christian Laboucan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christianna",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christie Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christina Martell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christina Pitt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Burnstick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Cooper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Dumont",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Fortin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Ginnwasbi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Harry",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Christine Jacob",
  "death_date": "Nov. 12, 1962",
  "school": "Kamloops (St. Louis)",
  "year": "1962"
}, {
  "name": "Christine Janvier (A)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Janvier (B)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Josephine Joy Joseph",
  "death_date": "Jun. 02, 1961",
  "school": "Kamloops (St. Louis)",
  "year": "1961"
}, {
  "name": "Christine Jules",
  "death_date": "Feb. 28, 1917",
  "school": "Kamloops (St. Louis)",
  "year": "1917"
}, {
  "name": "Christine Kaskaman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Redhead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Christine Roy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Chrysostôme Laviolette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clémence Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Claire Lariviere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clara Andrew",
  "death_date": "May. 20, 1935",
  "school": "Christie",
  "year": "1935"
}, {
  "name": "Clara Bigsky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clara Mae Rush",
  "death_date": "Mar. 12, 1966",
  "school": "St. Mary’s",
  "year": "1966"
}, {
  "name": "Clara Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clara Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clarence Gaston Anaskan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clarina Matthew",
  "death_date": "Sep. 16, 1936",
  "school": "Kamloops (St. Louis)",
  "year": "1936"
}, {
  "name": "Clarissa Drunken Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clementine Mcarthur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clements",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clifford Blackned",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clifford John Bearskin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clifford Swan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Clothilda Willie",
  "death_date": "ca. 1901-1902",
  "school": "Kuper Island",
  "year": "1902"
}, {
  "name": "Colin Bernard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Connell Memekisik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Conrad Ahenakew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cora Drugan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cosmas Ya-Epoutle",
  "death_date": "Aug. 25, 1891",
  "school": "Kuper Island",
  "year": "1891"
}, {
  "name": "Courtland Claus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Crane Medicine Crane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Crookedneck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cyprien Gaucher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cyprien Janvier Watchapez",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Cyril Edgar",
  "death_date": "ca. Oct. 1937",
  "school": "Coqualeetza",
  "year": "1937"
}, {
  "name": "Cyril Mussel",
  "death_date": "Oct. 04, 1946",
  "school": "Alberni",
  "year": "1946"
}, {
  "name": "Daisy Dodging Noras",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daisy Medicine Smoker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daisy Mikinak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dalton Silver",
  "death_date": "Jun. 13, 1941",
  "school": "Alberni",
  "year": "1941"
}, {
  "name": "Damien (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Damien Weasle Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dan Charlie",
  "death_date": "Jan. 01, 1936",
  "school": "St. George’s",
  "year": "1936"
}, {
  "name": "Dan Oka",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dan Skinaway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Bertie Fireman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Dersrochers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Dog",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Harry Billy",
  "death_date": "Jul. 28, 1928",
  "school": "St. Mary’s",
  "year": "1928"
}, {
  "name": "Daniel Idzozo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Jimigan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Kootenay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Masakeyash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Moise",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Naposh/Napash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daniel Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Daria Spatay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Allen Hance",
  "death_date": "Dec. 25, 1970",
  "school": "St. George’s",
  "year": "1970"
}, {
  "name": "David Bear Shirt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Cheesewahmnie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Etukitsininani",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Freddie Nahacappo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Harry Snowboy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Larocque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Laroque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Lightning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Menow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Moar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Neacappo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Rain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Redsky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Sauteaux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Swain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Tatizoyhema",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Thomas",
  "death_date": "Nov. 11, 1972",
  "school": "Alberni",
  "year": "1972"
}, {
  "name": "David Thomas Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "David Utchenayea",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Deborah Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Delia Dokum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Delia Mcintyre",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Delphina Theoqualt",
  "death_date": "Jan. 01, 1920",
  "school": "Kuper Island",
  "year": "1920"
}, {
  "name": "Delphine Anlgué",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Delvina Bellehumeur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Denial Michel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Denis Albert",
  "death_date": "Feb. 20, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Denis Skunk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Denise Boucher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Denise Menosa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dennis Dick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Desmond Greene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dianne Bourne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dick Standing Alone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dinah Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dolores George",
  "death_date": "Jun. 24, 1955",
  "school": "Christie",
  "year": "1955"
}, {
  "name": "Dolphus Kiyawasew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dolphus Lefthand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dolphus Stoney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Domistille Nepinak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Domitille Morissette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Donald Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Donald Miller",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Donald Shade",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Donalda Philip",
  "death_date": "Mar. 14, 1933",
  "school": "Kuper Island",
  "year": "1933"
}, {
  "name": "Donat Crow Shoe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Arcan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Benson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Gazon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Isaacs/Jacobs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Jane Houle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Jonas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dora Julien",
  "death_date": "Jan. 01, 1927",
  "school": "Lejac (Stuart Lake)",
  "year": "1927"
}, {
  "name": "Dora Noshkepy",
  "death_date": "Mar. 13, 1908",
  "school": "Ahousaht",
  "year": "1908"
}, {
  "name": "Dora Tana’I",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorcas Evelyn Cummisky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Doreen Wilson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Doris Acquin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Doris Carpenter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Doris Marjorie Starr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Doris McKay",
  "death_date": "Jun. 30, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Doris Studhorse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Ferries",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Herkimer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Red Gun",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Rose Strongarm",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Tangie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dorothy Williams",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Douglas Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Douglas Benson",
  "death_date": "Not known",
  "school": "St. Michael’s",
  "year": "Not known"
}, {
  "name": "Douglas Hall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Douglas Mcnabb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dudley Shilling",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Dummy Bad Boy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Duncan Sticks",
  "death_date": "Feb. 08, 1902",
  "school": "Cariboo",
  "year": "1902"
}, {
  "name": "Dwayne Jack",
  "death_date": "Feb. 16, 1981",
  "school": "Cariboo",
  "year": "1981"
}, {
  "name": "Earl Paul",
  "death_date": "Jun. 29, 1978",
  "school": "St. Mary’s",
  "year": "1978"
}, {
  "name": "Eddie Bob",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Eddie L’Hirondelle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eddie Paul",
  "death_date": "Nov. 02, 1973",
  "school": "St. George’s",
  "year": "1973"
}, {
  "name": "Edgar Basil",
  "death_date": "Aug. 01, 1909",
  "school": "Kuper Island",
  "year": "1909"
}, {
  "name": "Edgar Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edgar Calf Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edgar Mcrae",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edgar Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Carry Something",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Chaske",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Clause",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Cutter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Mike",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Miyestow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Prettyshield",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Rabbit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Redwood",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edith Turns Robes Over",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edmond Wibokamigad",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edna Bitternose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edna Mahinganess",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Arnold",
  "death_date": "Jun. 28, 1909",
  "school": "Ahousaht",
  "year": "1909"
}, {
  "name": "Edward Austin",
  "death_date": "ca. 1917-1920",
  "school": "Lejac (Stuart Lake)",
  "year": "1920"
}, {
  "name": "Edward Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Cassabalt James",
  "death_date": "Dec. 26, 1965",
  "school": "St. Mary’s",
  "year": "1965"
}, {
  "name": "Edward Draycott",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Edzéné Tcheli",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward F. Antoine",
  "death_date": "Jan. 01, 1946",
  "school": "Lejac (Stuart Lake)",
  "year": "1946"
}, {
  "name": "Edward Fiddler",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Kapeskang",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Lightfoot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Mcgarty Otakysy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Murdock",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Pooyar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Thompson",
  "death_date": "Jan. 01, 1946",
  "school": "Alberni",
  "year": "1946"
}, {
  "name": "Edward Wapanoose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Waukay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Whitecap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edward Willier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edwin Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Edwin Harwin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Effie Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eileen Bottle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eileen Joseph",
  "death_date": "Jan. 25, 1964",
  "school": "Kamloops (St. Louis)",
  "year": "1964"
}, {
  "name": "Eileen Standing Alone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eléonore Ekretcher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eleanor Hall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elie Caribou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elie Hunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elie Marquis Opisinon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elie Wabosons",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliezer Dadzene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elijah (Shingwauk)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elijah Staomer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eline Frenchie",
  "death_date": "Oct. 18, 1892",
  "school": "Kuper Island",
  "year": "1892"
}, {
  "name": "Elisa Boucher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elisa Meoignow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Abel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Aze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Durocher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Enare-tchor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Gooday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elise Indian",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Auger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Bird (Gordon’s Band)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Francis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Goodswimmer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Kaachehow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Keno",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Kitty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Louis",
  "death_date": "Jan. 01, 1902",
  "school": "Kuper Island",
  "year": "1902"
}, {
  "name": "Eliza Oseemeemas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Oshie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Page",
  "death_date": "Jun. 27, 1900",
  "school": "Kuper Island",
  "year": "1900"
}, {
  "name": "Eliza Rednose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Sealhunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Starr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eliza Thel’O",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Adam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Badger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Baiser",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Debosiga",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Drygeese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Etlenzo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Etsembo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Grayeye",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Iron Shirt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Kwatlatyi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Land",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth L’Hommecourt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Mahiganes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Mary Goodtrack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Menicoche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Papaseqwanape",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Patrick",
  "death_date": "Apr. 30, 1946",
  "school": "Lejac (Stuart Lake)",
  "year": "1946"
}, {
  "name": "Elizabeth Rat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Rose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Severight",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Smith",
  "death_date": "Jan. 01, 1937",
  "school": "Kuper Island",
  "year": "1937"
}, {
  "name": "Elizabeth Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elizabeth Watters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elize (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elize Ahseeneeseer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elize Peepahkeechew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ella Cooper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ella Lafford",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Ball",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Casimir",
  "death_date": "Apr. 23, 1908",
  "school": "Kuper Island",
  "year": "1908"
}, {
  "name": "Ellen Dorion",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Dreaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Hart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Mckenzie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellen Moses",
  "death_date": "ca. 1897",
  "school": "Kuper Island",
  "year": "1897"
}, {
  "name": "Ellen Toomah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellese Koadeth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ellie Rat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elliot Sampson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elmer Hardy",
  "death_date": "Feb. 29, 1928",
  "school": "Kuper Island",
  "year": "1928"
}, {
  "name": "Elmira Oh-Oo-Sis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elmirie Mirasty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eloysa Tromatay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elsie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elsie Blackbird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elsie Camsell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elsie Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elsie Ogemah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Elzear Trottier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emelie Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emil Howard",
  "death_date": "Not known",
  "school": "Ahousaht",
  "year": "Not known"
}, {
  "name": "Emile Anishinape",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Didgere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Dumas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Keith",
  "death_date": "Apr. 16, 1908",
  "school": "Kuper Island",
  "year": "1908"
}, {
  "name": "Emile Marion",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Morin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Sep",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emile Yellow Old Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emilia Windigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emilie Dazay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emilien Aitel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emilien Morin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Four Dollars",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Hill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Moustach",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Ojoogin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Peter",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Emily Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Sagicheway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emily Stanley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Beardy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Blackstar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Budding",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Cha",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Elton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Fireman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Higgins",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Huskey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Ledoux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Lesage",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Many Shots",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Muskegapoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Musus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Norman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Northwind",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Okanaisaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Stanley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Wells",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Emma Williams",
  "death_date": "Jan. 05, 1928",
  "school": "Kuper Island",
  "year": "1928"
}, {
  "name": "Emmanuel Lopes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eric Meham",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernest Bishop",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernest Fox",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernest Fox Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernest Halkett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernest Wolf Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernestine Boghin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernestine Corbiere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernestine Lefoin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ernie Paul Simon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Esau Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ester Tanger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Etenasia Harriet Sangfrere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Baldhead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Ben",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Bull-Back-Fat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Edwards",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Haldane",
  "death_date": "ca. 1913",
  "school": "Crosby Home for Girls",
  "year": "1913"
}, {
  "name": "Ethel Mcpherson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ethel Running Antelope",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Etienne Colombe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Etienne Harry",
  "death_date": "ca. July 1909",
  "school": "Kuper Island",
  "year": "1909"
}, {
  "name": "Etiennette Misen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eugenie Waychakunew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eulalie (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eulalie Veuillot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eunice (Carcross)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eunice Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Euphrasia Louis",
  "death_date": "Nov. 20, 1935",
  "school": "Lejac (Stuart Lake)",
  "year": "1935"
}, {
  "name": "Euphrosine Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eusèbe Jurannie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eusebe Crow Flag",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva C. Baptist",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Craty Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Francois",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva George",
  "death_date": "ca. 1944",
  "school": "St. Michael’s",
  "year": "1944"
}, {
  "name": "Eva Hall",
  "death_date": "May. 05, 1922",
  "school": "Kuper Island",
  "year": "1922"
}, {
  "name": "Eva Hoole",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Jane Lickers (Herkimer)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Perrish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Standing Ribbon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Eva Wapey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Evangeline Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Evelyn Boonus/Barnes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Evelyn Gordon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Evelyn Pocette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Evelyn Sharpe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Everest Alex George",
  "death_date": "ca. May 1940",
  "school": "Kuper Island",
  "year": "1940"
}, {
  "name": "Ewart Diffler",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Faith Pamela Gordon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny Grasshoper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny Hall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny Hall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny Matosess",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny Ran After",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fanny River Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Felix Antoine",
  "death_date": "ca. May 1892",
  "school": "Kuper Island",
  "year": "1892"
}, {
  "name": "Felix Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ferlin Southwind",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Firth Rowena",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fisher George",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Ahan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Bella Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Dobbs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Jane Tawapisim",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Pitwaniswin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flora Seekoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florastine Tramble",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Bastien",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Cawee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Cheechoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Delorme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Gordon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Hartie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Morgan",
  "death_date": "Jun. 26, 1941",
  "school": "Kamloops (St. Louis)",
  "year": "1941"
}, {
  "name": "Florence Nepinak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florence Weasel Fatt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florestine Cryer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Florestine Taylor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Flossie Rider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "François Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Françoise Billette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Françoise Peterson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frances Pigeon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Alec",
  "death_date": "Sep. 27, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Francis Allary",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Bertram Wilson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Black Forehead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Cheabies",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Chocan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Johnson",
  "death_date": "Jan. 01, 1924",
  "school": "St. Mary’s",
  "year": "1924"
}, {
  "name": "Francis Macauley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Maximin",
  "death_date": "Jan. 31, 1915",
  "school": "Kamloops (St. Louis)",
  "year": "1915"
}, {
  "name": "Francis Moses",
  "death_date": "Oct. 31, 1919",
  "school": "Kamloops (St. Louis)",
  "year": "1919"
}, {
  "name": "Francis Pitt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Soop",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Waddilove",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Watson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francis Webster",
  "death_date": "Feb. 21, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Francois Deneyozare",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francois Johnny",
  "death_date": "Jan. 13, 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Francois Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Francoise Louine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Buhgwahgenene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Burke",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Calf Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Ferdinand Blackhand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Francis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Grey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Hunting Hawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Johnny",
  "death_date": "Sep. 23, 1898",
  "school": "Kuper Island",
  "year": "1898"
}, {
  "name": "Frank Kimberly",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Mamaniwatum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Many Fingers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Nacot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Oshkpekeda",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Plaited Hair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Red Old Man",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Spaniel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Thomasson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frank Ubaldus",
  "death_date": "Not known",
  "school": "Ahousaht",
  "year": "Not known"
}, {
  "name": "Frank Wapiok",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Bone Rib Medicine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Callingbull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Kashananilowlgran",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Louine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Nahwahgezhic",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Sarcee Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Shanary",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Watt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Fred Young",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Freddie Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Freddy Bishop",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick James Charles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Jones",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Kesik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Lafond",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Lecamp",
  "death_date": "Nov. 19, 1962",
  "school": "Kamloops (St. Louis)",
  "year": "1962"
}, {
  "name": "Frederick Oshkapukeda",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Frederick Watchmaker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Beze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Carpenter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Crane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Masson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Mikkomusus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Poundmaker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gabriel Weasel Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gary Hopkins",
  "death_date": "May. 13, 1973",
  "school": "Alberni",
  "year": "1973"
}, {
  "name": "Gary James Hopkins",
  "death_date": "Mar. 31, 1981",
  "school": "Alberni",
  "year": "1981"
}, {
  "name": "Gary Ross",
  "death_date": "Sep. 05, 1962",
  "school": "Alberni",
  "year": "1962"
}, {
  "name": "Gaspard Woodenball",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Geneva Hunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Genevieve Half Leg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Genevieve Ninine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Augustine",
  "death_date": "Dec. 06, 1948",
  "school": "Lejac (Stuart Lake)",
  "year": "1948"
}, {
  "name": "George Bad Arm",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Ballandine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Baptist",
  "death_date": "ca. 1896-1897",
  "school": "Kuper Island",
  "year": "1897"
}, {
  "name": "George Big Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Cappin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Freddie George",
  "death_date": "Mar. 29, 1936",
  "school": "St. Augustine’s",
  "year": "1936"
}, {
  "name": "George Frog",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George George",
  "death_date": "Mar. 06, 1897",
  "school": "Kuper Island",
  "year": "1897"
}, {
  "name": "George Good Rider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Grover",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Johnson",
  "death_date": "Oct. 24, 1939",
  "school": "Christie",
  "year": "1939"
}, {
  "name": "George Kitchen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George L. Humchitt",
  "death_date": "Aug. 30, 1944",
  "school": "St. Michael’s",
  "year": "1944"
}, {
  "name": "George Longneck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Maningway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Mclundy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Michel",
  "death_date": "ca. July 1916",
  "school": "Kamloops (St. Louis)",
  "year": "1916"
}, {
  "name": "George Moses (Bishop)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Moses (Kuper Island)",
  "death_date": "ca. 1938",
  "school": "Kuper Island",
  "year": "1938"
}, {
  "name": "George Novoligak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Patrick Samkies",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Petel",
  "death_date": "Not known",
  "school": "Kamloops (St. Louis)",
  "year": "Not known"
}, {
  "name": "George Purdaby",
  "death_date": "Jan. 01, 1946",
  "school": "Kamloops (St. Louis)",
  "year": "1946"
}, {
  "name": "George Quisot",
  "death_date": "Jan. 28, 1906",
  "school": "Ahousaht",
  "year": "1906"
}, {
  "name": "George Roberts",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Robillard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Scout",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Spear Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "George Spuzzum",
  "death_date": "Jan. 31, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "George Weasle Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Georgie Horasi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Georgina Aratzonne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Georgina House",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gerald Charles Badger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gerald Kejick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gerald Trottier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gerald Wilson",
  "death_date": "Jul. 09, 1970",
  "school": "Alberni",
  "year": "1970"
}, {
  "name": "Geraldine Patricia Nanaquawetung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gertie Red Old Man",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gertrude Ananas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gertrude Crow Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gertrude De Laroque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gertrude James",
  "death_date": "Jan. 01, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Gilbert Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gilbert Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gilbert Gardypie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gilbert Mattinas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gladys Chapman",
  "death_date": "Apr. 29, 1931",
  "school": "Kamloops (St. Louis)",
  "year": "1931"
}, {
  "name": "Gladys King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gladys Staats",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gladys Worm",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gloria White Cow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gordon Tobias",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gordon Ladouceur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gordon Lulua",
  "death_date": "Jul. 04, 1969",
  "school": "Cariboo",
  "year": "1969"
}, {
  "name": "Gordon One Spot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Grace Chief Moon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Grace Sophie Eninew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Graham Hunting Hawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Grant Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Gretchen Joshua",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Grey",
  "death_date": "Jan. 01, 1921",
  "school": "Elizabeth Long Memorial Home for Girls",
  "year": "1921"
}, {
  "name": "Hélène Bruno",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hélène Gooday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hélène Takaro",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hager Charles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hanna Grant",
  "death_date": "May. 08, 1922",
  "school": "Elizabeth Long Memorial Home for Girls",
  "year": "1922"
}, {
  "name": "Hannah [Coq]",
  "death_date": "Oct. 23, 1898",
  "school": "Coqualeetza",
  "year": "1898"
}, {
  "name": "Hannah M. Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hannah Sittachmck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hannah Weezhoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hannah Wilson",
  "death_date": "May. 28, 1901",
  "school": "Coqualeetza",
  "year": "1901"
}, {
  "name": "Harimone Patinande",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harold Araneda",
  "death_date": "Feb. 14, 1924",
  "school": "Kuper Island",
  "year": "1924"
}, {
  "name": "Harold Quinney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harrie Traill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet (Hay River)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Bittern Nose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Hattie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Jessie Sealhunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Mistacheshuk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Munro",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriet Pekoday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriett Candace",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriett Ottereyes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriette Wadsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harriot Panbrun",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harris Whitecap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Bains",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Frederick James",
  "death_date": "Dec. 26, 1965",
  "school": "St. Mary’s",
  "year": "1965"
}, {
  "name": "Harry Gilbert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry James",
  "death_date": "Feb. 04, 1966",
  "school": "St. Mary’s",
  "year": "1966"
}, {
  "name": "Harry Johnny",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Harry Jordan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Kakaychewan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Lapatac",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Late",
  "death_date": "May. 02, 1903",
  "school": "Coqualeetza",
  "year": "1903"
}, {
  "name": "Harry Lemilese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Mintuck Mancheese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry O’Kanape",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Patrick",
  "death_date": "Jan. 01, 1963",
  "school": "Cariboo",
  "year": "1963"
}, {
  "name": "Harry Spence",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Stockin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harry Wesley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harvey Cheabies",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harvey Pinesse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Harvey Wilson Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hattie Tryudall",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hector A. Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen A. Oldpan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Betty Osborne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Chief Mountain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Gull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Kemp[]",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen May Seneca",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Morrison",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helen Spring Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helene Eskamikapiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helene Manitowash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Helene Naytowohow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Heli Neyabiskapeweyen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henri Atchenum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henri Piché",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henrietta Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henriette Andy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henriette Myopa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henriette Nanotch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henriette Oliver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry [Sukkumun]",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Achanesa[]ctouh",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Andrew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Cheesman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Chuman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Johnny",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Henry Kechego",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Lulu",
  "death_date": "Not known",
  "school": "Kamloops (St. Louis)",
  "year": "Not known"
}, {
  "name": "Henry Mamahtwew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Marsden",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Matosess",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Nepeneskum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Norest Katism",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Peeteetuce",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Small Leg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Swanson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Henry Willie",
  "death_date": "Aug. 25, 1917",
  "school": "Kuper Island",
  "year": "1917"
}, {
  "name": "Herb Robert Green",
  "death_date": "Jan. 01, 1951",
  "school": "Alberni",
  "year": "1951"
}, {
  "name": "Herbert Gabourie",
  "death_date": "Dec. 29, 1898",
  "school": "Kuper Island",
  "year": "1898"
}, {
  "name": "Herbert Mountain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Herbert Redwing",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Herman Edward Kiyawasew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Herman Stewart-Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hermas Piche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hilda Jeffreys",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hilda Wilson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hilda Wuttunee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Howard Greenbird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hubert Delorme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hugh Coming Singing",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hugh King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hugh King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hughie Johnson",
  "death_date": "Jan. 01, 1957",
  "school": "Lower Post",
  "year": "1957"
}, {
  "name": "Hyla Crate",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Hyla Moose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Curley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Inlsey",
  "death_date": "Jun. 22, 1901",
  "school": "Coqualeetza",
  "year": "1901"
}, {
  "name": "Ida Kakiwash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Kiiawisens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Mary Caroline Mickey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ida Tom",
  "death_date": "Jun. 18, 1901",
  "school": "Kuper Island",
  "year": "1901"
}, {
  "name": "Illa Frogg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Imelda Edwards",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ina Nolan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Indian Girl No. 237",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Inez Wilson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Bertha Andrew",
  "death_date": "Sep. 23, 1935",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1935"
}, {
  "name": "Irene Daniels",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Innes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Johnny",
  "death_date": "Jan. 01, 1946",
  "school": "Cariboo",
  "year": "1946"
}, {
  "name": "Irene Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Sabourin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Stoney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Irene Teresa Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Kezhihgobinis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Pain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Peters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Shebahgezhis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaac Thompson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isabelle Elénaze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isabelle Huppe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isabelle Inzel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isabelle Laviolette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isabelle Ward",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isadore (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isadore Bescaye",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaiah Beauvais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaiah Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isaiah Powderface",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isbester Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isiah Bittern",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore (Fort Providence)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore Black",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore Brule",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore Ellize",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore Mercredi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isidore Trottier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Isla Little",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ivan John Dreaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ivan Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ivan Wilson",
  "death_date": "Nov. 10, 1973",
  "school": "Alberni",
  "year": "1973"
}, {
  "name": "Ivy Bull Shield",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "J Darazel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "J. Hind Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack B",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Bad Name",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Big Prairie Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Elanik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Good Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Kelly",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Linklater",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Tairona",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jack Williams",
  "death_date": "Nov. 19, 1905",
  "school": "Alberni",
  "year": "1905"
}, {
  "name": "Jacket Kaskaman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jackie Archie James",
  "death_date": "Not known",
  "school": "St. Michael’s",
  "year": "Not known"
}, {
  "name": "Jackie Paul",
  "death_date": "ca. Jan. 1946",
  "school": "Cariboo",
  "year": "1946"
}, {
  "name": "Jacob Curicteur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jacob Douglas",
  "death_date": "Not known",
  "school": "St. George’s",
  "year": "Not known"
}, {
  "name": "Jacob Grey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jacob Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jacques Issinaiaze Black Man",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Albert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Campbell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Crain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Crow Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Crow Shield",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Crowfoot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Donald Noxsana",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Elmore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Frank",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Hobson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Iron Shirt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Johnston",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Kahkeetookewtapiyou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Laugher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Louie George",
  "death_date": "May. 28, 1937",
  "school": "Christie",
  "year": "1937"
}, {
  "name": "James Mchallisey",
  "death_date": "Sep. 18, 1935",
  "school": "St. George’s",
  "year": "1935"
}, {
  "name": "James Muswaggan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Noksana",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Obotossaway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Okemow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "James Underchief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jamie Many Times Going",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Calf Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Cross Arms",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Fiddler",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Kitchejohn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Many Shields",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Ogwane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Parker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Salt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jane Spencer",
  "death_date": "May. 30, 1908",
  "school": "Crosby Home for Girls",
  "year": "1908"
}, {
  "name": "Jane Warner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Janet Adams",
  "death_date": "Dec. 31, 1931",
  "school": "St. George’s",
  "year": "1931"
}, {
  "name": "Janet Moar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Janet Moose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Janet Tait",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jannet Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jasper Mitchell",
  "death_date": "Mar. 18, 1924",
  "school": "Kuper Island",
  "year": "1924"
}, {
  "name": "Jean (Fort Providence)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Baptiste Blackbird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Baptiste Hunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Baptiste Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Jacques Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean K-Ea",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Lady",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Marie Sepp",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean Viviers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean-Baptiste Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean-Baptiste Whitebear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeanette Hume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jean-Marie Gazayoue",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeanne D’arc Naurayi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeanne Marie Little Crane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeannen Joe",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Jeannette Posine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeannie Kownirk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jeannie Lafond",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jemmy Cris",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jennie Fox",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jennie Kostachin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jennie Robertson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jennie Toomah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jennie Twobear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jenny Hassen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jenny Maracle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerimiah Hoole",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerome Andrew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerome Callingbull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerome Kitchikeken",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerome Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerome Tsootzani",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerry Ballentyne",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jerry Napope",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jesephine Louie",
  "death_date": "Sep. 03, 1945",
  "school": "Kamloops (St. Louis)",
  "year": "1945"
}, {
  "name": "Jesse Cusick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jessie Chamberlain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jessie Egodgin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jessie Lucas",
  "death_date": "Jan. 01, 1940",
  "school": "Christie",
  "year": "1940"
}, {
  "name": "Jessie Luggi",
  "death_date": "Not known",
  "school": "Lejac (Stuart Lake)",
  "year": "Not known"
}, {
  "name": "Jessie Mary James",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jessie Ogoogin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jessie Wapoohoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jim (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jim Baker",
  "death_date": "Apr. 29, 1927",
  "school": "St. George’s",
  "year": "1927"
}, {
  "name": "Jim Baptist",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Jim Black Face",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jim Flim",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jim Only Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmie Benaouni",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Adam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Bastan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Colin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Fortin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Murphy",
  "death_date": "ca. Feb. 1948",
  "school": "Cariboo",
  "year": "1948"
}, {
  "name": "Jimmy Piwapiskus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Robillard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy See See Quon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jimmy Touchie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joachin Coutepatte",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joan Eugene",
  "death_date": "Nov. 01, 1942",
  "school": "Cariboo",
  "year": "1942"
}, {
  "name": "Joan Manson",
  "death_date": "Jan. 03, 1952",
  "school": "Christie",
  "year": "1952"
}, {
  "name": "Joan Mikigok",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joanne Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Job Andrew Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Job. A. Lepatac",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joe Charley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joe Edwards",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Joe Manipan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joe Moses",
  "death_date": "ca. Jan. 1937",
  "school": "St. Augustine’s",
  "year": "1937"
}, {
  "name": "Joe Peyetchew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joe Wet’Cade",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John (Sarcee Reserve)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Abraham",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Alexander",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Baptist Jim",
  "death_date": "Mar. 01, 1909",
  "school": "Kuper Island",
  "year": "1909"
}, {
  "name": "John Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Bone Rib Medicine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Bright Iron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Cameron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Canadian",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Canadien",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Charles Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Chief Moon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Eninewis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Faval",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Frederick Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Gwok",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Harper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Hastings",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Jacknife",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Jawbone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Keeper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Kennedy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Kioki",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Knott",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Koodlarluk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Kumawapumeko",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Kunawteewat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Kuskageezick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Laurent",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Lazarus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Lecamp",
  "death_date": "Nov. 19, 1962",
  "school": "Kamloops (St. Louis)",
  "year": "1962"
}, {
  "name": "John Levens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Lucas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Merasty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Moosomin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Nashkawa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Oganape",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Oldpan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Paishk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Pascal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Peel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Peter Memekwesiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Poor Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Rayfiel Peters",
  "death_date": "Not known",
  "school": "St. Mary’s",
  "year": "Not known"
}, {
  "name": "John Rodd",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Saganash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Sailors",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Shawun Nebqua Petung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Sidney Gardypie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Sophie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Still",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Stone Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Suzie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Tchowis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Tevorna",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Th. Stand at Door",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Thomas Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Wabash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Wahsagahpun",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Wapoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Watsare Aze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "John Wilfred Snowshoe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnnie Matchap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Darrosaze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Dry-Meat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Jack",
  "death_date": "Feb. 07, 1898",
  "school": "Kuper Island",
  "year": "1898"
}, {
  "name": "Johnny Kahkeetoonewtayyou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Kiyawasew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Lamb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Michel",
  "death_date": "Jan. 01, 1937",
  "school": "Lejac (Stuart Lake)",
  "year": "1937"
}, {
  "name": "Johnny Oktayuk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Peters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Puskeum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Sanderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Thompson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnny Tromatay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnson Large",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Johnston Coté",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jonah Ebbstone",
  "death_date": "Jul. 14, 1909",
  "school": "Coqualeetza",
  "year": "1909"
}, {
  "name": "Jonas Samson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jonathan Martel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jos Big Prairie Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jos. Many Shots",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph (Ontario)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph [Laflsur]",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Alex Cutter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Andrew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Basil",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Joseph Beboning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Bigear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Blackhawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Bobonning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Burnthead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Cains",
  "death_date": "ca. 1892-1893",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1893"
}, {
  "name": "Joseph Cameron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Chappiere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Charles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Chief Body",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Constant",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Drunken Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Edgar Hodgson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Georgeskish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Hope",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Hope",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Ignace",
  "death_date": "Feb. 16, 1937",
  "school": "Christie",
  "year": "1937"
}, {
  "name": "Joseph Jacob",
  "death_date": "ca. July 1922",
  "school": "Kuper Island",
  "year": "1922"
}, {
  "name": "Joseph Kisikisewiskan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Lands",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Lefthand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Louison",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Ma-Gwa-Sew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Metat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Myo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Nali",
  "death_date": "Sep. 05, 1946",
  "school": "St. George’s",
  "year": "1946"
}, {
  "name": "Joseph Neigabiskapewen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Netawegabo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Neyabiskapewayen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Oig",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Pasquats",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Poitois",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Sagutch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Sakaluk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Sayees",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Spence",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Stamp",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Star",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Storm",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Thellattene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Thibault",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Thunderbear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Vandale",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Vittrekwa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Watchekam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph William Commanda",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joseph Wolfe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine A. Moise",
  "death_date": "ca. 1943",
  "school": "Lejac (Stuart Lake)",
  "year": "1943"
}, {
  "name": "Josephine Arcand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Big Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Canepotato",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Chookomoolin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Dumont",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Hard Collar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Harper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Jacob",
  "death_date": "Jan. 30, 1895",
  "school": "Kuper Island",
  "year": "1895"
}, {
  "name": "Josephine Kanipitetew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Little Leaf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Mckay",
  "death_date": "Dec. 04, 1918",
  "school": "Coqualeetza",
  "year": "1918"
}, {
  "name": "Josephine Napesis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Norris",
  "death_date": "ca. 1897",
  "school": "Kuper Island",
  "year": "1897"
}, {
  "name": "Josephine Sampson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Seymour",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Shebakwan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephine Standing Buffalo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josephte Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josette Couillonneur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Apow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Ckeeskomash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Jacob",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Jones",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joshua Saskatchewan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josiah Constant",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josie Fox",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josie Plain Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Josius Taylor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jospeh Louis Richard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jospeh Maynard [Leonard] Toulouse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joyce Bluebird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Joyce Delores Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jules Couillonneur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Jules Tseleskampten",
  "death_date": "ca. Oct. 1895",
  "school": "Kuper Island",
  "year": "1895"
}, {
  "name": "Julia (Onion Lake)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Boyer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Breland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Crow Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Detchen Dzor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Jacobs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Masug",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Three Stars",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julia Turkey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julianna Piché",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julianna Spring Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julie Bunn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julie Fantastique",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julie Natakam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julien Bighetty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julienne Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Julienne Sharon Dennis",
  "death_date": "Not known",
  "school": "Kamloops (St. Louis)",
  "year": "Not known"
}, {
  "name": "Juliet Chekachie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Juliette Boudreault",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Juliette Rabbitskin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Juliette Wabigijig",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Justine Gladu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Justine Jacknife",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Justine Kitikaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Justine Peekeekoot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kate Blackice",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kate Mcgibbon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kate Sackhaywaycappo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Katherine Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kathleen Cranebear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kathleen Edna Louttit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kathleen Kabestra",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kathleen Mitchel",
  "death_date": "ca. May 1937",
  "school": "Kamloops (St. Louis)",
  "year": "1937"
}, {
  "name": "Katie Manulth",
  "death_date": "Aug. 10, 1910",
  "school": "Ahousaht",
  "year": "1910"
}, {
  "name": "Katie Taylor",
  "death_date": "Dec. 12, 1908",
  "school": "Alberni",
  "year": "1908"
}, {
  "name": "Katy Traill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kenneth Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kenneth C. Narcisse",
  "death_date": "Oct. 14, 1960",
  "school": "Cariboo",
  "year": "1960"
}, {
  "name": "Kenneth Lloyd Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kenneth Mallaway",
  "death_date": "Not known",
  "school": "St. Mary’s",
  "year": "Not known"
}, {
  "name": "Kenneth Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kipling Antoinette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kissememow Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kitchener Jamieson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kitty Coté",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Kukinthlikreth",
  "death_date": "Nov. 14, 1949",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1949"
}, {
  "name": "Laura Awakwad",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Laura Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Laura Lagituk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Laura Pascal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Laurence Hall",
  "death_date": "Jul. 01, 1935",
  "school": "Coqualeetza",
  "year": "1935"
}, {
  "name": "Laurie Dick",
  "death_date": "Jan. 01, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Lavina Beardy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawere Janviern",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Benjamin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Buszouski",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Clear Sky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Ledoux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Mistaken Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Pany Ermineskin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Silverquill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Stephen Williams",
  "death_date": "Apr. 15, 1966",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1966"
}, {
  "name": "Lawrence Swain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawrence Thompson",
  "death_date": "Jan. 01, 1937",
  "school": "Christie",
  "year": "1937"
}, {
  "name": "Lawrence W. Fatt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lawson Musouesh Kodawa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lazare Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lazarus Charles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lazarus Gord Prairie Chicken",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leila Tomigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lena (St. Mary’s Mission)",
  "death_date": "Not known",
  "school": "St. Mary’s",
  "year": "Not known"
}, {
  "name": "Lena Alexander",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lena Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lena Lord",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lena Osawabine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lena Ruben",
  "death_date": "Jan. 01, 1919",
  "school": "Kuper Island",
  "year": "1919"
}, {
  "name": "Leo Crowchief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Kicknosway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Larocque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Pipe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Saulteux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leo Sleeping Wolf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leon Abraham",
  "death_date": "ca. 1917-1920",
  "school": "Lejac (Stuart Lake)",
  "year": "1920"
}, {
  "name": "Leon Gunn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leon Lalonde",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leon Mongrand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leon Run Rabbit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leonard Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leonard Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leonard Julian",
  "death_date": "May. 18, 1935",
  "school": "St. Mary’s",
  "year": "1935"
}, {
  "name": "Leonard Major",
  "death_date": "Sep. 27, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Leonard Piché",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Les Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leslie Keith Charlie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Leslie Lewis",
  "death_date": "Sep. 23, 1935",
  "school": "Kamloops (St. Louis)",
  "year": "1935"
}, {
  "name": "Leta Powderface",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Levi Harper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Libia (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lilias Munro",
  "death_date": "Sep. 02, 1935",
  "school": "St. George’s",
  "year": "1935"
}, {
  "name": "Lillian Brass",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lillian Fourhorse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lillian Skipper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lillian Smoker",
  "death_date": "Nov. 12, 1935",
  "school": "St. George’s",
  "year": "1935"
}, {
  "name": "Lillian VanEvery",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lillie Walker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lilly Leo Charlie",
  "death_date": "Oct. 16, 1936",
  "school": "Kuper Island",
  "year": "1936"
}, {
  "name": "Lilly Mcgarty Otakysy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily Chief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily Nicholas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily Peal Smith",
  "death_date": "Dec. 03, 1945",
  "school": "Alberni",
  "year": "1945"
}, {
  "name": "Lily Rednose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily Shot Both Sides",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lily/Lillie Rupert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lina Hironcelle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Linda May Cholo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Linus Kinikens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lisa Enaxch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Liza Etlonzo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Liza Farguson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizette Fiddler",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Boyer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Johnny",
  "death_date": "Mar. 27, 1924",
  "school": "Kuper Island",
  "year": "1924"
}, {
  "name": "Lizzie Joseph Edward",
  "death_date": "Jun. 06, 1935",
  "school": "Kuper Island",
  "year": "1935"
}, {
  "name": "Lizzie Mackland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Many Horses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Mongoose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lizzie Neepineskum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lloyd Leon",
  "death_date": "Jan. 06, 1936",
  "school": "St. Mary’s",
  "year": "1936"
}, {
  "name": "Llwellyn Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lottie Ann McCorrester",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lonnie Bears Direction",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lorena Thomas",
  "death_date": "Nov. 24, 1944",
  "school": "Christie",
  "year": "1944"
}, {
  "name": "Loretta Norma Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Loretta Sero",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lorne Big Snake",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lorne Ogemah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis (Pine Creek)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis [Dine] Masakegon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Bastien",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Bellegarde",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Betcheldekdhi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Cameron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Kotchiles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Lost",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Naas",
  "death_date": "Apr. 30, 1904",
  "school": "Coqualeetza",
  "year": "1904"
}, {
  "name": "Louis Morris Minwahsin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis P. Johnson",
  "death_date": "ca. May 1942",
  "school": "Cariboo",
  "year": "1942"
}, {
  "name": "Louis Strong",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Takaro",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Tobie Piché",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louis Willier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa August George",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Chicken",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Leween",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Pascal (All Saints)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Pascal (Loucheau Band)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Seeseequasis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Steinhauer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louisa Williams",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Louisa Youngchief",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Freeman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Gras de Rat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Isaac",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Lost",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Mountain Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Nancy Wakwan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Oshkabewicane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Pryekwaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Sayer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Seymour",
  "death_date": "May. 26, 1936",
  "school": "Kamloops (St. Louis)",
  "year": "1936"
}, {
  "name": "Louise Wawashkish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Louise Weasel Tail",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucia Charlougon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucia Peaychew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucie Bruneau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucie Sagutch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucie Semantha",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucille O’Cheek",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucine Whimpin",
  "death_date": "Mar. 09, 1935",
  "school": "Kamloops (St. Louis)",
  "year": "1935"
}, {
  "name": "Lucy Andrews",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Arabene",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Clay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Gordon",
  "death_date": "ca. Jan. 1933",
  "school": "St. Michael’s",
  "year": "1933"
}, {
  "name": "Lucy Kezhekobsuse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Meguanawap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy O’Sheam",
  "death_date": "Jun. 29, 1910",
  "school": "Kuper Island",
  "year": "1910"
}, {
  "name": "Lucy Pekoday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Peter Norris",
  "death_date": "Jan. 01, 1920",
  "school": "Kuper Island",
  "year": "1920"
}, {
  "name": "Lucy Rosy Dan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Saw Hau Poh Kayo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Tsell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lucy Tukluk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lydia Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lydia Whitehead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Lynda Mcpherson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M. Agnes Garson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M. E. Kamkawekew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M. Madeleine Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M. Olive Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M. Therese Whitecap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "M.A. Allary",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Camsell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Crane Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Houle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Irma Cyr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Joyce Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Kiyawasew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Mandomin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Moses",
  "death_date": "Oct. 31, 1924",
  "school": "Kuper Island",
  "year": "1924"
}, {
  "name": "Mabel Njootli",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Paull",
  "death_date": "Not known",
  "school": "St. Mary’s",
  "year": "Not known"
}, {
  "name": "Mabel Skeid",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Van Gorder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Walker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mabel Wood",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mable Black Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madaline Monday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine (Onion Lake)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Benaouni",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Chalifoux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Ctlak’Ale",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Eskamikapiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Jimmy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Kodhnose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Monias",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Pr[]Tcho",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Shanary",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeleine Wolf Tail",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeline Colin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeline Giroux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeline Moonais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Madeline Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Magdalen Beaudry",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Magdalen Calf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Bob",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Maggie Cromarty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Curister",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Dorion",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Fraser",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Laroque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Lua",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Maminowata",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Martin",
  "death_date": "Jan. 06, 1944",
  "school": "St. George’s",
  "year": "1944"
}, {
  "name": "Maggie Mcdonald",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Mucheasakack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Sashawaskum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Torango",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Wanakamik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maggie Whittney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Magloire Billette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maglore Whitstone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maisie Shaw",
  "death_date": "Dec. 26, 1946",
  "school": "Alberni",
  "year": "1946"
}, {
  "name": "Malcolm Auger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Malcolm Joseph Auger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marcel Awikotsace",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marceline Monians",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marg Agasuijlakan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marg Shekabao",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Andrew",
  "death_date": "ca. Mar. 1944",
  "school": "Lejac (Stuart Lake)",
  "year": "1944"
}, {
  "name": "Margaret Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Bruce",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Campbell Mcswain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Edjeregon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Emery",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Fox",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Indushozozogeegish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Jane Bee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Kesick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Le Mack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Lickers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Louis",
  "death_date": "Dec. 30, 1907",
  "school": "Kuper Island",
  "year": "1907"
}, {
  "name": "Margaret M. Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Many Poor Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Maracle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Muckaque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Nancy Venn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Pard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Peetawekijick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Primeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Sawaypayiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Singebis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret St. Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Margaret Williams",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Assassayo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Collins",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Darazele",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Ducharme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Fallardeau",
  "death_date": "Dec. 10, 1900",
  "school": "Kamloops (St. Louis)",
  "year": "1900"
}, {
  "name": "Marguerite Lincleter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marguerite Moose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Evans",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria J. Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Kaspwat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Kruger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Lathlin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Mclean",
  "death_date": "Oct. 28, 1924",
  "school": "Kuper Island",
  "year": "1924"
}, {
  "name": "Maria Murdock",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Pepin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Susie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maria Trachi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie A. Bell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Adeline Piche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Albert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Albertine Robillard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Alexandrine Opikokew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Anne Ratfat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Aquasis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Bighetty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Caroline Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Celestine Tourangeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Charlotte",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Christine Dawatzare",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Diaume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Elizabeth Fantastique",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Elizabeth Seekoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Elizabeth Yadzaray",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Emile Dustyhorn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Estelle Wolf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Eulalie Piwapsiskus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Eustella Piche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Gilberte Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Kakitomustus ‘Leduc’",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Labelle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Lalonde",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Acoose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Gazon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Hainsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Laviolette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Piché",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Louise Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Lucie Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Madeleine Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Madeleine Dénéyoussé",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Madeleine Fiza",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Madeleine Laferty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Natakam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Oh-Oo-Sis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Reine Scatch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Rose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Rose Iasens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Rose Sabourin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Sabourin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Saké",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Seepeeqascan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Suzanne Opikokew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Thérèse Bob",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Theopholie",
  "death_date": "Jan. 01, 1935",
  "school": "Lejac (Stuart Lake)",
  "year": "1935"
}, {
  "name": "Marie Therese Door",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Thorne",
  "death_date": "Dec. 02, 1950",
  "school": "Kuper Island",
  "year": "1950"
}, {
  "name": "Marie Tootoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Tripderoche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Ulla",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Virginie Quinnie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie Yadzaray",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie-Adele Adziu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie-Adele Dominque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marie-Rose Dorrossage",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marion Land",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marjorie Hind Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mark Wah Pe Ka Ni Waup",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marry Kechege",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marsha Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martel Lenaigre",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Auger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha G. Sukedjeweskang",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Kashkesh",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha M.",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Mark",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Margaret Kunnezzi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Natsiapik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Phillip",
  "death_date": "May. 23, 1934",
  "school": "Kuper Island",
  "year": "1934"
}, {
  "name": "Martha Rivers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Root",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martha Scott",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martial Siwap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martial Tawepesim",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martin Johnny",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martin Paskweyak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martin Souliere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martin Sweeps Toward The Fire",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Martina Small Legs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Marvin Jeff",
  "death_date": "Nov. 26, 1967",
  "school": "Cariboo",
  "year": "1967"
}, {
  "name": "Mary A. Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Adela Settee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Agatha Windigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Agnes Houle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Agnes Johnston",
  "death_date": "ca. Jan. 1907",
  "school": "Kuper Island",
  "year": "1907"
}, {
  "name": "Mary Agnes Ward",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Alma Levi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Andrew",
  "death_date": "ca. 1891-1892",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1892"
}, {
  "name": "Mary Ann Black",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Delorme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Fletcher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann François",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Job",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Robinson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Samson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Siwap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ann Suzan Clara Ottereyes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Anne Agathe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Anne Greenland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Anne Sanecko",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Anne Soulle",
  "death_date": "Dec. 24, 1957",
  "school": "Kamloops (St. Louis)",
  "year": "1957"
}, {
  "name": "Mary Antoinette Pascal",
  "death_date": "Jan. 21, 1950",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1950"
}, {
  "name": "Mary Baptiste",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Barnes",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Bertha Eva Lepiné",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Blanchard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Blue Wings",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Bob",
  "death_date": "Feb. 14, 1937",
  "school": "Alberni",
  "year": "1937"
}, {
  "name": "Mary Bone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Buckskin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Camsell",
  "death_date": "Jan. 01, 1936",
  "school": "Coqualeetza",
  "year": "1936"
}, {
  "name": "Mary Captain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Charlette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Cheebotobie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Clair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Clarke",
  "death_date": "Jan. 01, 1927",
  "school": "St. George’s",
  "year": "1927"
}, {
  "name": "Mary Custer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Dénéru",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary D’Allieboust",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Delorme",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Dettanekease",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Dixon (Cross Lake)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Dixon (Morley)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Elaine George",
  "death_date": "Oct. 05, 1964",
  "school": "Alberni",
  "year": "1964"
}, {
  "name": "Mary Elliot",
  "death_date": "Not known",
  "school": "Elizabeth Long Memorial Home for Girls",
  "year": "Not known"
}, {
  "name": "Mary Eva Iron Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary F Keewatincappo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Fighting The Battle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Francois",
  "death_date": "May. 13, 1937",
  "school": "Kamloops (St. Louis)",
  "year": "1937"
}, {
  "name": "Mary Gehue",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Ginnish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Grace Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Hilda Elizabeth Bigstone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Brown",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Indian",
  "death_date": "Feb. 14, 1907",
  "school": "St. Mary’s",
  "year": "1907"
}, {
  "name": "Mary Jane Mitchel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Rednose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jane Sparvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary JaneYahyahyacum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Josephine Daniels",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Josie Siah",
  "death_date": "Sep. 03, 1922",
  "school": "Kuper Island",
  "year": "1922"
}, {
  "name": "Mary Judith Calf Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Jules",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Kadah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Kirkness",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Kumapawesit/Kumapowesit/Rumapawesit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Laurent",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Lefthand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Lightning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Louise Oshie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Louise Sagassige",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Lucy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Lucy Leather",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Madeleine Bernard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Major",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Mandomin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Manossa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Marsden",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Martha Iron Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Medweiash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Mountain Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Napeneskum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Netathli",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary P[]Batte",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Petawayway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Petuhwepejhik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Pokiak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Quackegesick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Rabbit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Rose Arcand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Rose Was Getting Up",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Semo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Sharphead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Shot Both Sides",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Spider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Stella Alook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Strong",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Suzie Hoof",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Swallow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Taylor",
  "death_date": "Oct. 01, 1908",
  "school": "Alberni",
  "year": "1908"
}, {
  "name": "Mary Tharé",
  "death_date": "ca. 1891-1892",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1892"
}, {
  "name": "Mary Tobico",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Toney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Tookuluak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Twain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Udzi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Vincent",
  "death_date": "Aug. 10, 1948",
  "school": "Christie",
  "year": "1948"
}, {
  "name": "Mary Viviers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Wadsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Williams",
  "death_date": "Jun. 30, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Mary Yellowlodge",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary Yvonne Beaver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maryann Many Fingers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary-Ann Skipper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maryanne Wesley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary-Jane Kitchen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary-Jane Tawapisim",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mary-Virginia King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Masie Bella Whetford",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Matheu Lackawe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mathewson Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mathieu Kamascatishishit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mathilda Large",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Matilda Bisaillon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Matilda Colin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Matilda David",
  "death_date": "Feb. 24, 1945",
  "school": "Lejac (Stuart Lake)",
  "year": "1945"
}, {
  "name": "Matthew Mckenzie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Matthew Two Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maud Jackson",
  "death_date": "ca. Nov. 1908",
  "school": "Alberni",
  "year": "1908"
}, {
  "name": "Maud Tapewaywaypenasick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maud Waposewyan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maud Wibokamigad",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maureen Mary Grace Bob",
  "death_date": "Jun. 30, 1963",
  "school": "St. George’s",
  "year": "1963"
}, {
  "name": "Maurice Frog Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maurice Lesage",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maurice Nicholas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maurice Young",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Maxine King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "May Harris",
  "death_date": "Mar. 04, 1910",
  "school": "Ahousaht",
  "year": "1910"
}, {
  "name": "May Nysok",
  "death_date": "Apr. 09, 1932",
  "school": "St. Michael’s",
  "year": "1932"
}, {
  "name": "Mcgahey (Mount Elgin)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Melanie Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Melanie Masson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Melanie Quaw",
  "death_date": "Jun. 04, 1924",
  "school": "Lejac (Stuart Lake)",
  "year": "1924"
}, {
  "name": "Melanie Walker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Melvin Reindeer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Meni Konakipi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Merilda Napess",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Merle Paul",
  "death_date": "Aug. 20, 1946",
  "school": "St. George’s",
  "year": "1946"
}, {
  "name": "Michael Antoine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Charley Macheegabow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Gerald Rabbitcarrier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Jean Sapay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Maskatepwist",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Peter Perswain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Prince",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michael Windigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Micheal C. Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michel Akiwenzie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michel Kanamatchew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michel Lamb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michel Matinas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Michele Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mike Calf Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mike Crow Spreading His Wings",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mike Oombash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mildred Edna Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mildred James",
  "death_date": "Oct. 11, 1935",
  "school": "Kuper Island",
  "year": "1935"
}, {
  "name": "Milly Kamamatchew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mina Nero",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Minnie Boucher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Minnie Natwapinashkam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Minnie Reddish Guns",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Minnie Rider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Minnie Spy",
  "death_date": "Apr. 14, 1927",
  "school": "Kamloops (St. Louis)",
  "year": "1927"
}, {
  "name": "Mitchell Joseph",
  "death_date": "May. 26, 1969",
  "school": "Alberni",
  "year": "1969"
}, {
  "name": "Modest Kosteinagant",
  "death_date": "Aug. 06, 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Modeste Dorrossage",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moise Janvier Watchapez",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moise Jim",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Moise Koawhe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moise Larivere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moise Minoweshkang",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Mollie Dickson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Molly Irene Moon",
  "death_date": "Aug. 23, 1961",
  "school": "St. Michael’s",
  "year": "1961"
}, {
  "name": "Mona",
  "death_date": "ca. 1902-1903",
  "school": "St. Michael’s",
  "year": "1903"
}, {
  "name": "Monica Black Kettle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moonias Therese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Morin Joachim",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Morley Snake",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moroni Quakegesick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Morris Justin",
  "death_date": "Jan. 01, 1937",
  "school": "Lejac (Stuart Lake)",
  "year": "1937"
}, {
  "name": "Morris Keewatin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Morris Rooster",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses (Little Bone)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses (Shingle Point)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses Andrew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses Badger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses Beardy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Moses Tom",
  "death_date": "Sep. 22, 1943",
  "school": "Christie",
  "year": "1943"
}, {
  "name": "Moses Uilok",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Muriel Plaited Hair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Myrtle Bertha Oates",
  "death_date": "Jan. 15, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Myrtle Jane Moostoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Myrtle Moosoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Myrtle Richardson",
  "death_date": "Oct. 19, 1928",
  "school": "St. Mary’s",
  "year": "1928"
}, {
  "name": "Myrtle Riley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy",
  "death_date": "ca. 1891-1892",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1892"
}, {
  "name": "Nancy Adelaide Grandjambe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Atchenum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Blackice",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Cheabies",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Keewatin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Lampquin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Mcpherson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Moody",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Naistus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Okemasis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Sagutch",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Saw-Phaw-Pah-Kay-00",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Shawinaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Tooshenan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nancy Tsetso",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nanette Eskamikapiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nanokeesic (Sioux Lookout)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Naomi Margot Cardindal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Narcisse Gazoer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Narcisse Tchowis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Neil Anwunk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Bonnetplume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Bremner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Fallardeau",
  "death_date": "Jul. 13, 1923",
  "school": "Kamloops (St. Louis)",
  "year": "1923"
}, {
  "name": "Nellie Horrisey",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Kiutesi",
  "death_date": "Not known",
  "school": "Alberni",
  "year": "Not known"
}, {
  "name": "Nellie Night",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Orr",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Sims",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nellie Three Guns",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nelson Peter Spence",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nelson Sophy",
  "death_date": "Jan. 01, 1959",
  "school": "Kuper Island",
  "year": "1959"
}, {
  "name": "Nephirin Morin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nicholas Sebaston",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Noah Thomassie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Noel Daniel Raymond",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Noel Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Noemie Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Blacksmith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Jane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora John",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Many Tail Feathers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Moostoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Napaces",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Nora Wasecunna",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Noreen Verone Crowhurst",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norma Pauline Frank",
  "death_date": "ca. June 1948",
  "school": "Kuper Island",
  "year": "1948"
}, {
  "name": "Norman Bob",
  "death_date": "Apr. 07, 1942",
  "school": "Alberni",
  "year": "1942"
}, {
  "name": "Norman Clarence Aleck",
  "death_date": "Jun. 24, 1980",
  "school": "Kuper Island",
  "year": "1980"
}, {
  "name": "Norman Jackson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Kahkekaypinesse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Kruger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Mark",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Mckay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Nice Cutter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Robinson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norma Soney",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Norman Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Octavie Didzere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ole Johnson Peter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Olive Helene Firth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Oliver Cochrane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Oliver Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Olwen Studhorse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Oscar Justice",
  "death_date": "Jan. 01, 1932",
  "school": "St. George’s",
  "year": "1932"
}, {
  "name": "Ossemeemas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Owen James Asapace",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "P. Williams (Kuper Island)",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Pat Dodgiing Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pata",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrice Dumas-Sarcee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrice Martin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrice Pircheto",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patricia Marilyn Joseph",
  "death_date": "Jan. 17, 1959",
  "school": "Kuper Island",
  "year": "1959"
}, {
  "name": "Patrick Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrick Chah",
  "death_date": "Jan. 20, 1939",
  "school": "Cariboo",
  "year": "1939"
}, {
  "name": "Patrick Gro Ventre",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrick Joe",
  "death_date": "Jan. 30, 1917",
  "school": "Kuper Island",
  "year": "1917"
}, {
  "name": "Patrick Marquis Opisinon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrick N. Prince",
  "death_date": "Mar. 31, 1948",
  "school": "Lejac (Stuart Lake)",
  "year": "1948"
}, {
  "name": "Patrick Sailors",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrick Tanner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patrick Tootoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Patsy Grioux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pattee Peducket",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Chocan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Dumas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Emile Land",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Joseph",
  "death_date": "Aug. 09, 1977",
  "school": "Lejac (Stuart Lake)",
  "year": "1977"
}, {
  "name": "Paul Legace",
  "death_date": "Feb. 26, 1902",
  "school": "Coqualeetza",
  "year": "1902"
}, {
  "name": "Paul Lewis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Little Wolfe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Loonskin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Nezcroche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Peter Mcginty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Saomitani",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Shorty",
  "death_date": "Nov. 14, 1938",
  "school": "Lejac (Stuart Lake)",
  "year": "1938"
}, {
  "name": "Paul Stony",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Watchmaker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul White Fish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paul Wolf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paula",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paula Owl Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Paula Standing",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pauline Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pauline Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pauline Laviolette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pauloosie Meeko",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pearl Brave Rock",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pearl Joe",
  "death_date": "Sep. 04, 1944",
  "school": "Kamloops (St. Louis)",
  "year": "1944"
}, {
  "name": "Pearl Michael",
  "death_date": "Sep. 24, 1958",
  "school": "Christie",
  "year": "1958"
}, {
  "name": "Peggy Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Percival Lacelle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Percy Ochapawace",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Perry George Siberian",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Beauvois",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Big Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Bighetty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Chubb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Crazy Bull",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Cross Buck",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Doctor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Good Rider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Jacobs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Jones Stone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Kapkagesik",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Louis Alexander",
  "death_date": "May. 10, 1933",
  "school": "Lejac (Stuart Lake)",
  "year": "1933"
}, {
  "name": "Peter Michael Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Michael Purdaby",
  "death_date": "ca. May, 1962",
  "school": "Kamloops (St. Louis)",
  "year": "1962"
}, {
  "name": "Peter Okimaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Pelissay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Peterson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Plain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Peter Siah",
  "death_date": "Jan. 01, 1934",
  "school": "Kuper Island",
  "year": "1934"
}, {
  "name": "Peter Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Armstrong",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Brightnose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Canada",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Jack",
  "death_date": "ca. Apr. 1910",
  "school": "Kuper Island",
  "year": "1910"
}, {
  "name": "Philip Joshua (A)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Joshua (B)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Marten",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Never Gets Out",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Pekoday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Redhead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philip Swain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philippe Sanderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Phillip Mcnabb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Phillip Small Leg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Phillip Wadsworth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomena Bruyere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomena Naytewehew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Amajiwegijig",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Debasige",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Laroque",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Maskatepwist",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Mcivor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomene Rednose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomina Quinn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomine Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Philomine Naytowohow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Phoebe Pokiak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Phyllis Red Gun",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Piché Joseph",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Piere Sewepayiw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Beaulieu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Bob",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Pierre Bull Dog Fly",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Cursitor",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Daniel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Flett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Janvier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Kakitomustus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Kaniswawetang",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Lamouelle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Okimaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Paquet",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Trachi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pierre Tromatay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pius Allen",
  "death_date": "Jan. 01, 1942",
  "school": "Lejac (Stuart Lake)",
  "year": "1942"
}, {
  "name": "Pius Calf Robe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Priscilla Beatrice Bear",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Priscilla Prairie Chicken",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Pruden Augustine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Queenie Small Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rachel Hairline",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rachel Heavy Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rachel Henderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ralph Calah",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ralph Cat Face",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ralph Crowded That Way",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ralph Jumbo",
  "death_date": "Mar. 31, 1947",
  "school": "St. George’s",
  "year": "1947"
}, {
  "name": "Ramona Lynn Diablo",
  "death_date": "Nov. 21, 1964",
  "school": "St. George’s",
  "year": "1964"
}, {
  "name": "Ramona Taylor",
  "death_date": "Oct. 13, 1949",
  "school": "Alberni",
  "year": "1949"
}, {
  "name": "Raphael Corrigal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Raphael Katakwapit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Raphael Nah-Kah-Nah-Qua-Hung",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Raphael Tomykatie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rawley Isadore Dan",
  "death_date": "Jul. 19, 1974",
  "school": "St. Augustine’s",
  "year": "1974"
}, {
  "name": "Raymond (Jaques) Jacobs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Raymond A. Brown",
  "death_date": "Dec. 29, 1940",
  "school": "Kuper Island",
  "year": "1940"
}, {
  "name": "Raymond Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rebekah Agnes Sealhunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Reggie Allan",
  "death_date": "May. 20, 1948",
  "school": "St. Michael’s",
  "year": "1948"
}, {
  "name": "Regie Boyer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Regina George",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Reginald Starlight",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Regis Rivier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Regis Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Remea Peesoopahtaw",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Remi Snake Eater",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Reuben (James) Fox",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rhoda Black Plume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rhonda Ekin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Allan Mandamin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Murphy Allen Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Shumaeshi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Smith",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Richard Thomas",
  "death_date": "Jun. 02, 1966",
  "school": "Kuper Island",
  "year": "1966"
}, {
  "name": "Richard Whitecap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ricky Walter Charlie",
  "death_date": "May. 20, 1972",
  "school": "St. George’s",
  "year": "1972"
}, {
  "name": "Rita Loon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rita Williams",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Chahebugiscounit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Gibson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Lightfoot",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Lonesinger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Mcgibbon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Mcnab",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Myo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Running In The Middle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Teya",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Thompson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Toasi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Robert Wells",
  "death_date": "Feb. 12, 1934",
  "school": "St. Mary’s",
  "year": "1934"
}, {
  "name": "Robert White",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roderick Beardy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roderick Keesick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roderick Wascowin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rodrique Piwapiskus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roger Tchowis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ronald Frezie",
  "death_date": "Aug. 22, 1959",
  "school": "Kamloops (St. Louis)",
  "year": "1959"
}, {
  "name": "Ronald Gets Lots Of Wood In The Night",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ronald Saulteaux",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosa Denet’e",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosa Lost",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Benson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Hartley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Keeneeqwayneepeeness",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Mamahtwew",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Moses",
  "death_date": "ca. May 1923",
  "school": "Kuper Island",
  "year": "1923"
}, {
  "name": "Rosalie Mustatip",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Piche",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Sywap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalie Viviers",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosalina Johnny",
  "death_date": "Jan. 01, 1920",
  "school": "Kuper Island",
  "year": "1920"
}, {
  "name": "Rosaline Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Ada Davis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Adrian",
  "death_date": "Dec. 25, 1958",
  "school": "Kamloops (St. Louis)",
  "year": "1958"
}, {
  "name": "Rose Crow Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Johnson",
  "death_date": "Jan. 01, 1941",
  "school": "Christie",
  "year": "1941"
}, {
  "name": "Rose Kratar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Marie Adolph",
  "death_date": "Dec. 25, 1958",
  "school": "Kamloops (St. Louis)",
  "year": "1958"
}, {
  "name": "Rose Mary Lowhorn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Mary Scalp Lock",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Mary Wolfe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose O’Reilly",
  "death_date": "ca. 1913",
  "school": "Crosby Home for Girls",
  "year": "1913"
}, {
  "name": "Rose Rabbit",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Wemigwans",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rose Worm",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosie Austin",
  "death_date": "Jun. 19, 1935",
  "school": "St. George’s",
  "year": "1935"
}, {
  "name": "Rosie Bull Shields",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosie Martel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosie Michell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosine Déranger",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rosy Michael David",
  "death_date": "Jan. 01, 1942",
  "school": "Kuper Island",
  "year": "1942"
}, {
  "name": "Rowland Pechawis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roy King",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roy Richards",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Roy Umpherville",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruben Sandyou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruby Curley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruby Quackageezick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Rupert Tanner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Russel Swain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Russell Bennett",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Russell Rufus Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruth Kennedy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruth Kyooeu",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruth Redsky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ruth Shining Double",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sabeth Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sabeth Wabano",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sabina Ernest David",
  "death_date": "Oct. 06, 1949",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1949"
}, {
  "name": "Sadie Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sally May Patrick",
  "death_date": "Jan. 01, 1946",
  "school": "Lejac (Stuart Lake)",
  "year": "1946"
}, {
  "name": "Salomi Laframboise",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sam Crowchild",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sam Redsky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sam Simon Oskisin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sam Young Skunk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sampson Omisinahsqutaimi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sampson Whitehead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samson Edgar",
  "death_date": "ca. 1939",
  "school": "St. Michael’s",
  "year": "1939"
}, {
  "name": "Samson Harris",
  "death_date": "Jan. 12, 1923",
  "school": "St. Michael’s",
  "year": "1923"
}, {
  "name": "Samson Mclean",
  "death_date": "Mar. 21, 1949",
  "school": "Christie",
  "year": "1949"
}, {
  "name": "Samson Nine Oclock",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel (Fort Providence)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Anghame",
  "death_date": "May. 22, 1893",
  "school": "Kuper Island",
  "year": "1893"
}, {
  "name": "Samuel Bigsky",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Byshei",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Chapkebregumb",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Gardner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Good Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Justice",
  "death_date": "ca. 1926",
  "school": "St. George’s",
  "year": "1926"
}, {
  "name": "Samuel Sealhunter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Smallgeese",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Stimson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Watson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Wesley",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Samuel Whonock",
  "death_date": "Sep. 25, 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Sanders (Ontario)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sanderson (Birtle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sandra Seymour",
  "death_date": "Jun. 01, 1963",
  "school": "Kamloops (St. Louis)",
  "year": "1963"
}, {
  "name": "Sara Black Eye",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sara Denerou",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sara Skilliter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sara Thicestone",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Bird (Brandon)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Bird (Gordon’s)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Bohner",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Briton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Doris Stewart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Gaetz",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Healy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Hill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah J. Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Jack",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Jane Catcheway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Jane Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Jane Koosh",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah M. Brass",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah M. Cochrane",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Maccoisis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Marsum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Mary McRae",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah May Good Day",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Mikinak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Night",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Sampson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Soosay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Spence",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Tetlechi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarah Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sarapop Black Plume",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Saul Moses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Shannon Coo-Pay-Pay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Shirley L. Peter",
  "death_date": "ca. Dec. 1943",
  "school": "Lejac (Stuart Lake)",
  "year": "1943"
}, {
  "name": "Shirley Leslie Williams",
  "death_date": "May. 17, 1963",
  "school": "Alberni",
  "year": "1963"
}, {
  "name": "Shirley Link",
  "death_date": "Apr. 17, 1971",
  "school": "Kamloops (St. Louis)",
  "year": "1971"
}, {
  "name": "Silas Haneka",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Silas Redbreast",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Silas Thomas Frog",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simeon Ashnipinishkam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Altman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Big Road",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Burns",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Francis Jeffries",
  "death_date": "Sep. 30, 1935",
  "school": "St. Augustine’s",
  "year": "1935"
}, {
  "name": "Simon Gontek",
  "death_date": "ca.Jan. 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Simon Gotchin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Jacobs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Kahgee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Napotokan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Oibeau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Sayees",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Simon Tom",
  "death_date": "ca. 1894-1895",
  "school": "Kuper Island",
  "year": "1895"
}, {
  "name": "Sinclair Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sinclair Nepaneshkum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sinclair Pestawayan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sinclair Spaniel",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Applegarth",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Ashkewe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Corning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Good",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Hamilton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Solomon Steersman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Edgar",
  "death_date": "ca. May 1939",
  "school": "St. Michael’s",
  "year": "1939"
}, {
  "name": "Sophia Julia Half",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Mcleod",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Queskakpo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Sinclair",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Whitecap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophia Yellow Old Women",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Arnoose",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Baptist",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Sophie Casimir",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Sophie George",
  "death_date": "Jan. 01, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Sophie Grant",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Joseph",
  "death_date": "May. 13, 1916",
  "school": "Kuper Island",
  "year": "1916"
}, {
  "name": "Sophie Kea",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Monias",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Moore",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Noothlenu",
  "death_date": "Sep. 03, 1910",
  "school": "Ahousaht",
  "year": "1910"
}, {
  "name": "Sophie Pangooish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Pettel",
  "death_date": "Jan. 01, 1947",
  "school": "Kamloops (St. Louis)",
  "year": "1947"
}, {
  "name": "Sophie Rain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Rains",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sophie Sarceewoman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "St. Pierre Bellys[]sow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Big Swan",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Crate",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Crow Eagle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Frank",
  "death_date": "Mar. 11, 1938",
  "school": "Kuper Island",
  "year": "1938"
}, {
  "name": "Stanley Gullion",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Herkimer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stanley Joseph",
  "death_date": "Jun. 06, 1939",
  "school": "Christie",
  "year": "1939"
}, {
  "name": "Stanley Paul",
  "death_date": "Dec. 31, 1947",
  "school": "Kuper Island",
  "year": "1947"
}, {
  "name": "Stanley Setah",
  "death_date": "ca. Sept. 1971",
  "school": "Cariboo",
  "year": "1971"
}, {
  "name": "Stella Constant",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stella Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stella Keeper",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stella Wuttunee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephane Fiseman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephanie Joe",
  "death_date": "ca. Apr. 1965",
  "school": "St. Augustine’s",
  "year": "1965"
}, {
  "name": "Stephen Cameron",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephen Franklin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephen Jandreau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephen Medicine Shield",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephen Paul",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stephen Roberts",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stev Wolfe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Steven Stevens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stewart Spencer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Stoney Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Student No. 0131",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susan Blackbird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susan D. John",
  "death_date": "Jun. 22, 1901",
  "school": "Coqualeetza",
  "year": "1901"
}, {
  "name": "Susan Ignatius",
  "death_date": "May. 30, 1936",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1936"
}, {
  "name": "Susan Mccallum",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susan Pierre",
  "death_date": "Mar. 08, 1936",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1936"
}, {
  "name": "Susan Sachaywaycappe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susan Sharphead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susan Two Young Men",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susanna Tait",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susannah Hill",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susannah Maracle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Anderson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Bastien",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Bull Shields",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Keysick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Little Ace",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Little Axe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Susie Small Wolf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzan Commandant",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzanna Grand’Jambe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzanne Bimmard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzanne Dénéganze",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzanne Four Horns",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzette Cryer",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzette Merasty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzie Many Good",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Suzie S. Wolf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sybil Anishinabi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sydney Checkochee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Sydney Wesley Mountain",
  "death_date": "Mar. 08, 1919",
  "school": "St. George’s",
  "year": "1919"
}, {
  "name": "Sylvester Patrick",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Taylor Santo",
  "death_date": "Aug. 13, 1906",
  "school": "Alberni",
  "year": "1906"
}, {
  "name": "Teresa Jeffries",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thérèse Manderidéf",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thérèse Mitchell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thaddeus Leonard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thelma Good",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Theodore Cook",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Theodore Mckay",
  "death_date": "May. 22, 1941",
  "school": "Alberni",
  "year": "1941"
}, {
  "name": "Theophane Johnny",
  "death_date": "ca. Dec. 1894",
  "school": "Kuper Island",
  "year": "1894"
}, {
  "name": "Theophile Dick Billy",
  "death_date": "Apr. 22, 1941",
  "school": "Kamloops (St. Louis)",
  "year": "1941"
}, {
  "name": "Theresa",
  "death_date": "Apr. 08, 1936",
  "school": "Cranbrook (St. Eugene’s)",
  "year": "1936"
}, {
  "name": "Theresa Lacour/Latour",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Theresa Ewenin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Theresa Houl",
  "death_date": "ca. Nov. 1934",
  "school": "Lejac (Stuart Lake)",
  "year": "1934"
}, {
  "name": "Theresa Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Theresa Wemigwans",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Alec",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Lariviere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Marlo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Okitigo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Piwapiskus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Therese Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Alcrow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Campbell",
  "death_date": "Aug. 08, 1958",
  "school": "Christie",
  "year": "1958"
}, {
  "name": "Thomas Dickson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Grande Jambe",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Jim",
  "death_date": "Sep. 22, 1906",
  "school": "Kuper Island",
  "year": "1906"
}, {
  "name": "Thomas Ladouceur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Loutittt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Mason",
  "death_date": "Sep. 19, 1925",
  "school": "St. Michael’s",
  "year": "1925"
}, {
  "name": "Thomas Morissette",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Musus [Larocque]",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Nyalti",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Ombash",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Pekoday",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas S. Skilliter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Simon",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Three Bulls",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Tyrell",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Wapahoo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Wapoos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thomas Yellow Old Woman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Thos Wawanapetungs",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Three Stars",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tibia (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tillian Mckay",
  "death_date": "Jun. 15, 1908",
  "school": "Ahousaht",
  "year": "1908"
}, {
  "name": "Timothy Scott",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tina Pelletier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tina Seaton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tom Black Face",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tom Many Horses",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tom Rider",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tommy Aleck",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Tommy Captain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Tommy Jones",
  "death_date": "Jan. 01, 1937",
  "school": "St. George’s",
  "year": "1937"
}, {
  "name": "Tommy Willier",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Trudeau (Manitoulin Island)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Ubald Nicolas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Uriah Baxter",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "V.F. Davin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Valerie Le Caruie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Velma Kabestra",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vera Underwood",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Verna Martineau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Verneda David",
  "death_date": "ca. 1938-1939",
  "school": "Kuper Island",
  "year": "1939"
}, {
  "name": "Veromi Johnson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronica Classetow Canute",
  "death_date": "Oct. 15, 1917",
  "school": "Kuper Island",
  "year": "1917"
}, {
  "name": "Veronica Saganaki",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Benaouni",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Desjardins",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Houle",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Levasseur",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Sywap",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Veronique Ward",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victor (Fort Resolution)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victor Sugar",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victor Yellow Knee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Hunt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Kaspwat",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Kathleen Stewart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Kelly",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Marjorie Large",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Pewapiskus",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Still",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Trout",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victoria Ward",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Victorine Lépiné",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vidal Dumond",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vierna Manitos",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Viola Gets Wood",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Violet Kayasowatam",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Violet McKay",
  "death_date": "Feb. 14, 1937",
  "school": "Alberni",
  "year": "1937"
}, {
  "name": "Violet William",
  "death_date": "Jan. 01, 1945",
  "school": "Kamloops (St. Louis)",
  "year": "1945"
}, {
  "name": "Virginia Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Virginia Collins",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Virginia Corbiere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Virginia Fidele",
  "death_date": "Jan. 16, 1931",
  "school": "St. Mary’s",
  "year": "1931"
}, {
  "name": "Virginia Moses",
  "death_date": "Mar. 15, 1946",
  "school": "Alberni",
  "year": "1946"
}, {
  "name": "Virginia Tchawis",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Virginie Hamelin",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Virginie Kahkeetoomay",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vital Lafferty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vital Red Morning",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vital Sonfrere",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vital T’Lo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Vivian Gets Wood",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wallace Across the Mountain",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wallace Creighton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Big Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Carlick",
  "death_date": "Dec. 05, 1949",
  "school": "Lejac (Stuart Lake)",
  "year": "1949"
}, {
  "name": "Walter Choutsi",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Dennis",
  "death_date": "Mar. 21, 1948",
  "school": "Lejac (Stuart Lake)",
  "year": "1948"
}, {
  "name": "Walter Green",
  "death_date": "Jul. 27, 1954",
  "school": "Lejac (Stuart Lake)",
  "year": "1954"
}, {
  "name": "Walter Henry",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Poorman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Powhuna",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Powshuna",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Stevens",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Walter Weasel Horn",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Watson Huntinghawk",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Waylon Akoak",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wellesley Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wetuhnashch (Simon Altman)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "White Bright Star",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilbur Mountain Horse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Arcand",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Eagle Speaker",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Lalo",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Pratt",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Stewart",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilfred Toto",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willard Frank William",
  "death_date": "Not known",
  "school": "Kamloops (St. Louis)",
  "year": "Not known"
}, {
  "name": "William",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William (Qu’Appelle)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Alexson",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Armstrong",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Bernard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Cardinal",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Charasse",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Chevaise",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Chicago",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Courtoreille",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Crow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Delver",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Esquimau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William George",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Hamilton",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Head",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Jones",
  "death_date": "Jan. 28, 1928",
  "school": "Kuper Island",
  "year": "1928"
}, {
  "name": "William Kaskup",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Kennedy",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Manijins",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Maquina",
  "death_date": "Nov. 11, 1906",
  "school": "Ahousaht",
  "year": "1906"
}, {
  "name": "William Merasty",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Miller",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Millie",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Norbert",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Noye",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Owen",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Pasquats",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Peter",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "William Petsetuce",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Richard",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Saguhcheway",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Sauteau",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Steersman",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Stonefish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Tchéa",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Thomas",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Thomas Bird",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "William Winnipeg",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Williamson (Manatoulin Island)",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Black Forehead",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Blackice",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Desjarlais",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Henry",
  "death_date": "Not known",
  "school": "Kuper Island",
  "year": "Not known"
}, {
  "name": "Willie Joseph",
  "death_date": "ca. Jan. 1901",
  "school": "Kamloops (St. Louis)",
  "year": "1901"
}, {
  "name": "Willie Lachance",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Mckay",
  "death_date": "Jan. 01, 1936",
  "school": "Coqualeetza",
  "year": "1936"
}, {
  "name": "Willie Medicine",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Ross",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Stonefish",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willie Sutherland",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Willis R. Fisher",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Wilson Wuttunee",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Winnifred Moody",
  "death_date": "Jul. 16, 1935",
  "school": "St. George’s",
  "year": "1935"
}, {
  "name": "Wolf Child",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Yate’Ie Monique",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Yinnito Taylor",
  "death_date": "ca. July 1899",
  "school": "Alberni",
  "year": "1899"
}, {
  "name": "Yvette Walters",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Yvon T. Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Yvonne Thunder",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Yvonne Wabosons",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Zaccheus Minow",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Zar Morris Jack",
  "death_date": "Feb. 16, 1947",
  "school": "Lejac (Stuart Lake)",
  "year": "1947"
}, {
  "name": "Zephaniah Charles",
  "death_date": null,
  "school": null,
  "year": null
}, {
  "name": "Zotique Kahkikyas",
  "death_date": null,
  "school": null,
  "year": null
}];

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[111,1,2]]]);