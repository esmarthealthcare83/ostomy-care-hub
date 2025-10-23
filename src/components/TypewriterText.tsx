import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

interface TypewriterTextProps {
  text: string;
  speed?: number; // milliseconds per character
  delay?: number; // delay before starting
  loop?: boolean; // whether to loop
  className?: string;
  showCursor?: boolean;
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  loop = false,
  className = '',
  showCursor = true,
  cursorClassName = '',
}) => {
  const { displayText, isComplete } = useTypewriter({ text, speed, delay, loop });

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && (
        <span
          className={`inline-block w-0.5 h-5 ml-1 bg-current animate-pulse ${cursorClassName}`}
          style={{
            animation: 'blink 1s infinite',
          }}
        />
      )}
      {showCursor && isComplete && !loop && (
        <span className={`inline-block w-0.5 h-5 ml-1 bg-current/30 ${cursorClassName}`} />
      )}
    </span>
  );
};

export default TypewriterText;

// Add this to your CSS or Tailwind config if not using inline styles:
const typewriterStyles = `
  @keyframes blink {
    0%, 49% {
      opacity: 1;
    }
    50%, 100% {
      opacity: 0;
    }
  }
`;