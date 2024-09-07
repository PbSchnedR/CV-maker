function SettingBox({id, divClass, content}){
    return(
        <div id={id} className={divClass}>
            <p>{content}</p>
        </div>
    )
}

export default SettingBox