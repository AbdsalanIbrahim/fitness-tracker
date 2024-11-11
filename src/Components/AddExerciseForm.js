import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddExerciseForm() {
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExercise = { exerciseName, duration, caloriesBurned };

    fetch('http://localhost:4000/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExercise),
    })
      .then(response => response.json())
      .then(() => {
        navigate('/exercises');  
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Exercise Name:
        <input type="text" value={exerciseName} onChange={(e) => setExerciseName(e.target.value)} />
      </label>
      <label>
        Duration (minutes):
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <label>
        Calories Burned:
        <input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} />
      </label>
      <button type="submit">Add Exercise</button>
    </form>
  );
}

export default AddExerciseForm;
