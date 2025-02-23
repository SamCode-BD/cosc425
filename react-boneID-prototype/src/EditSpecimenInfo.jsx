import React, {useState, useContext, useEffect} from 'react'
import { Context } from './FormContainer';

const defaultSpecimenInfo = 
        {
            museum: {
                museumID: "",
                name: "",
                location: ""
            },
            specimenName: "",
            specimenNumber: -1,
            broadRegion: "",
            country: "",
            locality: "",
            region: "",
            sex: "Unknown"
        };

const useSessionStorage = (key, defaultSpecimenInfo) => {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultSpecimenInfo;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

function EditSpecimenInfo() {
    const key = useContext(Context).focusSpecId[0] + ".spec";
    const [specimenInfo, setSpecimenInfo] = useSessionStorage(key, defaultSpecimenInfo);
    const [museumID, setMuseumID] = useState(specimenInfo.museum.museumID);
    const [name, setName] = useState(specimenInfo.museum.name);
    const [location, setLocation] = useState(specimenInfo.museum.location);
    const [specimenName, setSpecimenName] = useState(specimenInfo.specimenName);
    const [specimenNumber, setSpecimenNumber] = useState(specimenInfo.specimenNumber);
    const [broadRegion, setBroadRegion] = useState(specimenInfo.broadRegion);
    const [country, setCountry] = useState(specimenInfo.country);
    const [locality, setLocality] = useState(specimenInfo.locality);
    const [region, setRegion] = useState(specimenInfo.region);
    const [sex, setSex] = useState(specimenInfo.sex);

    const handleMuseumID = (e) => {
        setMuseumID(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleLocation = (e) => {
        setLocation(e.target.value);
    }
    const handleSpecimenName = (e) => {
        setSpecimenName(e.target.value);
    }
    const handleSpecimenNumber = (e) => {
        setSpecimenNumber(e.target.value);
    }
    const handleBroadRegion = (e) => {
        setBroadRegion(e.target.value);
    }
    const handleLocality = (e) => {
        setLocality(e.target.value);
    }
    const handleCountry = (e) => {
        setCountry(e.target.value);
    }
    const handleRegion = (e) => {
        setRegion(e.target.value);
    }
    const handleSex = (e) => {
        setSex(e.target.value);
    }
        
        
    const handleSave = () => {
        
        const newSpecimen = {
            museum: {
                museumID: museumID,
                name: name,
                location: location
            },
            specimenNumber: specimenNumber,
            specimenName: specimenName,
            broadRegion: broadRegion,
            country: country,
            locality: locality,
            region: region,
            sex: sex,
        }
        
        setSpecimenInfo(newSpecimen);
    }


    return(<div className="bone-form">
        <p style={{textAlign: "left", marginLeft:10, marginTop:10, fontSize:"0.75em"}}>
            Specimen {useContext(Context).focusSpecId[0]}</p>
        <h2>Museum</h2>
        <p>Museum ID: <input type="text" value={museumID} onChange={handleMuseumID}></input></p>
        <p>Name: <input type="text" value={name} onChange={handleName}></input></p>
        <p>Location: <input type="text" value={location} onChange={handleLocation}></input></p>
        <h2>Specimen</h2>
        <p>Specimen Name: <input type="text" value={specimenName} onChange={handleSpecimenName}></input></p>
        <p>Specimen Number: <input type="text" value={specimenNumber} onChange={handleSpecimenNumber}></input></p>
        <p>Broad Region: <input type="text" value={broadRegion} onChange={handleBroadRegion}></input></p>
        <p>Country: <input type="text" value={country} onChange={handleCountry}></input></p>
        <p>Locality: <input type="text" value={locality} onChange={handleLocality}></input></p>
        <p>Region: <input type="text" value={region} onChange={handleRegion}></input></p>
        <p>Sex: <select value={sex} onChange={handleSex}>
            <option>{"Male"}</option>
            <option>{"Female"}</option>
            <option>{"?Male"}</option>
            <option>{"?Female"}</option>
            <option>{"Unknown"}</option>
            </select></p>
        <button onClick={handleSave}>Save</button>
    </div>
    );
}
export default EditSpecimenInfo