import React from 'react';
import { useState } from 'react';

const CaptainHome = () => {
    const [isOnline, setIsOnline] = useState(false);

    return (
        <div className="captain-home">
            <header className="header">
                <h1>Welcome, Captain</h1>
                <div className="status-toggle">
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isOnline}
                            onChange={() => setIsOnline(!isOnline)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="status-text">
                        {isOnline ? 'Online' : 'Offline'}
                    </span>
                </div>
            </header>

            <main className="main-content">
                <div className="stats-container">
                    <div className="stat-box">
                        <h3>Today's Earnings</h3>
                        <p>$0.00</p>
                    </div>
                    <div className="stat-box">
                        <h3>Total Trips</h3>
                        <p>0</p>
                    </div>
                    <div className="stat-box">
                        <h3>Rating</h3>
                        <p>⭐ 0.0</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <button className="primary-btn">Start New Trip</button>
                    <button className="secondary-btn">View History</button>
                </div>
            </main>
        </div>
    );
};

export default CaptainHome;