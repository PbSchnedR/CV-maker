import "./settingContents.css"
import { useState, useEffect } from "react"

export function ColorSettings(){

    const [color, setColor] = useState("dark")

    useEffect(() => {
        const pdfArea = document.getElementById("pdfArea").children
        const handleClick = (e) => {
            e.preventDefault()
            e.target.style.color = color
            console.log(co)
        }

        Array.from(pdfArea).forEach((elmt) => {
            elmt.addEventListener("click", handleClick)
        })
        

        return () => {
            Array.from(pdfArea).forEach((elmt) => {
                elmt.removeEventListener("click", handleClick)
            })
        }
    }, [color])
    return(
        <>
        <div id="redBox" className="Box" onClick={() => setColor("red")}></div>
        <div id="yellowBox" className="Box" onClick={() => setColor("yellow")}></div>
        <div id="blueBox" className="Box" onClick={() => setColor("blue")}></div>
        <div id="greenBox" className="Box" onClick={() => setColor("green")}></div>
        <div id="magentaBox" className="Box" onClick={() => setColor("magenta")}></div>
        <div id="grayBox" className="Box" onClick={() => setColor("gray")}></div>
        <div id="blackBox" className="Box" onClick={() => setColor("black")}></div>
        <div id="limeBox" className="Box" onClick={() => setColor("lime")}></div>
        <div id="orangeBox" className="Box" onClick={() => setColor("orange")}></div>
        <div id="orangeredBox" className="Box" onClick={() => setColor("orangered")}></div>
        </>
    )
}