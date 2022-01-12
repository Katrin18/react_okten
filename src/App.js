import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users'
import Posts from './components/posts/Posts'
import Comments from './components/comments/Comments'


function App() {
  return (
      <div className="App">
        <div className='first'>
          <Users className='users'/>
          <hr/>
          <Posts/>
        </div>
        <hr/>
        <div className='second'>
          <Comments/>
        </div>
      </div>
  );
}

export default App;
