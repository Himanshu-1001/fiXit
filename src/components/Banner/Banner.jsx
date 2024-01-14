import React, { useEffect } from 'react';
import './Banner.css';

export default function Banner() {
  useEffect(() => {
    const headings = document.querySelectorAll(".banner-content h1");

    let delay = 0;
    headings.forEach((heading) => {
      const text = heading.innerText;
      heading.innerHTML = "";

      text.split("").forEach(function (letter, index) {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${index * 0.3}s`;
        heading.appendChild(span);
      });

      setTimeout(() => {
        heading.classList.add("animating");
      }, delay);

      // Increase delay for the next heading
      delay += text.length * 300 + 1000;
    });
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Fix your Sales</h1>
        <h1>Enabling Human Intelligence With</h1>
        <h1>Artificial Intelligence</h1>
      </div>

      <div className="button-container">
        <button className="btn">Join the waitlist &nbsp;&nbsp;&gt;</button>
      </div>
    </div>
  );
}

