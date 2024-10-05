"use client"; // Client component banane ke liye

import { useState } from 'react';
import '../app/page.module.css'; // Sahi path se global CSS file ko import karna

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      // Messages for specific teachers
      if (name.toLowerCase() === 'shahabuddin') {
        setMessage(`Happy Teacher's Day,Sir ${name}! Your exceptional skills as a TypeScript teacher truly inspire us. Thank you for guiding us with your wisdom and for being a constant source of motivation!`);
      } else if (name.toLowerCase() === 'manahil jameel') {
        setMessage(`Happy Teacher's Day,Miss ${name}! Your dedication and commitment to your students are commendable. Thank you for being such an incredible teacher and for inspiring us every day!`);
      } else if (name.toLowerCase() === 'hamza alvi') {
        setMessage(`Happy Teacher's Day,Sir ${name}! Your support and guidance have made a significant impact on our learning journey. Thank you for being a wonderful mentor and a true inspiration!`);
      } else if (name.toLowerCase() === 'batman') {
        setMessage(`Hello ${name}! Your superhero-like dedication to learning is truly commendable! Remember, every great teacher shares their knowledge like a true hero!`);
      } else {
        setMessage(`Happy Teacher's Day, ${name}! Your hard work and dedication as a teacher are truly appreciated. Thank you for shaping young minds and making a positive impact on our lives!`);
      }
    }
  };

  return (
    <div className="container">
      <div className="background">
        <h1>Happy Teacher&apos;s Day!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Generate Message</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home; // Ensure this is the default export