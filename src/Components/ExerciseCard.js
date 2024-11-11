// ExerciseCard.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ExerciseCard.css';

function ExerciseCard() {
  const { id } = useParams(); // Get the exercise ID from the URL
  const [exercise, setExercise] = useState(null); // State to hold the exercise data

  // Fetch exercise data when the component mounts or when ID changes
  useEffect(() => {
    fetch(`http://localhost:4000/exercises/${id}`)
      .then(response => response.json())
      .then(data => setExercise(data))
      .catch((error) => console.error('Error fetching exercise:', error));
  }, [id]);

  // Display loading state while fetching data
  if (!exercise) return <p>Loading...</p>;

  return (
    <div className="exercise-card">
      <img 
        src={exercise.imageUrl || 'https://via.placeholder.com/150'} 
        alt={exercise.exerciseName} 
        className="exercise-image" 
      />
      <div className="exercise-info">
        <h3>{exercise.exerciseName}</h3>
        <p>Duration: {exercise.duration} minutes</p>
        <p>Calories Burned: {exercise.caloriesBurned}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;

