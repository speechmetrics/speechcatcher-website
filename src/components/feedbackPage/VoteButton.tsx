import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import confetti from "canvas-confetti";

interface VoteButtonProps {
  votes: number;
}

export default function VoteButton({ votes: initialVotes }: VoteButtonProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [hasVoted, setHasVoted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleVote = () => {
    if (!hasVoted) {
      // Increment vote count
      setVotes(votes + 1);
      setHasVoted(true);

      // Get button position for confetti origin
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonTop = buttonRect.top;

        // Calculate origin position (normalize to 0-1 range where 0,0 is top-left of page)
        const originX = buttonCenterX / window.innerWidth;
        const originY = buttonTop / window.innerHeight;

        // Trigger confetti effect from button position, shooting diagonally up and to the left
        confetti({
          particleCount: 25,
          spread: 70,
          origin: { x: originX, y: originY },
          angle: 150, // Angle in degrees (150 is up and to the left)
          startVelocity: 20, // Higher velocity to make the effect more pronounced
          gravity: 0.7, // Slightly reduced gravity to make particles travel farther
          ticks: 80, // Number of ticks for the animation
          decay: 0.92, // Decay rate of particles
        });
      }
    }
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleVote}
      variant="outline"
      size="sm"
      className={`flex flex-col items-center justify-center px-4 py-7 shadow-none ${hasVoted ? "border-blue-300 bg-blue-50" : "bg-white"}`}
      disabled={hasVoted}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${hasVoted ? "text-blue-500" : "text-[#627D98]"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
      <span
        className={`text-sm font-medium ${hasVoted ? "text-blue-500" : "text-[#102A43]"}`}
      >
        {votes}
      </span>
    </Button>
  );
}
