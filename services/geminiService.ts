import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Eres "Vistral AI", un consultor experto en visualización 3D y recorridos virtuales para la empresa "Vistral 3D".
Tu objetivo es asesorar a clientes potenciales sobre cómo las tecnologías inmersivas pueden beneficiar su negocio.

Servicios que ofrecemos:
1. Recorridos Virtuales 360° (tipo Matterport).
2. Renders Fotorealistas (Arquitectura y Producto).
3. Experiencias Web 3D Interactivas (WebGL).
4. Fotogrametría y Gemelos Digitales.

Industrias clave:
- Inmobiliaria: Vender propiedades más rápido, visitas remotas.
- Turismo: Atraer viajeros mostrando destinos u hoteles.
- Museos/Cultura: Preservación digital, acceso global a exposiciones.
- Entretenimiento: Experiencias inmersivas para eventos.
- Educación: Aulas virtuales, entrenamiento técnico seguro.

Tono: Profesional, innovador, conciso y persuasivo.
Si te preguntan precios, diles que dependen de la escala del proyecto y sugiere contactar a través del formulario o correo info@vistral3d.com.
Responde siempre en español.
`;

let chatSession: Chat | null = null;

export const initializeChat = async (): Promise<Chat> => {
  if (chatSession) return chatSession;

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = await initializeChat();
    const response = await chat.sendMessage({ message });
    return response.text || "Disculpa, no pude procesar tu respuesta. ¿Podrías intentarlo de nuevo?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Lo siento, estoy teniendo problemas técnicos momentáneos. Por favor contáctanos directamente por el formulario.";
  }
};