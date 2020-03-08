'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WodPickerApp = function (_React$Component) {
    _inherits(WodPickerApp, _React$Component);

    function WodPickerApp(props) {
        _classCallCheck(this, WodPickerApp);

        var _this = _possibleConstructorReturn(this, (WodPickerApp.__proto__ || Object.getPrototypeOf(WodPickerApp)).call(this, props));

        _this.state = {
            movements: ['Deadlift', 'Toes to Bar', 'Power Clean', 'Pull-ups', 'Power Snatch', 'Box Jumps', 'Double Unders', 'Bench Press']
        };
        return _this;
    }

    _createClass(WodPickerApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Options, {
                    labels: this.state.movements,
                    deleteAll: this.deleteAll
                })
            );
        }
    }]);

    return WodPickerApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Wod Picker App'
                ),
                React.createElement(
                    'h3',
                    null,
                    'Get started by picking some movements.'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.labels.map(function (label) {
            return React.createElement(Movement, {
                key: label,
                labelText: label,
                name: label

            });
        })
    );
};

var Movement = function (_React$Component3) {
    _inherits(Movement, _React$Component3);

    function Movement(props) {
        _classCallCheck(this, Movement);

        var _this3 = _possibleConstructorReturn(this, (Movement.__proto__ || Object.getPrototypeOf(Movement)).call(this, props));

        _this3.handleChange = _this3.handleChange.bind(_this3);
        _this3.state = {
            checked: false
        };
        return _this3;
    }

    _createClass(Movement, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({
                checked: event.target.checked
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'label',
                    null,
                    this.props.labelText
                ),
                React.createElement('input', {
                    type: 'checkbox',
                    checked: this.state.checked,
                    onChange: this.handleChange,
                    name: this.props.name

                })
            );
        }
    }]);

    return Movement;
}(React.Component);

ReactDOM.render(React.createElement(WodPickerApp, null), document.getElementById('app'));
