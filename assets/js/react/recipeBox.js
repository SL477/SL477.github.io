/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var e = React.createElement;

var actions = {
    Add: 'Add',
    Delete: 'Delete',
    Edit: 'Edit'
};

var Recipe = function Recipe(name, recipe) {
    _classCallCheck(this, Recipe);

    this.name = '';
    this.recipe = '';

    this.name = name;
    this.recipe = recipe;
};

function RecipeBox() {
    // eslint-disable-next-line no-undef
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        recipes = _React$useState2[0],
        setRecipes = _React$useState2[1];
    // eslint-disable-next-line no-undef


    var _React$useState3 = React.useState(0),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        currentItem = _React$useState4[0],
        setCurrentItem = _React$useState4[1];
    // eslint-disable-next-line no-undef


    var _React$useState5 = React.useState(''),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        editName = _React$useState6[0],
        setEditName = _React$useState6[1];
    // eslint-disable-next-line no-undef


    var _React$useState7 = React.useState(''),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        editRecipe = _React$useState8[0],
        setEditRecipe = _React$useState8[1];
    // eslint-disable-next-line no-undef


    var _React$useState9 = React.useState(-1),
        _React$useState10 = _slicedToArray(_React$useState9, 2),
        editIndex = _React$useState10[0],
        setEditIndex = _React$useState10[1];
    // eslint-disable-next-line no-undef


    var _React$useState11 = React.useState(actions.Add),
        _React$useState12 = _slicedToArray(_React$useState11, 2),
        action = _React$useState12[0],
        setAction = _React$useState12[1];
    // eslint-disable-next-line no-undef


    var _React$useState13 = React.useState(false),
        _React$useState14 = _slicedToArray(_React$useState13, 2),
        showModal = _React$useState14[0],
        setShowModal = _React$useState14[1];
    // eslint-disable-next-line no-undef


    React.useEffect(function () {
        var existingRecipes = localStorage.getItem('recipeBox');
        if (!existingRecipes) {
            var arr = [];
            var r1 = {
                name: 'Beans on toast',
                recipe: '1. Cook beans\n2. Make toast\n3. Put beans on toast'
            };
            arr.push(r1);
            arr.push(new Recipe('test', 'testing'));
            arr.push(new Recipe('Cake', '- 4 Eggs\n- 4 ounces butter\n- 4 ounces I can\'t believe it\'s not butter\n- 8 ounces sugar\n- 8 ounces self-raising flour\n\n1. Mix the sugar & butter\n2. Beat in the eggs\n3. Fold in the flour\n4. Bake at 180\xB0c for 20 minutes\n\n## Buttercream Icing\n\n- 4 ounces icing sugar\n- 2 ounces butter\n- Some melted chocolate\n- Some boiling water'));
            setRecipes(arr);
        } else {
            setRecipes(JSON.parse(existingRecipes).data);
        }
    }, []);

    var updatePreview = function updatePreview() {
        if (recipes.length <= currentItem) {
            return '';
        }
        // eslint-disable-next-line no-undef
        var renderer1 = new marked.Renderer();
        renderer1.link = function (href, title, text) {
            return '<a target="_blank" href="' + href + '">' + text + '</a>';
        };

        // eslint-disable-next-line no-undef
        return marked(recipes[currentItem].recipe, {
            gfm: true,
            breaks: true,
            renderer: renderer1
        });
    };

    var saveToLocalStorage = function saveToLocalStorage() {
        var saveData = JSON.stringify({ data: recipes });
        // console.log('saveData', saveData);
        localStorage.setItem('recipeBox', saveData);
        // console.log('save to local');
    };

    var saveModal = function saveModal() {
        var arr = [].concat(_toConsumableArray(recipes));
        var curIndex = currentItem;
        if (action === actions.Delete) {
            arr.splice(editIndex, 1);
            curIndex -= 1;
        } else {
            if (editIndex > -1) {
                arr[editIndex].name = editName;
                arr[editIndex].recipe = editRecipe;
            } else {
                arr.push({
                    name: editName,
                    recipe: editRecipe
                });
                curIndex = arr.length - 1;
            }
        }
        setRecipes(arr);
        setEditName('');
        setEditRecipe('');
        setEditIndex(-1);
        setCurrentItem(curIndex);
        setShowModal(false);
        saveToLocalStorage();
    };

    var addAction = function addAction() {
        setAction(actions.Add);
        setShowModal(true);
    };

    var editAction = function editAction() {
        setAction(actions.Edit);
        setEditRecipe(recipes[currentItem].recipe);
        setEditName(recipes[currentItem].name);
        setEditIndex(currentItem);
        setShowModal(true);
    };

    var deleteAction = function deleteAction() {
        setAction(actions.Delete);
        setEditRecipe(recipes[currentItem].recipe);
        setEditName(recipes[currentItem].name);
        setEditIndex(currentItem);
        setShowModal(true);
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'fixedBox30' },
            recipes.map(function (r, i) {
                return React.createElement(
                    'div',
                    { key: i, onClick: function onClick() {
                            return setCurrentItem(i);
                        } },
                    React.createElement(
                        'p',
                        null,
                        r.name
                    ),
                    React.createElement('hr', null)
                );
            })
        ),
        React.createElement('br', null),
        React.createElement(
            'div',
            { className: 'fixedBox60' },
            React.createElement(
                'h2',
                null,
                recipes.length > currentItem ? recipes[currentItem].name : ''
            ),
            React.createElement('div', { className: 'container-fluid', dangerouslySetInnerHTML: { __html: updatePreview() } })
        ),
        React.createElement(
            'div',
            { className: 'center' },
            React.createElement(
                'button',
                { type: 'button', className: 'btn btn-info', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: addAction },
                'Add'
            ),
            React.createElement(
                'button',
                { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: editAction },
                'Edit'
            ),
            React.createElement(
                'button',
                { type: 'button', className: 'btn btn-danger', 'data-toggle': 'modal', 'data-target': '#myModal', onClick: deleteAction },
                'Delete'
            )
        ),
        showModal ? React.createElement(
            'div',
            { className: 'myModalBackground' },
            React.createElement(
                'div',
                { className: 'myModal' },
                React.createElement(
                    'h2',
                    null,
                    action,
                    React.createElement(
                        'span',
                        { className: 'myCloseBtn', onClick: function onClick() {
                                return setShowModal(false);
                            } },
                        '\xD7'
                    )
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'myContent' },
                    React.createElement(
                        'label',
                        null,
                        'Recipe Name:',
                        React.createElement('input', { name: 'recipeName', type: 'text', className: 'form-control', value: editName, onChange: function onChange(e) {
                                return setEditName(e.target.value);
                            } })
                    ),
                    React.createElement(
                        'label',
                        { htmlFor: 'editor' },
                        'Recipe Markdown (Markdown Previewer ',
                        React.createElement(
                            'a',
                            { target: '_blank', rel: 'noreferrer', href: '/fccResponsiveWebDesign/markdownPreviewer.html' },
                            'here'
                        ),
                        '):'
                    ),
                    React.createElement('textarea', { id: 'editor', rows: '10', cols: '150', className: 'form-control', onChange: function onChange(e) {
                            return setEditRecipe(e.target.value);
                        }, value: editRecipe })
                ),
                React.createElement('hr', null),
                React.createElement(
                    'div',
                    { className: 'myActions' },
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-primary', onClick: saveModal },
                        action == actions.Delete ? 'Confirm' : 'Save'
                    ),
                    React.createElement(
                        'button',
                        { type: 'button', className: 'btn btn-warning', onClick: function onClick() {
                                return setShowModal(false);
                            } },
                        'Cancel'
                    )
                )
            )
        ) : null
    );
}

var domContainer = document.querySelector('#recipeBox');
// eslint-disable-next-line no-undef
var root = ReactDOM.createRoot(domContainer);
root.render(e(RecipeBox));