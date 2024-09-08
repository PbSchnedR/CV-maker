import Draggable from "react-draggable";
import "./items.css"
function DraggableItems(){
  
    const MainJson = sessionStorage.getItem("MainInfos")
    const AdditionalJson = sessionStorage.getItem("AdditionalInfos")
      const MainData = JSON.parse(MainJson)
      const AdditionalData = JSON.parse(AdditionalJson)
      const imgSrc = sessionStorage.getItem("imgSrc")    
      return(
        <div id="pdfArea">
          <Draggable>
            <img alt="CV image" src={imgSrc} id="img_CV"></img>
          </Draggable>

          <Draggable>
            <p>{MainData.nameID}</p>
            </Draggable>

            <Draggable>
            <p>{MainData.firstnameID}</p>
            </Draggable>

            <Draggable>
            <p>{MainData.posteID}</p>
            </Draggable>

            <Draggable>
            <p>{MainData.profileID}</p>
            </Draggable>

            <Draggable>
            <h1>Expériences</h1>
            </Draggable>
           
            {AdditionalData.expUl.map((e, index) => <Draggable><li key={index} className="liCV">{e}</li></Draggable>)}

            <Draggable>
              <h1>Hobbies</h1>
            </Draggable>
            {AdditionalData.hobbyUl.map((e, index) => <Draggable><li key={index} className="liCV">{e}</li></Draggable>)}

            <Draggable>
              <h1>Skills</h1>
            </Draggable>
            {AdditionalData.skillUl.map((e, index) => <Draggable><li key={index} className="liCV">{e}</li></Draggable>)}
        </div>
      )
     }
   
export default DraggableItems