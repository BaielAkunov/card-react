import React from "react";
import Css from "./Main.module.css"
import mainPic from "../../images/bg.png"
import {HelpCard} from "../HelpCard/index"
import {Card} from "../Card/index"
import pic from "../../images/nutrition.png"

const data = [
    {
      title:'Physical Health',
      color:"#22356F",
  
    },
    {
      title:'Nutrition',
      color:"#0052C1",
  
  
    },{
      title:'Gymnastics',
      color: null,
      img:pic,
  
  
    },{
      title:'Gymnastics',
      color:"#62D0DF",
  
  
    },{
      title:'Physical Health',
      color:"#DEE1FF",
  
  
    },{
      title:'Physical Health',
      color:"#8F00FF",
  
  
    },
  ]

export const MainPage = ()=>{
    return (
        <div className={Css.MainPage}>
            <div className={Css.container}>
            <nav>
                <span>
                Thrivetalk
                </span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button>CONTACT US</button>
            </nav>
            <div>
                <div className={Css.MainBlock}>
                <div>
                    <p>
                    Thrivetalk
                    </p>
                    <h1>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p>Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
                </div>
                <div>
                <button>WHO AM I</button>
                <button>WHAT DO I DO</button>
                </div>
                <div>
                  <img className={Css.pic} src={mainPic} alt="" />
                </div>
                </div>
            </div>
            </div>
            <div>
                <h5>WE CAN HELP YOU WITH</h5>
                <div>
                  <HelpCard background="#ffe2de" title="Weight Lifting"/>
                  <HelpCard background="#c4e769" title="Weight Lifting"/>
                  <HelpCard background="#62d0df" title="Weight Lifting"/>
                  <HelpCard background="#0052c1" title="Weight Lifting"/>

                </div>
            </div>
            <div>
            {
        data.map((el,id)=>{
          return <Card data={el} key={id}/>
        })
      }

            </div>
        </div>
    )
}