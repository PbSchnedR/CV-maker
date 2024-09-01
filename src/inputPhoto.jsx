
function InputPhoto({id, classCell}){
    return(
        <div className={classCell}>
        <label htmlFor={id}>Photo : </label>
        <input type="file" id={id} accept="image/png, image/jpeg, image/jpg" />
        </div>
    )
}

export default InputPhoto
