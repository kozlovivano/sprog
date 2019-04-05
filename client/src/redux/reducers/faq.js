const initState = {
    faqs: [
        {
            id: 1,
            question: "This is a question",
            answer: "This is an answer",
            status: false
        },
        {
            id: 2,
            question: "What is the question?",
            answer: "It is a matter requiring resolution or discussion.",
            status: false
        },
        {
            id: 3,
            question: "Why do people have questions?",
            answer: "Because we are human.",
            status: false
        },
        {
            id: 4,
            question: "Why some questions do not have answers?",
            answer: "Because we are not god.",
            status: false
        },
        {
            id: 5,
            question: "How can we find the correct answer?",
            answer: "Ask Sprog!",
            status: false
        }
    ]
}

const faq = (state = initState, action) => {
    return state;
}

export default faq;