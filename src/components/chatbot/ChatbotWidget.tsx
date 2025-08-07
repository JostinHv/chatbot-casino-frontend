'use client'

export function ChatbotWidget() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <df-messenger
        intent="WELCOME"
        chat-title="CasinoBot"
        agent-id="8378dc82-99b2-466c-a137-a2ce26ef3ee6"
        language-code="es"
        style={{ width: '350px', height: '430px' }}
      ></df-messenger>
    </div>
  )
} 