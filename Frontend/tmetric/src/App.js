import './App.css';
import ChooseWorkSpace from './pages/ChooseWorkSpace';
import ConfirmEmail from './pages/ConfirmEmail';
import IntegrateTTWorkFlowPage from './pages/IntegrateTTWorkflowPage';
import Navbar from './pages/Navbar';
import SetupAlmostComp from './pages/SetupAlmostComp';
import Signin from './pages/Signin';
import WorkSpacePage from './pages/WorkSpacePage';
import Allroutes from './routes/Allroutes';

function App() {
  return (
    <div className="App">
        <Navbar />
       <Allroutes />
  
      
    </div>
  );
}

export default App;
