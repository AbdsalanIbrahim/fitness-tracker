import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ExerciseDetails() {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/exercises/${id}`)
      .then(response => response.json())
      .then(data => setExercise(data));
  }, [id]);

  if (!exercise) return <p>Loading...</p>;

  return (
    <div>
      <h2>{exercise.exerciseName}</h2>
      <p>Duration: {exercise.duration} minutes</p>
      <p>Calories Burned: {exercise.caloriesBurned}</p>
    </div>
  );
}

export default ExerciseDetails;
