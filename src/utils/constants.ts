export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "german",
    name: "German",
  },
];

export const GROQ_aPI_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const API_GROQ_URL = import.meta.env.VITE_GROQ_API_URL;

export const GROQ_MODEL = import.meta.env.VITE_APP_GROQ_MODEL;

export const LLM_PROMPT = (mood: string) => {
  return `You are an advanced Movie Recommendation System. Given a mood or theme, suggest exactly five movies that best match the query. Provide a mix of Bollywood and Hollywood movies where appropriate.
                    Strictly follow this format: Movie1, Movie2, Movie3, Movie4, Movie5.
                    Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.*
                    Query: ${mood}
                    Response Format: (Only return movie names, comma-separated, without additional text.)`;
};
