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

        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.deleteAll = _this.deleteAll.bind(_this);
        _this.state = {
            movements: []
        };
        return _this;
    }

    _createClass(WodPickerApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('movements');
                var movements = JSON.parse(json);

                if (movements) {
                    this.setState(function () {
                        return { movements: movements };
                    });
                }
            } catch (e) {
                // do nothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.movements.length !== this.state.movements) {
                var json = JSON.stringify(this.state.movements);
                localStorage.setItem('movements', json);
            }
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid option';
            } else if (this.state.movements.indexOf(option) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    movements: prevState.movements.concat(option)
                };
            });
        }
    }, {
        key: 'deleteAll',
        value: function deleteAll() {
            this.setState(function () {
                return { movements: [] };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Options, {
                    labels: this.state.movements,
                    deleteAll: this.deleteAll

                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                }),
                React.createElement(Next, null)
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
                handleChangeChecked: props.handleChangeChecked
            });
        }),
        React.createElement(
            'button',
            { onClick: props.deleteAll },
            'Remove All'
        )
    );
};

var Movement = function (_React$Component3) {
    _inherits(Movement, _React$Component3);

    function Movement(props) {
        _classCallCheck(this, Movement);

        return _possibleConstructorReturn(this, (Movement.__proto__ || Object.getPrototypeOf(Movement)).call(this, props));
    }

    _createClass(Movement, [{
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
                    checked: this.props.checked,
                    onChange: this.props.handleChangeChecked
                })
            );
        }
    }]);

    return Movement;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
        _this4.state = {
            newMovement: undefined
        };
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();

            var movement = e.target.elements.movement.value.trim();
            var newMovement = this.props.handleAddOption(movement);

            this.setState(function () {
                return {
                    newMovement: newMovement
                };
            });

            if (!newMovement) {
                e.target.elements.movement.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.newMovement && React.createElement(
                    'p',
                    null,
                    this.state.newMovement
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', name: 'movement' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Movement'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Next = function (_React$Component5) {
    _inherits(Next, _React$Component5);

    function Next(props) {
        _classCallCheck(this, Next);

        var _this5 = _possibleConstructorReturn(this, (Next.__proto__ || Object.getPrototypeOf(Next)).call(this, props));

        _this5.handleNext = _this5.handleNext.bind(_this5);
        return _this5;
    }

    _createClass(Next, [{
        key: 'handleNext',
        value: function handleNext() {
            console.log('next');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.handleNext },
                    'Next'
                )
            );
        }
    }]);

    return Next;
}(React.Component);

ReactDOM.render(React.createElement(WodPickerApp, null), document.getElementById("app"));
