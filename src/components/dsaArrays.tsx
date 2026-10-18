import { useState, useMemo } from 'react';

export default function StudentGrades() {
  const [currentGrade, setCurrentGrade] = useState<number|''>('');
  const [grades, setGrades] = useState<number[]>([]);

  const currentGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentGrade(e.target.valueAsNumber);
  };

  const gradeAdder = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (currentGrade) {
      setGrades(a => [...a, currentGrade]);
      setCurrentGrade('');
    }
  };

  const avg = useMemo(() => {
    if (grades.length <= 0) return 0;
    return grades.reduce((a, b) => a + b, 0) / grades.length;
  }, [grades]);

  return (
    <div>
      <fieldset>
        <label htmlFor='gradeInput'>
          Add Grade:
          <input
            id='gradeInput'
            name="addGrade"
            type="number"
            className="form-control"
            value={currentGrade}
            onChange={currentGradeChange}
          />
        </label>
        <button type="button" className="btn btn-primary" onClick={gradeAdder}>
          Add Grade
        </button>
      </fieldset>
      <p>Grades:</p>
      <ul>
        {grades.map((grade, idx) => (
          <li key={idx}>{grade}</li>
        ))}
      </ul>
      <p>
        Average Grade: {avg.toFixed(2)}
      </p>
    </div>
  );
}
