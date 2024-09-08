import { Link } from "react-router-dom"
import "./generate.css"
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf'
import { useState} from "react";
import DraggableItems from "./draggableItems";
import SettingBox from "./settingBox";
import { ColorSettings } from "./settingContents";
function Generation(){

    const [colorSetting, setColorSetting] = useState(false);

    const createPDF = async () => {
        const canvas = await html2canvas(document.querySelector('#pdf'));
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'pt', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, 595, 842); // A4 dimensions
        pdf.save('Votre-CV.pdf');
      };
      
    return(
        <div id="generationPage">
        <Link to="/"><button id="retour" className="btn-screen2">Retour</button></Link>   
            <div id="pdf">
              <DraggableItems></DraggableItems>
                </div> 
                <button onClick={createPDF} className="btn-screen2" id="createPDF">Télécharger le PDF</button>
                <button className="btn-screen2" id="colorsSettings" onClick={() => setColorSetting(v => !v)}>Changer de couleur</button>
                {colorSetting && <SettingBox id="settingColor" divClass="settingDiv" content={<ColorSettings></ColorSettings>}></SettingBox>}
        </div>
    )
}

export default Generation