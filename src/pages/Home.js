import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Card from "../components/Card"



var characters = [
    {name:"Sauron", subtitle: "Dark Lord of Mordor", photo: "https://i.postimg.cc/Z5NB2zJT/Sauron.jpg", strength: "25", defense: "30" },
    {name: "Nazgul", subtitle:"Witch King Ringwraith", photo: "https://i.postimg.cc/Qx4wPv0n/Nazgul.jpg", strength: "15", defense: "10"},
    {name: "Orc", subtitle:"Dark Minion", photo:"https://i.postimg.cc/nL8Rfx7T/Orc.jpg", strength: "10", defense: "3"},
    {name:"Smeagol", subtitle:"Old Noser", photo : "https://i.postimg.cc/DzdgVX7y/Gollum.png", strength: "3", defense: "2"},
    {name: "Uruk Hai", subtitle: "Guard", photo : "https://i.postimg.cc/mkRWLMHX/Urukhai.jpg", strength: "15", defense: "18"},
    {name: "Fell Beast", subtitle:"Full Creature", photo: "https://i.postimg.cc/Jzj3JkDc/fellbeast.jpg", strength: "10", defense: "20"}
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