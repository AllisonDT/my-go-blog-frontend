// pages/index.js
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  // This state is optional if you need to display score outside the canvas,
  // but the in-game drawing will use scoreRef
  const [score, setScore] = useState(0);
  const scoreRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const groundY = 180; // y-coordinate for the ground line

    // Penguin (player) settings
    const penguin = {
      x: 50,
      y: groundY - 30, // position so it stands on the ground
      width: 30,
      height: 30,
      dy: 0,
      gravity: 0.6,
      jumpStrength: -12,
      isJumping: false,
    };

    // Returns a new obstacle with random width and height (between 20 and 50)
    const getRandomObstacle = () => {
      const width = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
      const height = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
      return {
        x: canvas.width,
        y: groundY - height,
        width,
        height,
        speed: 6,
      };
    };

    let obstacle = getRandomObstacle();

    // Listen for Space or Up Arrow key to jump
    const keyDownHandler = (e) => {
      if (
        (e.code === 'Space' || e.code === 'ArrowUp') &&
        !penguin.isJumping &&
        !gameOver
      ) {
        penguin.dy = penguin.jumpStrength;
        penguin.isJumping = true;
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    // Function to draw a simple penguin using canvas shapes
    const drawPenguin = (ctx, x, y, width, height) => {
      // Draw body as a black ellipse
      ctx.beginPath();
      ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();

      // Draw belly as a white ellipse
      ctx.beginPath();
      ctx.ellipse(x + width / 2, y + height / 2 + height * 0.1, width / 3, height / 3, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();

      // Draw eye as a small white circle
      ctx.beginPath();
      ctx.arc(x + width * 0.65, y + height * 0.35, width * 0.1, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();

      // Draw beak as a small orange triangle
      ctx.beginPath();
      ctx.moveTo(x + width * 0.5, y + height * 0.45);
      ctx.lineTo(x + width * 0.6, y + height * 0.5);
      ctx.lineTo(x + width * 0.5, y + height * 0.55);
      ctx.fillStyle = 'orange';
      ctx.fill();
    };

    // Main game loop
    const update = () => {
      // Clear the canvas for redrawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update penguin's vertical position
      penguin.y += penguin.dy;
      penguin.dy += penguin.gravity;

      // Prevent falling below ground level
      if (penguin.y > groundY - penguin.height) {
        penguin.y = groundY - penguin.height;
        penguin.dy = 0;
        penguin.isJumping = false;
      }

      // Move the obstacle to the left
      obstacle.x -= obstacle.speed;
      if (obstacle.x + obstacle.width < 0) {
        obstacle = getRandomObstacle();
        scoreRef.current += 1; // Update the mutable ref
        setScore(scoreRef.current); // Optionally sync with state
      }

      // Draw ground
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(canvas.width, groundY);
      ctx.strokeStyle = '#000';
      ctx.stroke();

      // Draw the penguin using our custom function
      drawPenguin(ctx, penguin.x, penguin.y, penguin.width, penguin.height);

      // Draw the obstacle as a black rectangle (block)
      ctx.fillStyle = 'black';
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);

      // Draw the score using the ref's current value
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${scoreRef.current}`, 10, 25);

      // Collision detection
      if (
        penguin.x < obstacle.x + obstacle.width &&
        penguin.x + penguin.width > obstacle.x &&
        penguin.y < obstacle.y + obstacle.height &&
        penguin.y + penguin.height > obstacle.y
      ) {
        setGameOver(true);
        return; // Stop the game loop on collision
      }

      animationFrameId = requestAnimationFrame(update);
    };

    update();

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Welcome to My Portfolio</h1>
        <canvas
          ref={canvasRef}
          width={800}
          height={200}
          style={{ border: '1px solid #000' }}
        />
        {gameOver && (
          <div>
            <h2>Game Over</h2>
            <button onClick={() => window.location.reload()}>Reset Game</button>
          </div>
        )}
        <p>Press Space or the Up Arrow to jump</p>
      </div>
    </div>
  );
}
