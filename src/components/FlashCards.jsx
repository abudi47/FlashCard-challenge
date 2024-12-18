import { useState } from "react";

const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];


export const FlashCards = () => {
    const [selectedId,setSelectedId] = useState(null);
    function handleId(id) {
        setSelectedId(id);

    }

  
  return (

    <div className="flashcards">
        {questions.map((que) => (
            <div key={que.id} 
                  className={que.id === selectedId ? "selected" : ""}
                  onClick={() => handleId(que.id)}

                    >
                <p>
                    {que.id === selectedId ? que.answer : que.question}</p>

                </div>

        ))}
    </div>
    // <div className="flashcards">
    //   {questions.map((question) => (
    //     <Disp key={question.id} question={question.question} answer={question.answer}/>
    //   ))}
    // </div>

  )
}

// function Disp({ question, answer }) {
//     const [showAnswer, setShowAnswer] = useState(false);
  
//     const handleClick = () => {
//       setShowAnswer((prev) => !prev);
//     };
  
//     return (
//       <div  className={showAnswer ? "selected" : ""} onClick={handleClick}>
//         {showAnswer ? <p className="selected">{answer}</p> : <p>{question}</p>}
//       </div>
//     );
//   }
