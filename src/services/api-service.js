const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "9b2715743b984db9f4b6ae67f0efdfab9b0a453e";

export default class API{
    static async updateMovie(movie_id, body){
        const response = await fetch(`${API_URL}/movies/${movie_id}/`,{
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${TOKEN}`
          },
          body: JSON.stringify(body) 
        });
        if (!response.ok) {
          return null;
        }
        return await response.json();

      
    }

}