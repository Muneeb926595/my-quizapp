import React, { useEffect, useState } from 'react';
import { getAllQuizQuestion } from './WebServices/quiz_service';
import { MyQuestion } from './Types/quiz_types';
import { makeStyles } from '@material-ui/core/styles';
import QuestionCard from './Components/QuesionCard';
import Loading from './loading.gif';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
      margin: "auto",
      width: "600px",
      height: "250px",
      marginTop: "5rem",
      boxShadow: "8px 10px 20px rgba(255, 21,122, 0.12)",
  }
}));


function App() {
  let classes = useStyles();
  let [quiz, setQuiz] = useState<MyQuestion[]>([]);
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [userResult, setUserResult] = useState(0);
  let [showResult, setShowResult] = useState(false);
  useEffect(() => {
    async function getAllData() {
      let result: MyQuestion[] = await getAllQuizQuestion(5, 'easy',18);
      setQuiz(result);
      console.log(result);
    }
    getAllData();

  }, [])

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAnswer: string) => {

    console.log(userAnswer);

    if (userAnswer === quiz[currentQuestion].answer) {
      setUserResult(++userResult);
    }

    e.preventDefault();
    if (currentQuestion !== quiz.length - 1)
      setCurrentQuestion(++currentQuestion);
    else {
      setShowResult(true);
    }
  }

  if (!quiz.length)
    return <img style={{ marginLeft: "30%" }} src={Loading} alt="pleaseWait" />

  if (showResult) {
    return (
      <Paper elevation={3} className={classes.card}>
        <h1 style={{textAlign: "center",marginBottom:"50px"}}>Result</h1>
        <h3 style={{textAlign: "center"}}>Quiz Completed You got {userResult} out of {quiz.length}</h3>
      </Paper>
    )
  }

  return (
    <div >
      <QuestionCard
        question={quiz[currentQuestion].question}
        choices={quiz[currentQuestion].choices}
        currentQuestionNumber={currentQuestion}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
