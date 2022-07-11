import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ExerciseDetail, Home } from './pages';
import './App.css';


function App() {
  return (
    <Box>
      <h1>Hello World 👋</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;
