
import React, {Component} from 'react';
import  './sidebar.css';
import effe from './effe.png';
import home from './Home.png';
import garage from './category.png';
import Ser from './Servise.png';
import group from './group.png';
import calculator from './calculator.png';
import settings from './settings.png';
import onam from './onam.jpg';



export default class sidebar extends Component{
    render(){
        return(
            <div className="s_container">
                <div className="bir">
                     <img src={effe} alt="efee"className="menu"/> iffe
                </div>
                <div className="ikki">
                    <div>Menu</div>
                    <div><img src={home} alt='home'className="menu"/>Home</div>
                    <div><img src={garage} alt='garage'className="menu"/>Garage</div>
                    <div><img src={Ser} alt='Ser'className="menu"/>Servise menyu</div>
                    <div><img src={group} alt='group'className="menu"/>Group</div>
                    <div><img src={calculator} alt='calculator'className="menu"/>Calculator</div>
                    <div><img src={settings} alt='settings'className="menu"/>Settings</div>
                </div>
                <div className="uch">
                    <p>Scheduled Races</p>
                    <p>MotoGP 2022</p>
                    <p>Dynamics 22</p>
                    <p>Olympics</p>

                </div>
                <div className="tort">
                    <img src={onam} alt="onam" className="onam"></img>
                    <select >
                        <option>Killua</option>
                    </select>
                </div>
            </div>
        )
    }
}