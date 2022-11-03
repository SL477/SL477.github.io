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

var RecipeBox = function (_React$Component) {
    _inherits(RecipeBox, _React$Component);

    function RecipeBox(props) {
        _classCallCheck(this, RecipeBox);

        var _this = _possibleConstructorReturn(this, (RecipeBox.__proto__ || Object.getPrototypeOf(RecipeBox)).call(this, props));

        _this.state = {
            recipes: [],
            currentItem: 0,
            editName: '',
            editRecipe: '',
            editIndex: -1,
            action: 'Add'
        };
        _this.updatePreview = _this.updatePreview.bind(_this);
        _this.updateCurrentIndex = _this.updateCurrentIndex.bind(_this);
        _this.saveToLocalStorage = _this.saveToLocalStorage.bind(_this);
        _this.saveModal = _this.saveModal.bind(_this);
        _this.addAction = _this.addAction.bind(_this);
        _this.editAction = _this.editAction.bind(_this);
        _this.deleteAction = _this.deleteAction.bind(_this);
        return _this;
    }

    _createClass(RecipeBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('mounted');
            var existingRecipes = localStorage.getItem('recipeBox');
            if (!existingRecipes) {
                var arr = [];
                var r1 = {
                    name: 'Beans on toast',
                    recipe: '# Beans on Toast\n                1. Cook beans\n                2. Make toast\n                3. Put beans on toast'
                };
                arr.push(r1);
                arr.push({ name: 'test', recipe: 'testing' });
                this.setState({ recipes: arr });
            } else {
                this.setState({ recipes: JSON.parse(existingRecipes).data });
            }
        }
    }, {
        key: 'updatePreview',
        value: function updatePreview() {
            if (this.state.recipes.length <= this.state.currentItem) {
                return '';
            }
            // eslint-disable-next-line no-undef
            var renderer1 = new marked.Renderer();
            renderer1.link = function (href, title, text) {
                return '<a target="_blank" href="' + href + '">' + text + '</a>';
            };

            // eslint-disable-next-line no-undef
            var ret = marked(this.state.recipes[this.state.currentItem].recipe, {
                gfm: true,
                breaks: true,
                renderer: renderer1
            });
            return ret;
        }
    }, {
        key: 'updateCurrentIndex',
        value: function updateCurrentIndex(ind) {
            this.setState({ currentItem: ind });
        }
    }, {
        key: 'saveToLocalStorage',
        value: function saveToLocalStorage() {
            var saveData = JSON.stringify({ data: this.state.recipes });
            console.log('saveData', saveData);
            localStorage.setItem('recipeBox', saveData);
            console.log('save to local');
        }
    }, {
        key: 'saveModal',
        value: function saveModal() {
            var arr = [].concat(_toConsumableArray(this.state.recipes));
            var curIndex = this.state.currentItem;
            if (this.state.action === 'Delete') {
                arr.splice(this.state.editIndex, 1);
                curIndex -= 1;
            } else {
                if (this.state.editIndex > -1) {
                    arr[this.state.editIndex].name = this.state.editName;
                    arr[this.state.editIndex].recipe = this.state.editRecipe;
                } else {
                    arr.push({
                        name: this.state.editName,
                        recipe: this.state.editRecipe
                    });
                    curIndex = arr.length - 1;
                }
            }
            this.setState({
                recipes: arr,
                editName: '',
                editRecipe: '',
                editIndex: -1,
                currentItem: curIndex
            }, this.saveToLocalStorage);
        }
    }, {
        key: 'addAction',
        value: function addAction() {
            this.setState({ 'action': 'Add' });
        }
    }, {
        key: 'editAction',
        value: function editAction() {
            this.setState({
                'action': 'Edit',
                'editRecipe': this.state.recipes[this.state.currentItem].recipe,
                'editName': this.state.recipes[this.state.currentItem].name,
                'editIndex': this.state.currentItem
            });
        }
    }, {
        key: 'deleteAction',
        value: function deleteAction() {
            this.setState({
                'action': 'Delete',
                'editRecipe': this.state.recipes[this.state.currentItem].recipe,
                'editName': this.state.recipes[this.state.currentItem].name,
                'editIndex': this.state.currentItem
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var recipeName = void 0;
            if (this.state.recipes.length > this.state.currentItem) {
                recipeName = this.state.recipes[this.state.currentItem].name;
            }

            var recipeTable = this.state.recipes.map(function (r, i) {
                return React.createElement(
                    'div',
                    { key: i, onClick: function onClick() {
                            _this2.updateCurrentIndex(i);
                        } },
                    React.createElement(
                        'p',
                        null,
                        r.name
                    ),
                    React.createElement('hr', null)
                );
            });

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Recipe Box'
                ),
                React.createElement(
                    'div',
                    { className: 'fixedBox30' },
                    recipeTable
                ),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { className: 'fixedBox60' },
                    React.createElement(
                        'h2',
                        null,
                        recipeName
                    ),
                    React.createElement('div', { className: 'container-fluid', dangerouslySetInnerHTML: { __html: this.updatePreview() } })
                ),
                React.createElement(
                    'div',
                    { className: 'center' },
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-info', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: this.addAction },
                        'Add'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: this.editAction },
                        'Edit'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-danger', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: this.deleteAction },
                        'Delete'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'modal fade', id: 'myModal', role: 'dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-dialog' },
                        React.createElement(
                            'div',
                            { className: 'modal-content' },
                            React.createElement(
                                'div',
                                { className: 'modal-header' },
                                React.createElement(
                                    'h4',
                                    { className: 'modal-title' },
                                    this.state.action
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'modal-body' },
                                React.createElement(
                                    'label',
                                    null,
                                    'Recipe Name:'
                                ),
                                React.createElement('input', { type: 'text', className: 'form-control', value: this.state.editName, onChange: function onChange(e) {
                                        return _this2.setState({ editName: e.target.value });
                                    } }),
                                React.createElement(
                                    'label',
                                    { htmlFor: 'editor' },
                                    'Recipe Markdown (Markdown Previewer ',
                                    React.createElement(
                                        'a',
                                        { target: '_blank', rel: 'noreferrer', href: 'https://link477.com/fccResponsiveWebDesign/markdownPreviewer.html' },
                                        'here'
                                    ),
                                    '):'
                                ),
                                React.createElement('textarea', { id: 'editor', rows: '10', cols: '150', className: 'form-control', onChange: function onChange(e) {
                                        return _this2.setState({ editRecipe: e.target.value });
                                    }, value: this.state.editRecipe })
                            ),
                            React.createElement(
                                'div',
                                { className: 'modal-footer' },
                                React.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-primary', 'data-dismiss': 'modal', onClick: this.saveModal },
                                    this.state.action == 'Delete' ? 'Confirm' : 'Save'
                                ),
                                React.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-warning', 'data-dismiss': 'modal' },
                                    'Cancel'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RecipeBox;
}(React.Component);

var domContainer = document.querySelector('#recipeBox');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(RecipeBox));