function InputChamp({ id, label, classInput, classDiv }) {
    return (
        <div className={classDiv}> 
            <label htmlFor={id} >{label}</label>
            <input id={id} className={classInput} />
        </div>
    );
}

export default InputChamp;