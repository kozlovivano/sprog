const initState = {
    faqs: [
        {
            id: 1,
            question: "This is a question",
            answer: "This is an answer"
        },
        {
            id: 2,
            question: "What is the question?",
            answer: "It is a matter requiring resolution or discussion."
        },
        {
            id: 3,
            question: "Why do people have questions?",
            answer: "Because we are human."
        },
        {
            id: 4,
            question: "Why some questions do not have answers?",
            answer: "Because we are not god."
        },
        {
            id: 5,
            question: "How can we find the correct answer?",
            answer: "Ask Sprog!"
        }
    ]
}

const faq = (state = initState, action) => {
    return state;
}

export default faq;