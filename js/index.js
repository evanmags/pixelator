var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //classes and declairations necessary for react
var box = React.createElement("div", { className: "box" });var
BtnGroupV = function (_React$Component) {_inherits(BtnGroupV, _React$Component);function BtnGroupV() {_classCallCheck(this, BtnGroupV);return _possibleConstructorReturn(this, (BtnGroupV.__proto__ || Object.getPrototypeOf(BtnGroupV)).apply(this, arguments));}_createClass(BtnGroupV, [{ key: "render", value: function render()
    {
      return React.createElement("div", { className: "btngroup ud" },
        React.createElement("div", { className: "button Top" }, "Up"),
        React.createElement("div", { className: "button Bottom" }, "Down"));

    } }]);return BtnGroupV;}(React.Component);;var
BtnGroupH = function (_React$Component2) {_inherits(BtnGroupH, _React$Component2);function BtnGroupH() {_classCallCheck(this, BtnGroupH);return _possibleConstructorReturn(this, (BtnGroupH.__proto__ || Object.getPrototypeOf(BtnGroupH)).apply(this, arguments));}_createClass(BtnGroupH, [{ key: "render", value: function render()
    {
      return React.createElement("div", { className: "btngroup lr" },
        React.createElement("div", { className: "button Left" }, "Left"),
        React.createElement("div", { className: "button Right" }, "Right"));

    } }]);return BtnGroupH;}(React.Component);;var
Header = function (_React$Component3) {_inherits(Header, _React$Component3);function Header() {_classCallCheck(this, Header);return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));}_createClass(Header, [{ key: "render", value: function render()
    {
      return React.createElement("nav", null,
        React.createElement("div", { className: "nav-wrapper" },
          React.createElement("a", { href: "#", className: "brand-logo center" }, "Pixelator"),
          React.createElement("ul", { id: "nav-mobile", className: "right hide-on-med-and-down" },
            React.createElement("li", null, React.createElement("a", { href: "https://github.com/evanmags", target: "_blank" }, "GitHub")),
            React.createElement("li", null, React.createElement("a", { href: "https://codepen.io/emags112/", target: "_blank" }, "Codepen")))));



    } }]);return Header;}(React.Component);;var
Controls = function (_React$Component4) {_inherits(Controls, _React$Component4);function Controls() {_classCallCheck(this, Controls);return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));}_createClass(Controls, [{ key: "render", value: function render()
    {
      return React.createElement("div", { className: "controls" },
        React.createElement(BtnGroupV, null),
        React.createElement("div", { className: "buttons" },
          React.createElement("input", { id: "color", type: "color", defaultValue: "#000000", className: "button" }),
          React.createElement("div", { id: "rainbow", className: "button" }, "Rainbow"),
          React.createElement("div", { id: "undo", className: "button" }, "Undo"),
          React.createElement("div", { id: "clear", className: "button" }, "Clear")),

        React.createElement(BtnGroupH, null));

    } }]);return Controls;}(React.Component);;

var moves = [];
var body = document.querySelector('.container');

//react generator function 
function generate() {
  var height = window.innerHeight - 200;
  var width = window.innerWidth - 200;
  var area = width * height;
  var boxes = width / 15 - 1;
  var rows = height / 15;
  boxList = [];
  rowList = [];
  var lastclick = void 0;
  for (x = 0; x < boxes; x++) {
    boxList.push(box);
  }
  for (x = 0; x < rows; x++) {
    rowList.push(React.createElement("div", { className: "row" }, boxList));
  }
  ReactDOM.render(
  React.createElement("div", { className: "holder" },
    React.createElement(Header, null),
    React.createElement("div", { className: "canvas" }, rowList),
    React.createElement(Controls, null)),

  body);
}

//button control functions
function clearBox() {
  document.querySelectorAll('.box').forEach(function (box) {
    box.style.background = 'white';
  });
  moves = [];
}

function log(x) {
  moves.unshift(x);
  if (moves.length > 20) {
    moves.splice(20, 1);
  }
}

