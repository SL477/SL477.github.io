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
            editIndex: -1
        };
        this.updatePreview = this.updatePreview.bind(this);
        this.updateCurrentIndex = this.updateCurrentIndex.bind(this);
        this.saveToLocalStorage = this.saveToLocalStorage.bind(this);
        this.saveModal = this.saveModal.bind(this);
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
    }

    saveModal() {
        let arr = [...this.state.recipes];
        if (this.state.editIndex > -1) {
            arr[this.state.editIndex].name = this.state.editName;
            arr[this.state.editIndex].recipe = this.state.editRecipe;
        }
        else {
            arr.push({
                name: this.state.editName,
                recipe: this.state.editRecipe
            });
        }
        this.setState({
            recipes: arr,
            editName: '',
            editRecipe: '',
            editIndex: -1
        });
        //this.saveToLocalStorage();
    }

    render() {
        let receipeGrid = this.state.recipes.map((r,i) => {
            return (<tr key={i}><td id={i} onClick={
                () => {this.updateCurrentIndex(i);}
            }>{r.name}</td></tr>);
        });
        let recipeName;
        if (this.state.recipes.length > this.state.currentItem) {
            recipeName = this.state.recipes[this.state.currentItem].name;
        }



        return (
            <div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Recipe Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receipeGrid}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2>{recipeName}</h2>
                    <div className="container-fluid" dangerouslySetInnerHTML={{__html: this.updatePreview()}}></div>
                </div>
                <button className="btn btn-primary" onClick={this.saveToLocalStorage}>Save</button>

                <button type="button" className="btn btn-info" data-toggle="modal" data-target="#myModal">Add</button>

                {/*Modal */}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add</h4>
                            </div>
                            <div className="modal-body">
                                <label>Recipe Name:</label>
                                <input type="text" className="form-control" value={this.state.editName} onChange={(e) => {this.setState({editName: e.target.value})}}/>
                                <label htmlFor="editor">Recipe Markdown (Markdown Previewer <a target="_blank" href="https://link477.com/fccResponsiveWebDesign/markdownPreviewer.html">here</a>):</label>
                                <textarea id="editor" rows="10" cols="150" className="form-control" onChange={(e) => {this.setState({editRecipe: e.target.value})}} value={this.state.editRecipe}>
                                    
                                </textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveModal}>Save</button>
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