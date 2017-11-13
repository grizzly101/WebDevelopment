'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_React$Component) {
  _inherits(Canvas, _React$Component);

  function Canvas() {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this));

    main(document.getElementById('graphContainer'));
    return _this;
  }

  Canvas.prototype.render = function render() {
    graph.getModel().beginUpdate();

    var v3 = graph.insertVertex(parent, null, 'dystopia', 200, 10, 80, 30);
    var v4 = graph.insertVertex(parent, null, 'tree', 200, 150, 80, 30);
    var e2 = graph.insertEdge(parent, null, '', v3, v4);

    // Updates the display
    graph.getModel().endUpdate();
    return;
  };

  return Canvas;
}(React.Component);

var SelectMenu = function (_React$Component2) {
  _inherits(SelectMenu, _React$Component2);

  function SelectMenu() {
    _classCallCheck(this, SelectMenu);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  SelectMenu.prototype.render = function render() {
    return React.createElement(
      'form',
      { action: '#' },
      React.createElement(
        'fieldset',
        null,
        React.createElement(
          'label',
          { 'for': 'speed' },
          'Select a speed'
        ),
        React.createElement(
          'select',
          { name: 'speed', id: 'speed' },
          React.createElement(
            'option',
            null,
            'Slower'
          ),
          React.createElement(
            'option',
            null,
            'Slow'
          ),
          React.createElement(
            'option',
            { selected: 'selected' },
            'Medium'
          ),
          React.createElement(
            'option',
            null,
            'Fast'
          ),
          React.createElement(
            'option',
            null,
            'Faster'
          )
        )
      )
    );
  };

  return SelectMenu;
}(React.Component);

var EntireUserInterface = function (_React$Component3) {
  _inherits(EntireUserInterface, _React$Component3);

  function EntireUserInterface(props) {
    _classCallCheck(this, EntireUserInterface);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.state = {};
    return _this3;
  }

  EntireUserInterface.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Canvas, null),
      React.createElement(SelectMenu, null)
    );
  };

  return EntireUserInterface;
}(React.Component);

ReactDOM.render(React.createElement(EntireUserInterface, null), document.getElementById('container'));