declare namespace JSX {
  interface IntrinsicElements {
    'df-messenger': {
      intent?: string
      'chat-title'?: string
      'agent-id'?: string
      'language-code'?: string
      // Permitir atributos de estilo en línea y props del web component de Dialogflow
      style?: React.CSSProperties
      [key: string]: unknown
    }
  }
}