function boxClick(e) {
  boxColor();
  lastclick = e.target;
  e.target.style.background = color;
  log(lastclick);
  return lastclick;
}

function boxColor() {
  if (rainbow) {
    return color = "hsl(" + hue + ", 100%, 50%)",
    hue += 5;
  } else {
    return color = colorInput.value;
  }
}

function moveRight() {
  boxColor();
  var boxes = Array.from(document.querySelectorAll('.box'));
  var index = boxes.indexOf(lastclick);
  boxes[index + 1].style.background = color;
  lastclick = boxes[index + 1];
  log(lastclick);
}

function moveLeft() {
  boxColor();
  var boxes = Array.from(document.querySelectorAll('.box'));
  var index = boxes.indexOf(lastclick);
  boxes[index - 1].style.background = color;
  lastclick = boxes[index - 1];
  log(lastclick);
}

function moveUp() {
  boxColor();
  var rowlength = void 0;
  var boxes = Array.from(document.querySelectorAll('.box'));
  var index = boxes.indexOf(lastclick);
  var width = window.innerWidth - 200;
  if (width % 15 === 0) {
    rowlength = Math.floor((width - 1) / 15);
  } else {
    rowlength = Math.floor(width / 15);
  }
  boxes[index - rowlength].style.background = color;
  lastclick = boxes[index - rowlength];
  log(lastclick);
}

function moveDown() {
  boxColor();
  var rowlength = void 0;
  var boxes = Array.from(document.querySelectorAll('.box'));
  var index = boxes.indexOf(lastclick);
  var width = window.innerWidth - 200;
  if (width % 15 === 0) {
    rowlength = Math.floor((width - 1) / 15);
  } else {
    rowlength = Math.floor(width / 15);
  }
  boxes[index + rowlength].style.background = color;
  lastclick = boxes[index + rowlength];
  log(lastclick);
}

function move(direction) {
  if (ID) {clearInterval(ID);};
  direction();
  return ID = setInterval(direction, 150);
}

function undo() {
  moves[0].style.background = '#fff';
  moves.shift(0, 1);
}


//init declairations and generations
generate();
var colorInput = document.querySelector('input[type="color"]');
var rainbow = false;
var hue = 0;
var color = void 0;
var lastClick = void 0;
var ID = void 0;
var clear = document.querySelector('#clear');
document.querySelectorAll('.box').forEach(function (box) {
  box.addEventListener('click', boxClick);
});

clear.addEventListener('click', clearBox);

document.querySelector('.Right').addEventListener('mousedown', moveRight);


document.querySelector('.Left').addEventListener('mousedown', moveLeft);


document.querySelector('.Top').addEventListener('mousedown', moveUp);


document.querySelector('.Bottom').addEventListener('mousedown', moveDown);


document.querySelector('#rainbow').addEventListener('click', function () {
  rainbow = !rainbow;
  hue = 0;
});

document.querySelector('#undo').addEventListener('click', undo);

window.addEventListener('resize', function () {
  generate();
  var boxes = Array.from(document.querySelectorAll('.box'));
  document.querySelectorAll('.box').forEach(function (box) {
    box.removeEventListener('click', boxClick);
  });
  document.querySelectorAll('.box').forEach(function (box) {
    box.addEventListener('click', boxClick);
  });
  document.querySelector('.Right').removeEventListener('mousedown', moveRight);

  document.querySelector('.Left').removeEventListener('mousedown', moveLeft);

  document.querySelector('.Top').removeEventListener('mousedown', moveUp);

  document.querySelector('.Bottom').removeEventListener('mousedown', moveDown);


  document.querySelector('.Right').addEventListener('mousedown', moveRight);


  document.querySelector('.Left').addEventListener('mousedown', moveLeft);


  document.querySelector('.Top').addEventListener('mousedown', moveUp);


  document.querySelector('.Bottom').addEventListener('mousedown', moveDown);
});