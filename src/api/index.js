const API_BASE_PATH =
  "https://fsc9cff890.execute-api.us-east-1.amazonaws.com/test";
const API_SONGS_PATH = `${API_BASE_PATH}/songs`;
const API_SETLIST_PATH = `${API_BASE_PATH}/setlists`;

export async function getAllSongs() {
  const response = await fetch(API_SONGS_PATH);
  return response.ok ? response.json() : {};
}

export async function getSong(title) {
  const response = await fetch(`${API_SONGS_PATH}?title=${title}`);
  return response.ok ? response.json() : {};
}
