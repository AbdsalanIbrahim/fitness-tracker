import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExerciseList.css';

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/exercises')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched exercises:', data);  
        setExercises(data);
      })
      .catch((error) => {
        console.error('Error fetching exercises:', error);  
      });
  }, []);

  return (
    <div className="exercise-list-container">
      <h2>Exercise List</h2>
      <div className="exercise-summary">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-item">
            <img
              src={exercise.imageUrl || 'https://via.placeholder.com/150'}
              alt={exercise.exerciseName}
              className="exercise-image"
            />
            <div className="exercise-info">
              <h3>{exercise.exerciseName}</h3>
              <p>Duration: {exercise.duration} mins</p>
              <p>Calories Burned: {exercise.caloriesBurned}</p>
            </div>
            <Link to={`/exercise/${exercise.id}`}>
              <button className="exercise-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseList;

