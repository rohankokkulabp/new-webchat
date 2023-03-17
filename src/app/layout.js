import './globals.css'

export const metadata = {
  title: 'Botpress Webchat',
  description: 'Create Powerful Chatbots using Generative AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
        <script>
          {
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
              enableTranscriptDownload: true,
              stylesheet: "https://botpress-webchat.vercel.app/chat.css",
              // stylesheet: "http://localhost:3000/chat.css",
            })
          }
        </script> */}
        {children}
      </body>
    </html>
  )
}
