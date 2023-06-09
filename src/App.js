
import React from 'react'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Registration from './Container/Registration'
import Login from'./Container/Login'
import Logout from'./Container/Logout'
import Signup from './Container/Signup'
import Products from './Container/Products'
import Navigation from './Container/Navigation'
import NotFound from './Container/NotFound'

export default function App() {
    return (
      <div>
        <BrowserRouter>
        <Routes>
          <Navigation/>
          <Route path="/" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
         <Route path="/Logout" element={<Logout/>}/>
         <Route path="/Products" element={<Products/>}/>
         <Route path="/Navigation" element={<Navigation/>}/>
         <Route path="/Registration" element={<Registration/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
  
      </BrowserRouter>
      </div>
    )
   }






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
