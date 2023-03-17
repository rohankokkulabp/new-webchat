import './globals.css'

export const metadata = {
  title: 'Botpress Webchat',
  description: 'Create Powerful Chatbots using Generative AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
