
import AddButton from './addButton';
import InputPhoto from './inputPhoto';
import InputChamp from './input';
import React, { useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Home.css"
import PersonalInfos from "./personalInfo";

function Home(){
    const hobbyRef = useRef(null);
    const expRef = useRef(null);
    const skillRef = useRef(null);

    return (
        <>
            <div className="wrapper">
                <div className="L-column">
                    <InputPhoto id="photoID" classCell="cellText"></InputPhoto>
                    <InputChamp id="nameID" label="Nom : " classInput="InputText" classDiv="cellText"></InputChamp>
                    <InputChamp id="firstnameID" label="Prénom : " classInput="InputText" classDiv="cellText"></InputChamp>
                    <InputChamp id="profileID" label="Profil : " classInput="InputText" classDiv="cellText"></InputChamp>
                    <InputChamp id="posteID" label="Poste : " classInput="InputText" classDiv="cellText"></InputChamp>
                    <div className='buttonsG'>
                    <AddButton topicBtn="Ajouter un hobby" topicPlaceholder="Ajouter un hobby" insertId="insertHobby" buttonName="Ajouter votre hobby à la liste" buttonClass="cellBtn" id="btn1" targetRef={hobbyRef} classInsert="insertStyle" classInsertBtn="insertBtnStyle"></AddButton>
                    <AddButton topicBtn="Ajouter une expérience" topicPlaceholder="Ajouter une expérience" insertId="insertExp" buttonName="Ajouter votre expérience à la liste" buttonClass="cellBtn" id="btn2" targetRef={expRef} classInsert="insertStyle" classInsertBtn="insertBtnStyle"></AddButton>
                    <AddButton topicBtn="Ajouter un skill" topicPlaceholder="Ajouter un skill" insertId="insertSkill" buttonName="Ajouter votre skill à la liste" buttonClass="cellBtn" id="btn3" targetRef={skillRef} classInsert="insertStyle" classInsertBtn="insertBtnStyle"></AddButton>
                    </div>
                </div>
                <div className="R-column">
                    <div className='uList'>
                        <h2>Hobbys</h2>
                        <ul id='hobbyUl' ref={hobbyRef}></ul>
                    </div>
                    <div className='uList'>
                        <h2>Expériences</h2>
                        <ul id='expUl' ref={expRef} ></ul>
                    </div>
                    <div className='uList'>
                        <h2>Skills</h2>
                        <ul id='skillUl' ref={skillRef}></ul>
                    </div>
                </div>
            </div>
           <Link to="/generate"><button id="generateBtn" onClick={PersonalInfos}>Generate</button></Link>
            </>
    );
}
export default Home