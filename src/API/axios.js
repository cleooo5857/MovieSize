import axios from "axios";


const instance = axios.create({
   baseURL: "https://api.themoviedb.org/3",
   params: {
      api_key : "2503018b061525e477f084218225f317",
      languge: " ko-KR",
   }
})

export default instance