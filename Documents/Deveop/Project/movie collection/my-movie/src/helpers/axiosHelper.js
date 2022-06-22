import axios from 'axios';

const apiEndPoint = "http://www.omdbapi.com/?apikey=91c05eb9&"

export const fetchMovieinfo = async (title) =>{

try{


const url = apiEndPoint + "t=" + title

    const {data} = await axios.get(url);
    return data
    

}catch(error){
        return {status : "error", messgae: error.message}
    }
}