import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import { CreateTodo } from './components/CreateTodo';
import { ListTodo } from './components/ListTodo';
// import {UpdateTodo} from './components/UpdateTodo.jsx';

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Route exact path="/" component={ListTodo} />
        <Route path="/create-todo" component={CreateTodo} />
        {/* <Route path='/UpdateTodo' component={UpdateTodo}/> */}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
