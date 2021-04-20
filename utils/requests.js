const API_KEY = process.env.API_KEY; 

export default{

    fetchTrending : {
        title : "Trending",
        url : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    },
    fetchTopRated : {
        title : "Top Rated",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchAction : {
        title : "Action",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchComedy : {
        title : "Comedy",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchHorror : {
        title : "Horror",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchMystery : {
        title : "Mystery",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchSciFi : {
        title : "Sci-Fi",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchWestern : {
        title : "Western",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchAnimation : {
        title : "Animation",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
    fetchTv : {
        title : "TV Movie",
        url : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    },
  
}