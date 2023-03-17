"use client";
import React, { useEffect, useState } from "react";

const Chatbot = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
      script.async = true;
      document.querySelector(".chatbot-container").appendChild(script);
      script.addEventListener("load", () => {
        try {
          window.botpressWebChat.init({
            botId: "b888692e-abd1-43a0-8c4e-cfe9dfddcfb3",
            hostUrl: "https://cdn.botpress.cloud/webchat/v0",
            messagingUrl: "https://messaging.botpress.cloud",
            clientId: "b888692e-abd1-43a0-8c4e-cfe9dfddcfb3",
            botName: "AI Public Personality",
            showPoweredBy: true,
            containerWidth: "100%25",
            layoutWidth: "100%25",
            showCloseButton: false,
            botConversationDescription:
              "A simple chatbot that demonstrates integration of ChatGPT, with Botpress",
            hideWidget: true,
            disableAnimations: true,
            closeOnEscape: false,
            showConversationsButton: true,
            avatarURL: "https://app.botpress.cloud/chatbots/abstract-26.svg",
            enableTranscriptDownload: false,
            stylesheet: "https://botpress-webchat.vercel.app/chat.css",
          });

          window.botpressWebChat.onEvent(
            function () {
              window.botpressWebChat.sendEvent({ type: "show" });
              window.botpressWebChat.sendEvent({
                type: "proactive-trigger",
                channel: "web",
                payload: {
                  text: "Hi, I am Pro active",
                },
              });
            },
            ["LIFECYCLE.LOADED"]
          );
          setScriptLoaded(true);
        } catch (error) {
          console.error(error);
        }
      });
      return () => {
        document.querySelector(".chatbot-container").removeChild(script);
      };
    }
  }, [scriptLoaded]);

  return <></>;
};

const ChatbotWithRectangle = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          height: "100%",
          width: "500px",
          backgroundColor: "gray",
          marginRight: "10px",
        }}
      />
      <div style={{ flex: 1 }}>
        <div className="chatbot-container">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default ChatbotWithRectangle;
