import { createClient } from "@deepgram/sdk";
import { ElevenLabsClient } from "elevenlabs";
import APIs from "../config.js";

// Deepgram API
export const deepgramAudio = async (text, model) => {
  try {
    const deepgram = createClient(APIs.DEEPGRAM_API_KEY);
    const response = await deepgram.speak.request({ text }, { model: model });
    return response;
  } catch (error) {
    console.error("Error generating audio from Deepgram:", error);
  }
};

// ElevenLabs API
export const elevenlabsAudio = async (text, model) => {
  try {
    const client = new ElevenLabsClient({
      apiKey: APIs.ELEVENLABS_API_KEY,
    });
    const audio = await client.textToSpeech.convert(model, {
      text: text,
      model_id: "eleven_flash_v2_5",
      output_format: "mp3_44100_128",
    });
    //await play(audio);
    return audio;
  } catch (err) {
    console.error("Error generating audio from Elevenlabs:", err);
  }
};

// Azure TTS API
export const azureAudio = async (text, model, region) => {
  try {
  } catch (err) {
    console.log("Error generating audio from Azure TTS API: ", err);
  }
};
