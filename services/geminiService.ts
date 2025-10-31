
import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Generates a virtual try-on image using the Gemini API.
 * @param modelImageBase64 The base64 encoded string of the person's image.
 * @param garmentImageBase64 The base64 encoded string of the clothing item image.
 * @returns A promise that resolves to the base64 encoded string of the generated image.
 */
export async function generateTryOnImage(
  modelImageBase64: string,
  garmentImageBase64: string
): Promise<string> {
  try {
    const model = 'gemini-2.5-flash-image';
    const prompt = `Take the clothing item from the second image and place it realistically onto the person in the first image. The person's original head, hair, arms, and legs should be preserved. Ensure the fit, drape, and lighting of the clothing look natural on the person's body. The output should be only the final composed image of the person wearing the garment.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              data: modelImageBase64,
              mimeType: 'image/jpeg',
            },
          },
          {
            inlineData: {
              data: garmentImageBase64,
              mimeType: 'image/png', // Garment images often have transparency
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    // Find the image part in the response
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return part.inlineData.data;
      }
    }

    throw new Error('No image data found in the API response.');
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to generate try-on image. The AI model may be experiencing issues.');
  }
}
