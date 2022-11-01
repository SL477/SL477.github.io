/* eslint-disable react/react-in-jsx-scope */
'use strict';
// eslint-disable-next-line no-undef
const e = React.createElement;

// eslint-disable-next-line no-undef
class StudentGrades extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grades: [],
            currentGrade: 0,
            words: ['The','quick','brown','fox','jumps','over','the','lazy','dog']
        };
        this.gradeAdder = this.gradeAdder.bind(this);
        this.currentGradeChange = this.currentGradeChange.bind(this);
        this.averageGrade = this.averageGrade.bind(this);
    }

    gradeAdder (e) {
        e.preventDefault();
        let arr = [...this.state.grades];
        arr.push(Number(this.state.currentGrade));
        this.setState({
            grades: arr,
            currentGrade: 0
        });
    }

    currentGradeChange(event) {
        this.setState({
            currentGrade: event.target.value
        });
    }

    averageGrade() {
        if (this.state.grades.length  <= 0) {
            return 0;
        }
        let sum = 0;
        this.state.grades.forEach((grade) => {
            sum += grade;
        });
        return sum / this.state.grades.length;
    }

    render() {
        let gradesShow = this.state.grades.map((grade,i) => {
            return (<li key={i}>{grade}</li>);
        });
        return (
            <div>
                <fieldset>
                    <label htmlFor="addGrade">Add Grade:
                        <input id="addGrade" name="addGrade" type="number" className="form-control" value={this.state.currentGrade} onChange={this.currentGradeChange}/>
                    </label>
                    <button id="btnAddGrade" className="btn btn-primary" onClick={this.gradeAdder}>Add Grade</button>
                </fieldset>
                <p>Grades:</p>
                <ul>
                    {gradesShow}
                </ul>
                <p>Average Grade: {this.averageGrade()}</p>

                <p><b>2. Words</b></p>
                <p>{this.state.words.toString()}</p>
                <p>{this.state.words.reverse().toString()}</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#studentGrades');
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(domContainer);
root.render(e(StudentGrades));