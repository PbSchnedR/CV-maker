import { useEffect } from "react";
import Draggable from "react-draggable";


function PersonalInfos(){
    
  const ulHobby = document.querySelector("#hobbyUl");
  const ulExp = document.querySelector("#expUl");
  const ulSkill = document.querySelector("#skillUl");
  const ULS = [ulHobby, ulExp, ulSkill]

  const inputSrc = document.querySelectorAll(".InputText");
  const photoInput = document.getElementById("photoID")

  useEffect(()=>{
    const image = document.getElementById("image")
    console.log(image)
    console.log(photoInput)

      const file = photoInput.files[0]
      if(file){
        const imageUrl = window.URL.createObjectURL(file);
        image.src = imageUrl;
      }
  },[])
  

  const newInputValues = Array.from(inputSrc).reduce((acc, elmt) => {
    acc[elmt.id] = elmt.value;
    return acc;
  }, {});


  const MoreInfoCategories = ULS.reduce((acc, elmt) =>{
    const liElements = elmt.querySelectorAll("li")
    const liChild = Array.from(liElements).map((li) => li.textContent)
    acc[elmt.id] = liChild;
    return acc;
  }, {})

  const JSONInfos = JSON.stringify(newInputValues)
  const JSONAdditionalInfos = JSON.stringify(MoreInfoCategories)
  
  sessionStorage.setItem("test2", JSONInfos)
  sessionStorage.setItem("test2b", JSONAdditionalInfos)

  
  /*
    return(
        <div className="CV_body">
          
          <Draggable>
          <img id="image" height="200px" alt="Photo de votre CV"></img>
          </Draggable>
          
          <Draggable>
          <h1>{newInputValues.firstnameID}</h1>
          </Draggable>

          <Draggable>
          <h1>{newInputValues.nameID.toUpperCase()}</h1>
          </Draggable>

        <Draggable>
        <h2>{newInputValues.posteID}</h2>
        </Draggable>

        <Draggable>
        <p>{newInputValues.profileID}</p>
        </Draggable>
        
        <Draggable>
        <h2>Hobbies</h2>
        </Draggable>
        
        {MoreInfoCategories.hobbyUl.map((e, index) => (
          <Draggable><li key={index}>{e}</li></Draggable>
      ))}

        <Draggable><h2>Expériences profesionnelles</h2></Draggable>
        {MoreInfoCategories.expUl.map((e, index) => (
        <Draggable><li key={index}>{e}</li></Draggable>
      ))}

        <Draggable><h2>Skills</h2></Draggable>
        {MoreInfoCategories.skillUl.map((e, index) => (
        <Draggable><li key={index}>{e}</li></Draggable>
      ))}
        </div>
    )*/
}

export default PersonalInfos