import {
  API_GROQ_URL,
  GROQ_aPI_KEY,
  GROQ_MODEL,
  LLM_PROMPT,
} from "../utils/constants";

const makePostApIRequest = async (mood: string) => {
  const url = API_GROQ_URL;
  const data = {
    model: GROQ_MODEL,
    messages: [
      {
        role: "user",
        content: LLM_PROMPT(mood),
      },
    ],
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_aPI_KEY}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    const res =
      result?.choices[0]?.message?.content ||
      "No Movies Found of this category";
    return res;
  } catch (err) {
    return err;
  }
};

export const fetchGptResponse = (mood: string) => {
  const response = makePostApIRequest(mood);
  return response;
};
