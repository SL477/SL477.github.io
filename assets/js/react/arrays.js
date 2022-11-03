/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

// eslint-disable-next-line no-undef

var StudentGrades = function (_React$Component) {
    _inherits(StudentGrades, _React$Component);

    function StudentGrades(props) {
        _classCallCheck(this, StudentGrades);

        var _this = _possibleConstructorReturn(this, (StudentGrades.__proto__ || Object.getPrototypeOf(StudentGrades)).call(this, props));

        _this.state = {
            grades: [],
            currentGrade: 0,
            words: ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
        };
        _this.gradeAdder = _this.gradeAdder.bind(_this);
        _this.currentGradeChange = _this.currentGradeChange.bind(_this);
        _this.averageGrade = _this.averageGrade.bind(_this);
        return _this;
    }

    _createClass(StudentGrades, [{
        key: 'gradeAdder',
        value: function gradeAdder(e) {
            e.preventDefault();
            var arr = [].concat(_toConsumableArray(this.state.grades));
            arr.push(Number(this.state.currentGrade));
            this.setState({
                grades: arr,
                currentGrade: 0
            });
        }
    }, {
        key: 'currentGradeChange',
        value: function currentGradeChange(event) {
            this.setState({
                currentGrade: event.target.value
            });
        }
    }, {
        key: 'averageGrade',
        value: function averageGrade() {
            if (this.state.grades.length <= 0) {
                return 0;
            }
            var sum = 0;
            this.state.grades.forEach(function (grade) {
                sum += grade;
            });
            return sum / this.state.grades.length;
        }
    }, {
        key: 'render',
        value: function render() {
            var gradesShow = this.state.grades.map(function (grade, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    grade
                );
            });
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'label',
                        { htmlFor: 'addGrade' },
                        'Add Grade:',
                        React.createElement('input', { id: 'addGrade', name: 'addGrade', type: 'number', className: 'form-control', value: this.state.currentGrade, onChange: this.currentGradeChange })
                    ),
                    React.createElement(
                        'button',
                        { id: 'btnAddGrade', className: 'btn btn-primary', onClick: this.gradeAdder },
                        'Add Grade'
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    'Grades:'
                ),
                React.createElement(
                    'ul',
                    null,
                    gradesShow
                ),
                React.createElement(
                    'p',
                    null,
                    'Average Grade: ',
                    this.averageGrade()
                ),
                React.createElement(
                    'p',
                    null,
                    React.createElement(
                        'b',
                        null,
                        '2. Words'
                    )
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.words.toString()
                ),
                React.createElement(
                    'p',
                    null,
                    this.state.words.reverse().toString()
                )
            );
        }
    }]);

    return StudentGrades;
}(React.Component);

var domContainer = document.querySelector('#studentGrades');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(StudentGrades));