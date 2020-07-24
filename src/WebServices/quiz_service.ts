import {ApiQuestions,MyQuestion} from '../Types/quiz_types'


const shuffleArray=(array:any[])=>
    [...array].sort(()=>Math.random() - 0.5);


export const getAllQuizQuestion=async (questions:number,difficulty:string,category:number):Promise<MyQuestion[]>=>{

    const apicall=await fetch(`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
    let {results}=await apicall.json();

    const quiz:MyQuestion[]=results.map((question:ApiQuestions)=>{
        return{
            question: question.question,
            answer: question.correct_answer,
            choices:shuffleArray(question.incorrect_answers.concat(question.correct_answer))
        }
    })

    return quiz;
}