"use client";

import React, { useState, useRef, useEffect } from 'react';

interface TokenInputProps {
  token: string;
  setToken: (token: string) => void;
}

const TokenInput: React.FC<TokenInputProps> = ({ token, setToken }) => {
  const [localToken, setLocalToken] = useState(token);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const cursorPositionRef = useRef({ start: 0, end: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLocalToken(e.target.value);
    setToken(e.target.value.replace(/\s/g, ''));
  };

  const saveCursorPosition = () => {
    if (textareaRef.current) {
      cursorPositionRef.current = {
        start: textareaRef.current.selectionStart,
        end: textareaRef.current.selectionEnd,
      };
    }
  };

  useEffect(() => {
    setLocalToken(token);
  }, [token]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.setSelectionRange(cursorPositionRef.current.start, cursorPositionRef.current.end);
    }
  }, [localToken]);

  return (
    <textarea
      ref={textareaRef}
      value={localToken}
      onChange={handleChange}
      onFocus={saveCursorPosition}
      onClick={saveCursorPosition}
      onKeyUp={saveCursorPosition}
      className="w-full h-[557px] p-4 border rounded mb-4 bg-white"
      aria-label="JWT Token Input"
      style={{
        maxWidth: '100%',
        fontSize: '20px',
        lineHeight: '1.5',
        minHeight: '200px',
      }}
    />
  );
};

export default TokenInput;
