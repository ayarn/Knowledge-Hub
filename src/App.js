import { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";

function App() {

  const [ user, setLoginUser] = useState({})
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: 'url("/bgimg.jpg")' }}>

      <Header />
      
      <Switch>

        <Route path="/" exact>
          <Login setLoginUser={setLoginUser} />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path='/home' exact>
          <Home 
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />
        </Route>

        <Route path='/quiz' exact>
          <Quiz 
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </Route>

        <Route path='/result' exact>
          <Result 
            name={name} score={score}
          />
        </Route>
  
      </Switch>

      </div>

      <Footer />

    </BrowserRouter>
    
  );
}

export default App;
