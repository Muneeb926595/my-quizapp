import React from 'react';

export type ApiQuestions = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type MyQuestion={
    question: string
    answer: string
    choices:string[]
}

export type quizPropsType={
    question:string
    choices:string[]
    currentQuestionNumber:number
    callback:(e:React.FormEvent<EventTarget>,userAnswer:string)=>void
}
