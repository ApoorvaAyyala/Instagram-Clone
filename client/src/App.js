import { Route,Routes } from 'react-router-dom';
import CustomContext from './context/CustomContext';
import Post from './routes/Post/Post'; 
import HomeScreen from './routes/Home/HomeScreen';
import RegisterPage from './routes/Register/RegisterPage';
import LoginPage from './routes/Login/LoginPage';
import Profile from './routes/Profile/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ChatRoom from './routes/ChatRoom/ChatRoom';




function App() {

  const userId = localStorage.getItem("userid")

  return (
    <div className="App">
        <CustomContext>
         <Routes>
          <Route path='/' element={
              userId ? <HomeScreen/> : <LoginPage/>
          }/>
          <Route path='/profile/:id' element={
            userId ? <Profile/> : <LoginPage/>
          }/>
          <Route path='/register' element={
            userId ? <HomeScreen/> : <RegisterPage/>
          }/>
          <Route path='/login' element={
            userId ? <HomeScreen/> : <LoginPage/>
          }/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/chat' element={
            userId ? <ChatRoom/> : <LoginPage/>
          }/>
         </Routes>
         </CustomContext>
        
    </div>
  );
}

export default App;
