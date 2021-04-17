

const customFetch = async (url,method)=>{
    try{
        let res = await fetch(process.env.REACT_APP_SERVER_URL+url, {
            "method": method,
        })
       res =await res.json()
       return res.data;
    }catch(e){
        return e;
    }
   
}
const getMarkers = async() => {
    const url = "/markers"
    return await customFetch(url,"GET");
}
// const getLeguesFromCountry=async(country)=>{
//     const url =`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/2020`
//     return await customFetch(url);
// }
// const getTeamsByLeagueId=async(id)=>{
//     const url =`https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`
//     return await customFetch(url);
// }
export {getMarkers};