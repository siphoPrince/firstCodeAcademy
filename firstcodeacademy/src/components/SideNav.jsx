import React, { useState } from "react";
import "../sideNav.css";

function SideNav() {
  // State to track the selected lesson
  const [selectedLesson, setSelectedLesson] = useState({
    videoSrc: "",
    description: "",
    id: null,
  });

  // Quiz state
  const [quizVisible, setQuizVisible] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizFeedback, setQuizFeedback] = useState("");

  // Lesson data
  const lessons = [
    { id: 1, title: "Lesson 1", videoSrc: "https://www.youtube.com/embed/example1", description: "Introduction to Lesson 1" },
    { id: 2, title: "Lesson 2", videoSrc: "https://www.youtube.com/embed/example2", description: "Introduction to Lesson 2" },
    { id: 3, title: "Lesson 3", videoSrc: "https://www.youtube.com/embed/example3", description: "Introduction to Lesson 3" },
    { id: 4, title: "Lesson 4", videoSrc: "https://www.youtube.com/embed/example4", description: "Introduction to Lesson 4" },
  ];

  // Handle lesson click
  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setQuizVisible(false); // Hide quiz when switching lessons
  };

  // Handle quiz submission
  const handleQuizSubmit = () => {
    if (quizAnswer.toLowerCase() === "correct answer") {
      setQuizFeedback("Correct! Great job 🎉");
    } else {
      setQuizFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="platform-container">
      {/* Side Navigation */}
      <nav className="side-container">
        <h2>Lessons</h2>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="lesson-item"
            onClick={() => handleLessonClick(lesson)}
          >
            {lesson.title}
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <div className="content-container">
        {selectedLesson.videoSrc ? (
          <>
            <iframe
              src={selectedLesson.videoSrc}
              title={selectedLesson.title}
              width="800"
              height="450"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="lesson-description">{selectedLesson.description}</p>

            {/* Show Quiz after Lesson 2 */}
            {selectedLesson.id === 2 && (
              <>
                <button
                  onClick={() => setQuizVisible(!quizVisible)}
                  className="quiz-toggle-btn"
                >
                  {quizVisible ? "Hide Quiz" : "Take Quiz"}
                </button>
                {quizVisible && (
                  <div className="quiz-container">
                    <p>What is the main concept introduced in Lesson 2?</p>
                    <input
                      type="text"
                      placeholder="Your answer"
                      value={quizAnswer}
                      onChange={(e) => setQuizAnswer(e.target.value)}
                      className="quiz-input"
                    />
                    <button onClick={handleQuizSubmit} className="quiz-submit-btn">
                      Submit
                    </button>
                    {quizFeedback && <p className="quiz-feedback">{quizFeedback}</p>}
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <p>Please select a lesson to view the content.</p>
        )}
      </div>
    </div>
  );
}

export default SideNav;
