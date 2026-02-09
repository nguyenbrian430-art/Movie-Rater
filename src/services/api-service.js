const API_URL = "http://127.0.0.1:8000/api";
const TOKEN = "9b2715743b984db9f4b6ae67f0efdfab9b0a453e";

export default class API{

    static async fetchMovie(){
        const response = await fetch(`${API_URL}/movies/`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${TOKEN}`
          }
        });
        if (!response.ok) {
          return null;
        }
        return await response.json();
    }
    static async getMovie(movie_id){
        const response = await fetch(`${API_URL}/movies/${movie_id}/`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${TOKEN}`
          }
        });
        if (!response.ok) {
          return null;
        }
        return await response.json();
    }
    static async rateMovie(movie_id,body){
        const response = await fetch(`${API_URL}/movies/${movie_id}/rate_movie/`,{
          method: "POST",
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
    static async createMovie(body){
        const response = await fetch(`${API_URL}/movies/`,{
          method: "POST",
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
    static async removeMovie(movie_id){
        const response = await fetch(`${API_URL}/movies/${movie_id}/`,{
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${TOKEN}`
          }
        });
        if (!response.ok) {
          return false;
        }
        return true; 
    }

}