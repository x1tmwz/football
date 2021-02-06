

const customFetch = async (url)=>{
    try{
        let res = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "d61abfa8bemsh32c43f9b6ff3343p1fe3f1jsn272a5376a3ad",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
            }
        })
       res =await res.json()
       return res.api;
    }catch(e){
        return e

    }
   
}
const getCountries = async() => {
    const url = "https://api-football-v1.p.rapidapi.com/v2/countries"
    return await customFetch(url);
}
const getLeguesFromCountry=async(country)=>{
    const url =`https://api-football-v1.p.rapidapi.com/v2/leagues/country/${country}/2020`
    return await customFetch(url);
}
const getTeamsByLeagueId=async(id)=>{
    const url =`https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`
    return await customFetch(url);
}
export {getCountries,getLeguesFromCountry,getTeamsByLeagueId};