import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import API from './Components/API';
import JobBoard from './Components/JobBoard';
import AddJob from './Components/AddJob';
import Header from './Components/Header';
import EditJob from './Components/EditJob';

function App() {
  return (
    <div className="App container">
      <Header />
      <BrowserRouter>
      <Route exact path="/" component={JobBoard } />
      <Route exact path="/addjob" component={AddJob } />
      <Route exact path="/job/:id" component={EditJob } />
      </BrowserRouter>
      <API />
    </div>
  );
}

export default App;
