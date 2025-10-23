import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  text: string;
  speed?: number; // milliseconds per character (default: 100)
  delay?: number; // delay before starting (default: 0)
  loop?: boolean; // whether to loop the animation (default: false)
}

export const useTypewriter = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  loop = false 
}: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let charIndex = 0;

    const startTyping = () => {
      const typeCharacter = () => {
        if (charIndex < text.length) {
          setDisplayText(text.substring(0, charIndex + 1));
          charIndex++;
          timeoutId = setTimeout(typeCharacter, speed);
        } else {
          setIsComplete(true);
          if (loop) {
            charIndex = 0;
            setDisplayText('');
            timeoutId = setTimeout(startTyping, 1000); // 1 second pause before restart
          }
        }
      };
      typeCharacter();
    };

    timeoutId = setTimeout(startTyping, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, loop]);

  return { displayText, isComplete };
};