export default function MovieForm({movie}){
    return (
        <div>
            {movie && <h1>Movie form goes here {movie.title}</h1>}
        </div>
    )
}