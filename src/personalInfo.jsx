function PersonalInfos(){
  
    try{
      // sessionStorage.clear()

      const ulHobby = document.querySelector("#hobbyUl");
  const ulExp = document.querySelector("#expUl");
  const ulSkill = document.querySelector("#skillUl");
  const ULS = [ulHobby, ulExp, ulSkill]

  const inputSrc = document.querySelectorAll(".InputText");

  const photoInput = document.getElementById("photoID")

      const file = photoInput.files[0]
      if(file){
        const imageUrl = window.URL.createObjectURL(file);
        sessionStorage.setItem("imgSrc" , imageUrl)
      }else{
        console.error("img not found")
      }

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

  console.log(file)
  console.log(newInputValues)
  console.log(MoreInfoCategories)

  /*
  const JSONInfos = JSON.stringify(newInputValues)
  const JSONAdditionalInfos = JSON.stringify(MoreInfoCategories)
  
  sessionStorage.setItem("MainInfos", JSONInfos)
  sessionStorage.setItem("AdditionalInfos", JSONAdditionalInfos)*/
    }catch(err){
      console.error("Nope : " + err)
    }

}

export default PersonalInfos