
"use client";
import { lazy, Suspense, useEffect, useState } from "react";

const ChatBot = lazy(() => import("react-chatbotify"));

export default function ChatBotComponent() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [])
  const styles = {
    headerStyle: {
      background: 'red',
      color: '#ffffff',
      padding: '10px',
    },
    chatWindowStyle: {
      backgroundColor: '#f2f2f2',
    },
    // ...other styles
  };
  return (
    <>
    {isLoaded && (
      <Suspense fallback={<div>Loading...</div>}>
        <ChatBot styles={styles} />
      </Suspense>
    )}
    </>
  );
}