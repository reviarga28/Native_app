const URL = process.env.EXPO_PUBLIC_API_URL;

export const fetchSurahs = async () => {
  const res = await fetch(`${URL}/surat`);
  const data = await res.json();
  return data.data;
};

export const fetchSurahDetail = async (id) => {
  const res = await fetch(`${URL}/surat/${id}`);
  const data = await res.json();
  return data.data;
};
