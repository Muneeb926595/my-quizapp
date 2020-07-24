import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { quizPropsType } from '../Types/quiz_types';
import { Paper, Button, Radio } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "auto",
        width: "1200px",
        height: "560px",
        boxShadow: "8px 10px 20px rgba(0, 0, 0, 0.12)",
    },
    mainTitle: {
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        lineHeight: "28px",
        textAlign: "center",
        marginBottom: "28px",
        marginTop: "25px"
    },
    question: {
        width: "800px",
        height: "90px",
        background: "#FFFFFF",
        border: "2px solid #5685FF",
        boxShadow: "0px 6px 16px #E9E9E9",
        borderRadius: "12px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontSize: "22px",
        fontWeight: "normal",
        lineHeight: "26px",
        color: "#000000",
        paddingLeft: "20px",
        paddingTop: "10px",
        marginLeft: "20px"

    },
    questionText: {
        maxWidth: "750px",
        maxHeight: "60px"
    },
    questionTitle: {
        fontFamily: "Roboto",
        fontStyle: "bold",
        fontSize: "22px",
        fontWeight: 800,
        marginBottom: "8px",
        color: "#000000"

    },
    myButton: {
        width: "106px",
        height: "42px",
        background: "#FFFFFF",
        boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.12)",
        borderRadius: "12px",
        fontSize: "22px",
        color: "#000000",
        marginLeft: "45%",
        marginTop: "15px"
    },
    myForm: {
        marginTop: "25px",
        marginLeft: "10px",
    },
    myListItem: {
        display: "flex",
        listStyle: "none",
        height: "50px",
        width: "70%",
        marginBottom: "20px",
        boxShadow: "0px 6px 16px #E9E9E9",
        borderRadius: "12px",
        paddingLeft: "20px",
        alignItems: "center"
    },
    checkBox: {
        paddingLeft: "20px",
        paddingRight: "20px",
        marginRight: "10px"
    }
}));

const QuestionCard: React.FC<quizPropsType> = ({
    question,
    choices,
    currentQuestionNumber,
    callback
}) => {
    let classes = useStyles();
    const [userAnswer, setUserAnswer] = useState("");

    const handleChange = (ev: any) => {
        setUserAnswer(ev.target.value);
    }
    return (
        <Paper elevation={3} className={classes.card}>
            <div className={classes.mainTitle}>General Knowledge Quiz</div>
            <div className={classes.question}>
                <div className={classes.questionTitle}>Question : {currentQuestionNumber + 1}</div><span className={classes.questionText}>{question}</span>
            </div>
            <form className={classes.myForm} onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userAnswer)}>
                <ul>
                    {choices.map((choice, index) => {
                        return (
                            <li key={index} className={classes.myListItem}>
                                <Radio
                                    className={classes.checkBox}
                                    checked={choice === userAnswer}
                                    onChange={handleChange}
                                    value={choice}
                                    color="primary"
                                    name="choice"
                                    required={true}
                                />{choice}
                            </li>
                        )
                    })}
                </ul>
                <Button type="submit" className={classes.myButton} variant="contained">Next</Button>
            </form>
        </Paper>
    )
}
export default QuestionCard;