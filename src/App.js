import logo from './logo.svg';
import './App.css';

// importamos los componentes
import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';

// importar el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs/>} />
          <Route path='/create' element={<CompCreateBlog/>} />
          <Route path='/edit/:id' element={<CompEditBlog/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
