import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Card from "../components/Card"



var characters = [
    {name:"Sauron", subtitle: "Dark Lord of Mordor", photo: "Sauron.jpg", strength: "25", defense: "30" },
    {name: "Nazgul", subtitle:"Witch King Ringwraith", photo: "Nazgul.jpg", strength: "15", defense: "10"},
    {name: "Orc", subtitle:"Dark Minion", photo:"Orc.jpg", strength: "10", defense: "3"},
    {name:"Smeagol", subtitle:"Old Noser", photo : "Gollum.png", strength: "3", defense: "2"},
    {name: "Uruk Hai", subtitle: "Guard", photo : "Urukhai.jpg", strength: "15", defense: "18"},
    {name: "Fell Beast", subtitle:"Full Creature", photo: "fellbeast.jpg", strength: "10", defense: "20"}
]

const Home = () =>{
    const title = "Welcome to Mordor"
    return (
        <div className = "container">
            <Header />
            <Main mainTitle = {title}/>
            <div className = "board">
            {characters.map(character => (
                <Card photo = {character.photo} name= {character.name} subtitle = {character.subtitle}/>
            ))}
            </div>
            <Footer />
        </div> 
          )
}   
  
export default Home 