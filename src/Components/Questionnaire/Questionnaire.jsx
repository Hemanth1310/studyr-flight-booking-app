import React, { useState } from 'react';
import './Questionnaire.css';
import { useNavigate, useParams } from 'react-router-dom';
import { getDatabase, ref, push } from 'firebase/database';
import questionnaire from '../../assets/questionnaire';
import { app } from '../../firebase';
const database = getDatabase(app);

export const Questionnaire = () => {
    const { fp, cat } = useParams();
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({});
    const [catCurrentIndex, setCatCurrentIndex] = useState(0);
    const [invalidQuestions, setInvalidQuestions] = useState([]);
    const categories = Object.entries(questionnaire);

    const handleAnswer = (e) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });

        // Clear invalidQuestions as they are answered
        setInvalidQuestions((prev) => prev.filter((q) => q !== name));
    };

    const handleNext = () => {
        const [currentCategory, currentQuestions] = categories[catCurrentIndex];

        // Identify unanswered questions
        const missingQuestions = currentQuestions
            .map((_, index) => `${currentCategory}${index}`)
            .filter((key) => !answers || !answers.hasOwnProperty(key));

        if (missingQuestions.length > 0) {
            setInvalidQuestions(missingQuestions);
            alert('Please answer all questions in this category before proceeding.');
            return;
        }

        // Proceed to the next category
        if (catCurrentIndex < categories.length - 1) {
            setCatCurrentIndex(catCurrentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (catCurrentIndex > 0) {
            setCatCurrentIndex(catCurrentIndex - 1);
        }
    };

    const pushFeedback = async () => {
        const feedsRef = ref(database, 'Studyr-feedback-complete');
        push(feedsRef, answers)
            .then(() => {
                console.log('Feedback Data pushed successfully');
            })
            .catch((error) => {
                console.error('Error pushing data: ', error);
            });

        const FormattedData = ref(database, 'Studyr-formatted-data');
        const ans = Object.values(answers);
        push(FormattedData, ans)
            .then(() => {
                console.log('Formatted Data pushed successfully');
            });
    };

    const onSubmit = () => {
        const [currentCategory, currentQuestions] = categories[catCurrentIndex];

        // Check if all questions in the current category have been answered
        const missingQuestions = currentQuestions
            .map((_, index) => `${currentCategory}${index}`)
            .filter((key) => !answers || !answers.hasOwnProperty(key));

        if (missingQuestions.length > 0) {
            setInvalidQuestions(missingQuestions);
            alert('Please answer all questions before submitting.');
            return; // Stop submission
        }

        console.log('QuestionnaireAns ', answers);
        const ans = Object.values(answers);
        console.log('qna', ans);
        localStorage.setItem('userFeedback', JSON.stringify(answers));
        pushFeedback();
        navigate(`/analysis/${fp}/${cat}`);
    };

    const [category, questions] = categories[catCurrentIndex];

    return (
        <div className="ques">
            <h1>Feedback Form</h1>
            <div className="category" key={category}>
                <h2>{category.replace('_', ' ').toUpperCase()}</h2>
                <table className="question-table">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Strongly Disagree</th>
                            <th>Disagree</th>
                            <th>Neutral</th>
                            <th>Agree</th>
                            <th>Strongly Agree</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => (
                            <tr
                                key={index}
                                className={`${
                                    invalidQuestions.includes(`${category}${index}`) ? 'ques-invalid' : ''
                                }`}
                            >
                                <td>{index + 1}. {question}</td>
                                {['0', '1', '2', '3', '4'].map((value) => (
                                    <td key={value}>
                                        <input
                                            type="radio"
                                            name={`${category}${index}`}
                                            value={value}
                                            onChange={handleAnswer}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {catCurrentIndex <= categories.length - 1 ? (
                <div className="ques-form-actions">
                    <button
                        className="ques-bordered-button"
                        disabled={catCurrentIndex === 0}
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="ques-bordered-button"
                        disabled={catCurrentIndex === categories.length - 1}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            ) : null}

            <button
                className="ques-submit-button"
                disabled={catCurrentIndex !== categories.length - 1}
                onClick={onSubmit}
            >
                Submit
            </button>
        </div>
    );
};
