import React from 'react';

const App = () => {
  return (
    <div className="App">
      <section className="sidebar">
        <button className="new-chat-btn">+ New Chat</button>
        <ul className="chat-history">
          <li>Hi there</li>
        </ul>
        <nav>
          <p>Made by Jasan Gill</p>
        </nav>
      </section>
      <section className="main">
        <h1>Calendar Gpt</h1>
        <ul className="feed">
          {/* Add some feed items here */}
        </ul>
        <div className="bottom-container">
          <div className='input-container'>
            <input type="text" placeholder="Type a message" />
            <div className="send-btn">Send</div>
            
          </div>
          <p className="feature-description">
            This is a chatbot that can help you schedule your day-to-day activities.
            </p>
        </div>
        
      </section>
    </div>
  );
};

export default App;
