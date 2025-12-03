# Chat Bubble Component Template

Componente de chat reutilizable para proyectos React + Tailwind + Framer Motion.

## Requisitos

Instala estas dependencias en tu proyecto:

```bash
npm install framer-motion lucide-react
```

## Instalación

1. Copia `ChatBubble.tsx` a tu carpeta `src/components/`
2. Copia tu foto de perfil a la carpeta `public/`
3. Importa el componente en tu App:

```tsx
import ChatBubble from './components/ChatBubble';

function App() {
  return (
    <div>
      {/* Tu contenido */}
      <ChatBubble />
    </div>
  );
}
```

## Configuración

Edita el objeto `CONFIG` al inicio del archivo `ChatBubble.tsx`:

```typescript
const CONFIG = {
  // Webhook de n8n - CAMBIA ESTO
  webhookUrl: 'https://TU-INSTANCIA.app.n8n.cloud/webhook/TU-WEBHOOK',

  // Info del asistente
  assistantName: 'Tu Nombre',
  assistantRole: 'Tu Rol',
  assistantPhoto: '/tu-foto.jpg',

  // Textos
  infoBannerText: 'Estoy aquí para ayudarte',
  inputPlaceholder: 'Escribe tu pregunta...',
  footerHint: 'Pregunta lo que necesites',

  // Posición y tamaños
  bubblePosition: 'bottom-64 left-6',
  windowPosition: 'bottom-24 left-6',
  bubbleSize: 'w-20 h-20',
  windowSize: 'w-[420px] h-[600px]',

  // Tiempo de notificación (ms)
  notificationDelay: 3000,
};
```

## Tailwind Config

Si usas un color personalizado como `protein-accent`, agrégalo a tu `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'protein-accent': '#4CAF50', // Tu color
      },
    },
  },
}
```

## CSS necesario

Agrega esto a tu CSS global para el scrollbar:

```css
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}
```

## Webhook n8n

El chat envía:
```json
{
  "message": "texto del usuario",
  "sessionId": "session_123456789_abc123"
}
```

Tu workflow debe devolver texto plano o JSON con `response`, `output`, o `message`.

### Configuración CORS en n8n

En el nodo Webhook:
- Options → Allowed Origins (CORS) → `*`

## Características

- Burbuja flotante con foto personalizada
- Notificación tipo Messenger después de 3 segundos
- SessionId para memoria de conversación
- Soporte para texto plano y JSON
- Animaciones con Framer Motion
- Diseño responsivo
