import React, { useEffect, useState } from "react";
import { getCountries as getCountriesFromApi, getLeguesFromCountry, getTeamsByLeagueId } from '../fetch/countries';
import Table from '../components/Table';
import Search from '../components/Search';
import LocalStorage from '../utils/LocalStorag';

const localStorageManger = new LocalStorage();


const MainPage = () => {
    const [countries, setCountries] = useState([]);
    const [legues, setLegues] = useState([]);
    const [teams, setTeams] = useState([]);

    const [loadCountries, setloadCountries] = useState(true);
    const [loadLegues, setloadLegue] = useState(true);

    const [country, setCountry] = useState({});
    const [legue, setLegue] = useState({});

    const getCountry = (country) => {
        setCountry(country)
        setLegue({})
    }
    const getLegues = (league) => {
        setLegue(league);
    }

    const asyncFuc = async (fetch, arrayProp = "", setFunc, value, loadingFunc) => {
        const result = await fetch(value);
        if (result && result[arrayProp]) {
            setFunc(result[arrayProp])
            if (loadingFunc) {
                loadingFunc(false);
            }
        }
    }
    const onClickRow = (row) => {
        localStorageManger.setId(row.id);
        const teamsUpdate = teams.map((team)=>{
            if(team.team_id === row.id){
                if(team.mark){
                    team.mark = false;
                }else{
                    team.mark = true;
                }
            }
            return team;
        })
        setTeams(teamsUpdate)
    }
    useEffect(() => {
        asyncFuc(getCountriesFromApi, "countries", setCountries, "", setloadCountries);
    }, [])
    useEffect(() => {
        if (country) {
            asyncFuc(getLeguesFromCountry, "leagues", setLegues, country.country, "", setloadLegue);
        }
    }, [country])
    useEffect(() => {
        if (legue) {
            asyncFuc(getTeamsByLeagueId, "teams", setTeams, legue.league_id);
        }
    }, [legue])
    const columns = [
        { id: 'crest', label: 'Crest', minWidth: 100 },
        { id: 'name', label: 'Name', minWidth: 50 },
        { id: 'founded', label: 'Founded', minWidth: 50 }
    ];
    const getRows = (teamsData = []) => {
        const ids = localStorageManger.getIds()
        return teamsData.map(team => {
            if(ids.includes(team.team_id)){
                team.mark=true;
            }
            return {
                id: team.team_id,
                crest: team.logo,
                name: team.name,
                founded: team.founded,
                mark:team.mark || false
            }
        })


    }

    return (
        <div className="main-page">
            <div className="main-page-search-div">
                <Search getOption={getCountry} options={countries} componentId="country_search" label="choose counrty" getOptionLabel={(option) => (option.country || "")} getOptionSelected={(pastVal, newVal) => (pastVal.name === newVal.name)} loading={loadCountries} renderOption={(option) => (
                    <React.Fragment>
                        <span><img src={option.flag} alt="" className="img_icon" />{option.country}</span>
                    </React.Fragment>
                )} />
                <br></br>
                {!!(country && country.country) && <Search getOption={getLegues} options={legues} value={legue} componentId="legues_search" getOptionLabel={(option) => (option.name || "")} label="choose league" getOptionSelected={(pastVal, newVal) => (pastVal.league_id === newVal.league_id)} loading={loadLegues} renderOption={(option) => (
                    <React.Fragment>
                        <span><img src={option.logo} alt="" className="img_icon" />{option.name}</span>
                    </React.Fragment>
                )} />}
            </div>
            {(teams.length > 0) && <div className="main-page-table-div">
                <Table columns={columns} rows={getRows(teams)} onClickRow={onClickRow} />
            </div>}




        </div>
    );
}

export default MainPage;