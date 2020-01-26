const API_PATH = "https://fsc9cff890.execute-api.us-east-1.amazonaws.com/test";

export async function getAllSongs() {
  const response = await fetch(API_PATH);
  return response.json();
}

export async function getSong(title) {
  const response = await fetch(`${API_PATH}?title=${title}`);
  return response.json();
}
