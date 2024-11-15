import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddExerciseForm.css';

function AddExerciseForm() {
  const [exerciseName, setExerciseName] = useState('');
  const [duration, setDuration] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exerciseName || !duration || !caloriesBurned || !imageUrl) {
      alert('Please fill in all fields.');
      return;
    }

    const newExercise = { exerciseName, duration, caloriesBurned, imageUrl };

    fetch('http://localhost:4000/exercises', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newExercise),
    })
      .then(response => response.json())
      .then(() => {
        setExerciseName('');
        setDuration('');
        setCaloriesBurned('');
        setImageUrl('');
        
        navigate('/exercises');  
      })
      .catch((error) => {
        console.error('Error adding exercise:', error);
        alert('There was an error while adding the exercise.');
      });
  };

  return (
    <div className="add-exercise-form-container">
      <h2>Add New Exercise</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exercise Name:</label>
          <input
            type="text"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Duration (minutes):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Calories Burned:</label>
          <input
            type="number"
            value={caloriesBurned}
            onChange={(e) => setCaloriesBurned(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">Add Exercise</button>
      </form>
    </div>
  );
}

export default AddExerciseForm;
