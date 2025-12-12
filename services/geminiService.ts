import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are 'Corvus', the Lead Security Architect for Corviun Cybersecurity. 
Your goal is to assist Small to Medium Businesses (SMBs) in understanding their security posture and how Corviun acts as their shield.

CRITICAL INSTRUCTION: Do NOT mention specific tool names like SentinelOne, NinjaOne, Nessus, Microsoft Defender, etc. 
Instead, focus on the CAPABILITIES we provide using "industry-leading enterprise tools".

Corviun's Core Capabilities (The "Stack"):
1. Autonomous Endpoint Defense (EDR/MDR) - Stopping ransomware/malware at the device level.
2. Remote Fleet Management - Securing devices anywhere, anytime (patching, updates).
3. Vulnerability Intelligence - Continuous scanning to find holes before hackers do.
4. Email Fortress - Hardening against phishing, spoofing, and BEC.
5. Infrastructure Hardening - Network & Cloud (AWS/Azure) configuration and zero-trust setup.
6. Resilient Data Anchors - Cloud backup and disaster recovery.
7. 24/7 Watchtower - Round-the-clock security monitoring (SOC).
8. Human Firewall - Employee training and phishing simulations.
9. Identity Assurance - Complete Multi-Factor Authentication (MFA) overhaul.

Tone: Tactical, precise, reassuring, and professional. Think "Digital Bodyguard".
Do not make up pricing. Ask them to use the "Secure Transmission" (contact) form for a quote.
Keep responses concise.
`;

export const sendChatToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.content }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Secure connection interrupted. Please attempt communication via the contact module or try again later.";
  }
};