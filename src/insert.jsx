
function InsertInfo({placeholder, id, value, onChange, onClick, buttonName, classInsert, classInsertButton}){
    return(
        <div>
            <input 
            type="text" 
            id={id} 
            className={classInsert}
            placeholder={placeholder}
            value={value}
            onChange={(e)=> onChange(e.target.value)}></input>

            <button 
            onClick={onClick}
            className={classInsertButton}>{buttonName}</button>
        </div>
    )
}

export default InsertInfo