import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ExerciseList from './Components/ExerciseList';
import ExerciseCard from './Components/ExerciseCard';
import AddExerciseForm from './Components/AddExerciseForm';
import ExerciseDetails from './Components/ExerciseDetails';
import './App.css';

const exerciseData = [
  {
    id: 1,
    exerciseName: 'Running',
    duration: 30,
    caloriesBurned: 300,
    imageUrl: 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2023/5/18/imqsyjufelxhawrrfivs/melbourne-running',
  },
  {
    id: 2,
    exerciseName: 'Swimming',
    duration: 45,
    caloriesBurned: 400,
    imageUrl: 'https://th.bing.com/th/id/R.02f14d72547341dff31d24d66175d7c1?rik=Evynfe3O3BvVlQ&pid=ImgRaw&r=0',
  },
  {
    "id": 3,
    "exerciseName": "Cycling",
    "duration": 60,
    "caloriesBurned": 500,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq28ywwvdlSZVcVy2uG0D6DhFc-EM5TKeP3MX0XwJwrojHqt_lAHPzIzt0ETV9_A94tkc&usqp=CAU"
  },
  {
    "id": 4,
    "exerciseName": "Yoga",
    "duration": 45,
    "caloriesBurned": 250,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgDTVPNP4uKdApkLIgD8hAkzvwUUPsSVnnCzqhGEZAszuhvQ5-FWs8R2jw2LzfU7AwhU&usqp=CAU"
  },
  {
    "id": 5,
    "exerciseName": "Jump Rope",
    "duration": 20,
    "caloriesBurned": 150,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwB7A9E10lMn1EyouT-rrhomjzNAehMC17xQ&s"
  },
  {
    "id": 6,
    "exerciseName": "Weightlifting",
    "duration": 40,
    "caloriesBurned": 350,
    "imageUrl": "https://backcountry.physio/wp-content/uploads/2023/10/Screenshot2023-10-30124539.jpg"
  },
  {
    "id": 7,
    "exerciseName": "Hiking",
    "duration": 90,
    "caloriesBurned": 600,
    "imageUrl": "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/2019-8/couple-hiking-mountain-climbing-1296x728-header.jpg?w=1155&h=1528"
  },
  {
    "id": 8,
    "exerciseName": "Boxing",
    "duration": 30,
    "caloriesBurned": 400,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTF4bm0wvzkD1PuWCQ2Le3X4xzOinLPgWeqQ&s"
  },
  {
    "id": 9,
    "exerciseName": "Pilates",
    "duration": 50,
    "caloriesBurned": 300,
    "imageUrl": "https://cdn.prod.website-files.com/6474525654e763b2569e6b78/6541bc6dc2cdfb8dc7f64b89_64a4feaaba4b95d0185337ef_foundation-banner-image2.webp"
  },
  {
    "id": 10,
    "exerciseName": "Stretching",
    "duration": 20,
    "caloriesBurned": 100,
    "imageUrl": "https://th.bing.com/th/id/OIP.ETwrHgdk0Fpz5s5s1hLPKwHaE8?rs=1&pid=ImgDetMain"
  },
  {
    "id": 11,
    "exerciseName": "Rowing",
    "duration": 40,
    "caloriesBurned": 350,
    "imageUrl": "https://www.concept2.com/_next/image?url=https%3A%2F%2Fcms.concept2.com%2F%2Fsites%2Fdefault%2Ffiles%2F2024-07%2FGBMensEight.jpg&w=3840&q=75"
  },
  {
    "id": 12,
    "exerciseName": "Dancing",
    "duration": 60,
    "caloriesBurned": 400,
    "imageUrl": "https://www.communitydance.org.uk/content/46403/Live/image_phone/NetworksWEB.jpg"
  },
  {
    "id": 13,
    "exerciseName": "CrossFit",
    "duration": 50,
    "caloriesBurned": 500,
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDv6ccTIxeaE598xA3HMYTRLThVadYXRFEXg&s"
  }
];

function Home() {
  return (
    <div className="home">
      <h2>Exercise Summary</h2>
      <div className="exercise-summary">
        {exerciseData.map(exercise => (
          <div key={exercise.id} className="exercise-item">
            <img src={exercise.imageUrl} alt={exercise.exerciseName} className="exercise-image" />
            <h3>{exercise.exerciseName}</h3>
            <p>Duration: {exercise.duration} mins</p>
            <p>Calories Burned: {exercise.caloriesBurned}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        
        <div className="app-container">
          <h1>Fitness Tracker</h1>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<ExerciseList />} />
            <Route path="/exercise/:id" element={<ExerciseCard />} />
            <Route path="/add" element={<AddExerciseForm />} />
            <Route path="/exerciseDetails/:id" element={<ExerciseDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
