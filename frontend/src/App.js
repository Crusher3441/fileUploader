import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageGallary from './ImageGallary';
import ImageDetail from './ImageDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<ImageGallary/>}/>
        <Route path='/:id' element={<ImageDetail/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
