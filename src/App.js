import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Header from './commons/Header';
// import Navbar from './commons/NavBar';
// import Login from './pages/login/Login';
// import Dashboard from './pages/dashboard/Dashboard';
// import Purchase from './pages/purchase/purchase';
// import sales from './pages/sales/sales';
// import Logestics from './pages/logestics/Logestics';
 import Footer from './commons/Footer';
import Sidebar from './sidebar/Sidebar';


function App() {
  return (
    <Router>
      <div>
      <div>
        
      <Header/>
      </div>
      <div> 
        <Sidebar/>
      </div>
      <div>
      <Footer/>
      </div>
      </div>
    </Router>
  );
}


export default App;
