import React, { useState } from 'react';
import './Search.css';
import fetchQuery from '../../api';

export default function Search() {
    const [search, setSearch] = useState('');
    const [botResponse, setBotResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetchQuery('/bot', { info: search });
            setBotResponse(res.response);
            setSearch('');
        } catch (error) {
            console.error(error);
            setBotResponse('');
        }
    };

    return (
        <section className="search-section">
            <form onSubmit={handleSubmit} className="search-form">
                <div className="search-container">
                    <input
                        aria-label="Search"
                        placeholder="SalesGPT can help you to browse uncovered topics"
                        className="search-input"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="1em" width="1em">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </form>

            {botResponse && (
                <div className="bot-response">
                    <p>{botResponse}</p>
                </div>
            )}
        </section>
    );
}
