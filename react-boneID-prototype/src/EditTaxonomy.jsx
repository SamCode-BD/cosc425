import React, {useState, useContext, useEffect} from 'react'
import { Context } from './FormContainer';

const defaultTaxonomyInfo = {
    taxonomyID: "",
    parvorder: "",
    superfamily: "",
    family: "",
    subfamily: "",
    genus: "",
    species: ""
}

const useSessionStorage = (key, defaultTaxonomyInfo) => {
    const [value, setValue] = useState(() => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultTaxonomyInfo;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

function EditTaxonomy() {
    const key = useContext(Context).focusSpecId[0] + ".tax";
    const [taxonomy, setTaxonomy] = useSessionStorage(key, defaultTaxonomyInfo);
    const [taxonomyID, setTaxonomyID] = useState(taxonomy.taxonomyID);
    const [parvorder, setParvorder] = useState(taxonomy.parvorder);
    const [superfamily, setSuperfamily] = useState(taxonomy.superfamily);
    const [family, setFamily] = useState(taxonomy.family);
    const [subfamily, setSubfamily] = useState(taxonomy.subfamily);
    const [genus, setGenus] = useState(taxonomy.genus);
    const [species, setSpecies] = useState(taxonomy.species);

    const handleTaxonomyID = (e) => {
        setTaxonomyID(e.target.value);
    }
    const handleParvorder = (e) => {
        setParvorder(e.target.value);
    }
    const handleSuperfamily = (e) => {
        setSuperfamily(e.target.value);
    }
    const handleFamily = (e) => {
        setFamily(e.target.value);
    }
    const handleSubfamily = (e) => {
        setSubfamily(e.target.value);
    }
    const handleGenus = (e) => {
        setGenus(e.target.value);
    }
    const handleSpecies = (e) => {
        setSpecies(e.target.value);
    }

    const handleSave = () => {
        const newTaxonomy = {
            taxonomyID: taxonomyID,
            parvorder: parvorder,
            superfamily: superfamily,
            family: family,
            subfamily: subfamily,
            genus: genus,
            species: species
        }
        setTaxonomy(newTaxonomy);
    }
    return(<div className ="bone-form">
        <p style={{textAlign: "left", marginLeft:10, marginTop:10, fontSize:"0.75em"}}>
            Specimen {useContext(Context).focusSpecId[0]}</p>
        <h2>Taxonomy</h2>
        <p>Taxonomy ID: <input type="text" value={taxonomyID} onChange={handleTaxonomyID}></input></p>
        <p>Parvorder: <input type="text" value={parvorder} onChange={handleParvorder}></input></p>
        <p>Superfamily: <input type="text" value={superfamily} onChange={handleSuperfamily}></input></p>
        <p>Family: <input type="text" value={family} onChange={handleFamily}></input></p>
        <p>Subfamily: <input type="text" value={subfamily} onChange={handleSubfamily}></input></p>
        <p>Genus: <input type="text" value={genus} onChange={handleGenus}></input></p>
        <p>Species: <input type="text" value={species} onChange={handleSpecies}></input></p>
        <button onClick={handleSave}>Save</button>
    </div>);
}
export default EditTaxonomy