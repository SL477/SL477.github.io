'use strict';
const e = React.createElement;

class RecipeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
            currentItem: 0,
            editName: '',
            editRecipe: '',
            editIndex: -1,
            action: 'Add'
        };
        this.updatePreview = this.updatePreview.bind(this);
        this.updateCurrentIndex = this.updateCurrentIndex.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.saveModal = this.saveModal.bind(this);
        this.addAction = this.addAction.bind(this);
        this.editAction = this.editAction.bind(this);
        this.deleteAction = this.deleteAction.bind(this);
    }

    componentDidMount() {
        console.log('mounted');
        let existingRecipes = localStorage.getItem("recipeBox");
        if (!existingRecipes) {
            let arr = [];
            let r1 = {
                name: "Beans on toast",
                recipe: `# Beans on Toast
                1. Cook beans
                2. Make toast
                3. Put beans on toast`
            };
            arr.push(r1);
            arr.push({name: 'test', recipe: 'testing'});
            this.setState({recipes: arr});
        }
        else {
            this.setState({recipes: JSON.parse(existingRecipes).data});
        }
    }

    updatePreview() {
        if (this.state.recipes.length <= this.state.currentItem) {
            return '';
        }
        const renderer1 = new marked.Renderer();
        renderer1.link = function (href, title, text) {
            return '<a target="_blank" href="' + href + '">' + text + '</a>';
        };

        let ret = marked(this.state.recipes[this.state.currentItem].recipe, {
            gfm: true,
            breaks: true, 
            renderer: renderer1
        });
        return ret;
    }

    updateCurrentIndex(ind) {
        this.setState({currentItem: ind});
    }

    saveToLocalStorage() {
        let saveData = JSON.stringify({data: this.state.recipes});
        console.log('saveData', saveData);
        localStorage.setItem("recipeBox", saveData);
        console.log('save to local');
    }

    saveModal() {
        let arr = [...this.state.recipes];
        let curIndex = this.state.currentItem;
        if (this.state.action === 'Delete') {
            arr.splice(this.state.editIndex,1);
            curIndex -= 1;
        }
        else {
            if (this.state.editIndex > -1) {
                arr[this.state.editIndex].name = this.state.editName;
                arr[this.state.editIndex].recipe = this.state.editRecipe;
            }
            else {
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
        },
        this.saveToLocalStorage
        );
    }

    addAction() {
        this.setState({'action': 'Add'});
    }

    editAction() {
        this.setState({
            'action': 'Edit',
            'editRecipe': this.state.recipes[this.state.currentItem].recipe,
            'editName': this.state.recipes[this.state.currentItem].name,
            'editIndex': this.state.currentItem
        });
    }

    deleteAction() {
        this.setState({
            'action': 'Delete',
            'editRecipe': this.state.recipes[this.state.currentItem].recipe,
            'editName': this.state.recipes[this.state.currentItem].name,
            'editIndex': this.state.currentItem
        });
    }

    render() {
        let recipeName;
        if (this.state.recipes.length > this.state.currentItem) {
            recipeName = this.state.recipes[this.state.currentItem].name;
        }

        let recipeTable = this.state.recipes.map((r,i) => {
            return (
                <div key={i} onClick={() => {this.updateCurrentIndex(i);}}>
                    <p>{r.name}</p>
                    <hr/>
                </div>
            );
        });

        return (
            <div>
                <h1>Recipe Box</h1>
                <div className="fixedBox30">{recipeTable}</div>
                <br/>
                <div className="fixedBox60">
                    <h2>{recipeName}</h2>
                    <div className="container-fluid" dangerouslySetInnerHTML={{__html: this.updatePreview()}}></div>
                </div>

                <div className="center">
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal" onClick={this.addAction}>Add</button>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.editAction}>Edit</button>
                    <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#myModal" onClick={this.deleteAction}>Delete</button>
                </div>
                
                {/*Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">{this.state.action}</h4>
                            </div>
                            <div className="modal-body">
                                <label>Recipe Name:</label>
                                <input type="text" className="form-control" value={this.state.editName} onChange={(e) => {this.setState({editName: e.target.value})}}/>
                                <label htmlFor="editor">Recipe Markdown (Markdown Previewer <a target="_blank" href="https://link477.com/fccResponsiveWebDesign/markdownPreviewer.html">here</a>):</label>
                                <textarea id="editor" rows="10" cols="150" className="form-control" onChange={(e) => {this.setState({editRecipe: e.target.value})}} value={this.state.editRecipe}>
                                    
                                </textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveModal}>{this.state.action == "Delete"? 'Confirm' : 'Save'}</button>
                                <button type="button" className="btn btn-warning" data-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const domContainer = document.querySelector("#recipeBox");
ReactDOM.render(e(RecipeBox),domContainer);