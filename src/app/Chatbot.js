"use client";
import React, { useEffect, useState } from "react";

const Chatbot = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
      script.async = true;
      document.body.appendChild(script);
      script.addEventListener("load", () => {
        try {
          window.botpressWebChat.init({
            botId: "09d8ea5b-2781-4fe4-a0b5-d75798b24c50",
            hostUrl: "https://cdn.botpress.cloud/webchat/v0",
            messagingUrl: "https://messaging.botpress.cloud",
            clientId: "09d8ea5b-2781-4fe4-a0b5-d75798b24c50",
            botName: "Dummy Bot - SE",
            showPoweredBy: true,
            containerWidth: "100%25",
            layoutWidth: "100%25",
            showCloseButton: false,
            botConversationDescription:
              "Chat with this bot built surprisingly fast in Botpress",
            hideWidget: true,
            disableAnimations: true,
            closeOnEscape: false,
            showConversationsButton: true,
            avatarURL: "https://app.botpress.cloud/chatbots/abstract-26.svg",
            enableTranscriptDownload: true,
            stylesheet: "https://botpress-webchat.vercel.app/chat.css",
            // stylesheet: "http://localhost:3000/chat.css",
          });

          window.botpressWebChat.onEvent(
            function () {
              window.botpressWebChat.sendEvent({ type: "show" });
            },
            ["LIFECYCLE.LOADED"]
          );
          setScriptLoaded(true);
        } catch (error) {
          console.error(error);
        }
      });
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [scriptLoaded]);

  return <></>;
};

export default Chatbot;
