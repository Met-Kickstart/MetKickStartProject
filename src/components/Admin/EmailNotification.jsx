import React, { useState } from 'react';
import { Mail, Users, Send } from 'lucide-react';
import './EmailNotification.css';

const EmailNotification = () => {
  const [emailData, setEmailData] = useState({
    recipients: 'all', // all, placed, not_placed, in_progress
    subject: '',
    message: '',
    specialization: '', // For filtering by specialization
  });

  const [loading, setLoading] = useState(false);

  const specializations = ['Finance', 'Marketing', 'HR', 'Operations'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API call to send emails would go here
      console.log('Sending email:', emailData);
      alert('Email sent successfully!');
      // Reset form
      setEmailData({
        recipients: 'all',
        subject: '',
        message: '',
        specialization: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="email-notification">
      <div className="page-header">
        <div className="header-content">
          <h2><Mail /> Email Notification</h2>
          <p>Send email notifications to students</p>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>
              <Users size={20} />
              Recipients
            </label>
            <div className="recipients-selection">
              <select
                name="recipients"
                value={emailData.recipients}
                onChange={handleInputChange}
                required
              >
                <option value="all">All Students</option>
                <option value="placed">Placed Students</option>
                <option value="not_placed">Not Placed Students</option>
                <option value="in_progress">In Progress Students</option>
              </select>

              <select
                name="specialization"
                value={emailData.specialization}
                onChange={handleInputChange}
              >
                <option value="">All Specializations</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>
              <Mail size={20} />
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleInputChange}
              placeholder="Enter email subject"
              required
            />
          </div>

          <div className="input-group">
            <label>
              <Mail size={20} />
              Message
            </label>
            <textarea
              name="message"
              value={emailData.message}
              onChange={handleInputChange}
              placeholder="Enter your message"
              rows="6"
              required
            />
          </div>

          <button type="submit" className="send-button" disabled={loading}>
            {loading ? (
              'Sending...'
            ) : (
              <>
                <Send size={20} />
                Send Email
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailNotification;