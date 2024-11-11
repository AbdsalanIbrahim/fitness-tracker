import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ExerciseCard.css';

function ExerciseCard() {
  const { id } = useParams(); 
  const [exercise, setExercise] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:4000/exercises/${id}`)
      .then(response => response.json())
      .then(data => setExercise(data))
      .catch((error) => console.error('Error fetching exercise:', error));
  }, [id]);

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

