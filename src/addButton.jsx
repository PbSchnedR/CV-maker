
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import InsertInfo from "./insert"; // component qui sert a ajouter un élément dans InsertArray et son <li> respectif
import crossImage from "./cross.png" //image de croix pour supprimer un élément d'un array InsertArray et son <li> respectif

function AddButton({ topicBtn, topicPlaceholder, insertId, buttonName, buttonClass, id, targetRef, classInsert, classInsertBtn }) {
    const [portalContent, setPortalContent] = useState(null);  // contenu transporté par le portail
    const [clicked, setClicked] = useState(false);   // state pour afficher le champ de InsertInfo pour ajouter un hobby, skill...
    const [insertData, setInsertData] = useState("");  // chaîne de caractères rentrées lors de l'ajout d'un hobby, skill... vide par défaut
    const [insertArray, setInsertArray] = useState([]); // array contenant tous les éléments insertData


    // Supprimer un élément de insertArray
function handleRemoveItem(indexToRemove) {
    setInsertArray(prevState => {
        const updatedArray = [...prevState]; // crée un clone d'array
        updatedArray.splice(indexToRemove, 1); //enlève l'élément à l'index indiqué en argument
        return updatedArray;
    });
}

    // useEffect qui fait une mise à jour dès que insertArray est modifié
    useEffect(() => {
        if (targetRef.current && insertArray.length <= 3) {
            const content = insertArray.map((elmt, index) => <li key={index}>{elmt} <a href="#" onClick={() => handleRemoveItem(index)}><img src={crossImage} alt="cross" className="crossImage"></img></a></li>);
                setPortalContent(content);       //crée un <li> pour chaque élément de l'array qui seront tous dans le portail
        }
    }, [insertArray]);

    // ajouter un élément (hobby, skill...) dans un array si la longueur de l'array est < ou = à 3
    function handleClickConfirm() {
        try {
            if (targetRef.current && insertData !== "" && insertArray.length < 3) {
                setInsertArray(prevState => [...prevState, insertData]);
                setClicked(false);
                setInsertData(""); // Réinitialiser le champ de saisie après confirmation
            } else {
                console.error("L'élément cible n'existe pas dans le DOM");
            }
        } catch (err) {
            console.error("Error : " + err);
        }
    }

    // InsertInfo modifie le state InsertData pour que ce qui soit marqué dans le champ par l'utilisateur soit pris en compte
    return (
        <>
            {!clicked && <button id={id} className={buttonClass} onClick={() => setClicked(true)}>{topicBtn}</button> /*bouton "ajouter un (ex : hobby)"*/ } 
            {clicked && (
                <InsertInfo
                    id={insertId}
                    placeholder={topicPlaceholder}
                    value={insertData}
                    onChange={setInsertData}
                    buttonName={buttonName}
                    onClick={handleClickConfirm}
                    classInsert={classInsert}
                    classInsertButton={classInsertBtn}
                />
            )}
            {portalContent && createPortal(portalContent, targetRef.current)}
        </>
    );
}


// ajouter un usecontext pour transférer les données

export default AddButton;
