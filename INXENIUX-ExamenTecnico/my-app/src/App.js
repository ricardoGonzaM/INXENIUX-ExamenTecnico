import logo from './logo.svg';
import './App.css';

//importamos componentes
import CompShowBlogs from './blog/ShowBlog.js';
/*import CompCreateBlog from './blog/CreateBlog.js';*/
import CompEditBlog from './blog/EditBlog.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowBlogs />} />
          <Route path='/edit/:id' element={<CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
