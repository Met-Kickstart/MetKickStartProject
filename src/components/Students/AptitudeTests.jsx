import React, { useState } from 'react';
import { FaCalculator, FaClock, FaRegCalendarCheck, FaChartLine, FaCheckCircle, FaTrophy, FaMedal, FaLightbulb } from 'react-icons/fa';
import './AptitudeTests.css';

const AptitudeTests = () => {
  const [activeTab, setActiveTab] = useState('available');

  // Example data - in real app, this would come from props or API
  const tests = {
    available: [
      {
        id: 1,
        title: "Quantitative Aptitude - Set 1",
        category: "Quantitative",
        duration: "60 mins",
        questions: 30,
        totalMarks: 60,
        difficulty: "Medium",
        topics: [
          "Time and Work",
          "Probability",
          "Number Series",
          "Data Interpretation"
        ],
        instructions: [
          "Each question carries 2 marks",
          "No negative marking",
          "Calculator not allowed"
        ]
      },
      {
        id: 2,
        title: "Logical Reasoning Test",
        category: "Logical",
        duration: "45 mins",
        questions: 25,
        totalMarks: 50,
        difficulty: "Hard",
        topics: [
          "Verbal Reasoning",
          "Non-verbal Reasoning",
          "Analytical Reasoning",
          "Critical Thinking"
        ],
        instructions: [
          "Each question carries 2 marks",
          "0.5 marks deducted for wrong answers",
          "All questions are compulsory"
        ]
      }
    ],
    completed: [
      {
        id: 3,
        title: "Technical Assessment",
        category: "Technical",
        attemptedOn: "2025-08-01",
        duration: "90 mins",
        score: {
          obtained: 45,
          total: 60,
          percentage: 75
        },
        analytics: {
          accuracy: 80,
          speed: 85,
          difficulty: {
            easy: 90,
            medium: 75,
            hard: 60
          },
          topics: [
            { name: "Data Structures", score: 85 },
            { name: "Algorithms", score: 70 },
            { name: "Programming", score: 80 }
          ]
        },
        rank: 5,
        totalParticipants: 100
      },
      {
        id: 4,
        title: "Verbal Ability Test",
        category: "Verbal",
        attemptedOn: "2025-08-03",
        duration: "45 mins",
        score: {
          obtained: 40,
          total: 50,
          percentage: 80
        },
        analytics: {
          accuracy: 85,
          speed: 90,
          difficulty: {
            easy: 95,
            medium: 80,
            hard: 65
          },
          topics: [
            { name: "Reading Comprehension", score: 90 },
            { name: "Grammar", score: 75 },
            { name: "Vocabulary", score: 85 }
          ]
        },
        rank: 3,
        totalParticipants: 120
      }
    ]
  };

  const getCategoryColor = (category) => {
    const colors = {
      Quantitative: 'var(--category-quant)',
      Logical: 'var(--category-logical)',
      Technical: 'var(--category-technical)',
      Verbal: 'var(--category-verbal)'
    };
    return colors[category] || 'var(--category-default)';
  };

  const getDifficultyBadgeClass = (difficulty) => {
    return `difficulty-badge ${difficulty.toLowerCase()}`;
  };

  return (
    <div className="aptitude-tests">
      <div className="tests-header">
        <h2><FaCalculator /> Aptitude Tests</h2>
        <div className="test-tabs">
          <button 
            className={`tab-btn ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            Available Tests
          </button>
          <button 
            className={`tab-btn ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Tests
          </button>
        </div>
      </div>

      <div className="tests-content">
        {activeTab === 'available' && (
          <div className="tests-grid">
            {tests.available.map(test => (
              <div key={test.id} className="test-card" style={{ '--category-color': getCategoryColor(test.category) }}>
                <div className="test-header">
                  <div className="test-category">
                    <FaLightbulb />
                    <span>{test.category}</span>
                  </div>
                  <h3>{test.title}</h3>
                  <span className={getDifficultyBadgeClass(test.difficulty)}>
                    {test.difficulty}
                  </span>
                </div>

                <div className="test-details">
                  <div className="detail-item">
                    <FaClock className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Duration</span>
                      <span className="value">{test.duration}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <FaCalculator className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Questions</span>
                      <span className="value">{test.questions}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <FaTrophy className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Total Marks</span>
                      <span className="value">{test.totalMarks}</span>
                    </div>
                  </div>
                </div>

                <div className="topics-section">
                  <h4>Topics Covered</h4>
                  <div className="topics-grid">
                    {test.topics.map((topic, index) => (
                      <span key={index} className="topic-badge">{topic}</span>
                    ))}
                  </div>
                </div>

                <div className="instructions-section">
                  <h4>Instructions</h4>
                  <ul className="instructions-list">
                    {test.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>

                <button className="start-test-btn">Start Test</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="tests-grid">
            {tests.completed.map(test => (
              <div key={test.id} className="test-card completed" style={{ '--category-color': getCategoryColor(test.category) }}>
                <div className="test-header">
                  <div className="test-category">
                    <FaCheckCircle />
                    <span>{test.category}</span>
                  </div>
                  <h3>{test.title}</h3>
                  <div className="test-score">
                    <FaMedal className="score-icon" />
                    <span>{test.score.percentage}%</span>
                  </div>
                </div>

                <div className="test-details">
                  <div className="detail-item">
                    <FaRegCalendarCheck className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Attempted On</span>
                      <span className="value">{new Date(test.attemptedOn).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <FaTrophy className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Score</span>
                      <span className="value">{test.score.obtained}/{test.score.total}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <FaChartLine className="detail-icon" />
                    <div className="detail-text">
                      <span className="label">Rank</span>
                      <span className="value">{test.rank}/{test.totalParticipants}</span>
                    </div>
                  </div>
                </div>

                <div className="analytics-section">
                  <h4>Performance Analytics</h4>
                  <div className="analytics-grid">
                    <div className="analytics-item">
                      <span className="analytics-label">Accuracy</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${test.analytics.accuracy}%` }}>
                          <span>{test.analytics.accuracy}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="analytics-item">
                      <span className="analytics-label">Speed</span>
                      <div className="progress-bar">
                        <div className="progress" style={{ width: `${test.analytics.speed}%` }}>
                          <span>{test.analytics.speed}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="topic-performance">
                    <h5>Topic-wise Performance</h5>
                    <div className="topics-progress">
                      {test.analytics.topics.map((topic, index) => (
                        <div key={index} className="topic-progress-item">
                          <span className="topic-name">{topic.name}</span>
                          <div className="progress-bar">
                            <div className="progress" style={{ width: `${topic.score}%` }}>
                              <span>{topic.score}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="view-solution-btn">View Solutions</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AptitudeTests;
