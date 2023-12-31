/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef
const e = React.createElement;

const actions = {
    Add: 'Add',
    Delete: 'Delete',
    Edit: 'Edit'
};

class Recipe {
    name = '';
    recipe = '';

    constructor(name, recipe) {
        this.name = name;
        this.recipe = recipe;
    }
}

function RecipeBox() {
    // eslint-disable-next-line no-undef
    const [recipes, setRecipes] = React.useState([]);
    // eslint-disable-next-line no-undef
    const [currentItem, setCurrentItem] = React.useState(0);
    // eslint-disable-next-line no-undef
    const [editName, setEditName] = React.useState('');
    // eslint-disable-next-line no-undef
    const [editRecipe, setEditRecipe] = React.useState('');
    // eslint-disable-next-line no-undef
    const [editIndex, setEditIndex] = React.useState(-1);
    // eslint-disable-next-line no-undef
    const [action, setAction] = React.useState(actions.Add);
    // eslint-disable-next-line no-undef
    const [showModal, setShowModal] = React.useState(false);
    // eslint-disable-next-line no-undef
    React.useEffect(() => {
        let existingRecipes = localStorage.getItem('recipeBox');
        if (!existingRecipes) {
            const arr = [];
            const r1 = {
                name: 'Beans on toast',
                recipe: `1. Cook beans
2. Make toast
3. Put beans on toast`
            };
            arr.push(r1);
            arr.push(new Recipe('test', 'testing'));
            arr.push(new Recipe('Cake', `- 4 Eggs
- 4 ounces butter
- 4 ounces I can't believe it's not butter
- 8 ounces sugar
- 8 ounces self-raising flour

1. Mix the sugar & butter
2. Beat in the eggs
3. Fold in the flour
4. Bake at 180°c for 20 minutes

## Buttercream Icing

- 4 ounces icing sugar
- 2 ounces butter
- Some melted chocolate
- Some boiling water`));
            setRecipes(arr);
        }
        else {
            setRecipes(JSON.parse(existingRecipes).data);
        }
    }, []);

    const updatePreview = () => {
        if (recipes.length <= currentItem) {
            return '';
        }
        // eslint-disable-next-line no-undef
        const renderer1 = new marked.Renderer();
        renderer1.link = function (href, title, text) {
            return `<a target="_blank" href="${href}">${text}</a>`;
        };

        // eslint-disable-next-line no-undef
        return marked(recipes[currentItem].recipe, {
            gfm: true,
            breaks: true, 
            renderer: renderer1
        });
    };

    const saveToLocalStorage = () => {
        const saveData = JSON.stringify({data: recipes});
        // console.log('saveData', saveData);
        localStorage.setItem('recipeBox', saveData);
        // console.log('save to local');
    };

    const saveModal = () => {
        const arr = [...recipes];
        let curIndex = currentItem;
        if (action === actions.Delete) {
            arr.splice(editIndex, 1);
            curIndex -= 1;
        }
        else {
            if (editIndex > -1) {
                arr[editIndex].name = editName;
                arr[editIndex].recipe = editRecipe;
            }
            else {
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

    const addAction = () => {
        setAction(actions.Add);
        setShowModal(true);
    };

    const editAction = () => {
        setAction(actions.Edit);
        setEditRecipe(recipes[currentItem].recipe);
        setEditName(recipes[currentItem].name);
        setEditIndex(currentItem);
        setShowModal(true);
    };

    const deleteAction = () => {
        setAction(actions.Delete);
        setEditRecipe(recipes[currentItem].recipe);
        setEditName(recipes[currentItem].name);
        setEditIndex(currentItem);
        setShowModal(true);
    };

    return (
        <div>
            <div className="fixedBox30">
                {recipes.map((r, i) => (
                    <div key={i} onClick={() => setCurrentItem(i)}>
                        <p>{r.name}</p>
                        <hr />
                    </div>
                ))}
            </div>
            <br />
            <div className="fixedBox60">
                <h2>{recipes.length > currentItem ? recipes[currentItem].name : ''}</h2>
                <div className="container-fluid" dangerouslySetInnerHTML={{__html: updatePreview()}}></div>
            </div>
            <div className="center">
                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={addAction}>Add</button>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={editAction}>Edit</button>
                <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal" onClick={deleteAction}>Delete</button>
            </div>
            {/*Modal */}
            {showModal? (
                <div className="myModalBackground">
                    <div className="myModal">
                        <h2>{action}
                            <span className="myCloseBtn" onClick={() => setShowModal(false)}>
                                &times;
                            </span>
                        </h2>
                        <hr/>
                        <div className="myContent">
                            <label>Recipe Name:
                                <input name="recipeName" type="text" className="form-control" value={editName} onChange={(e) => setEditName(e.target.value)}/>
                            </label>
                            <label htmlFor="editor">Recipe Markdown (Markdown Previewer <a target="_blank" rel="noreferrer" href="/fccResponsiveWebDesign/markdownPreviewer.html">here</a>):</label>
                            <textarea id="editor" rows="10" cols="150" className="form-control" onChange={(e) => setEditRecipe(e.target.value)} value={editRecipe}>
                            
                            </textarea>
                        </div>
                        <hr />
                        <div className="myActions">
                            <button type="button" className="btn btn-primary" onClick={saveModal}>{action == actions.Delete? 'Confirm' : 'Save'}</button>
                            <button type="button" className="btn btn-warning" onClick={() => setShowModal(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}


const domContainer = document.querySelector('#recipeBox');
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(domContainer);
root.render(e(RecipeBox));