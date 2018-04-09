/**
 * Created by cijo.kb on 27/04/17.
 */
import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import './HomePage.css';
import android from '../images/androidphone.svg';
import iphone from '../images/iosphone.svg';
import ipad from '../images/iostablet.svg';
import tablet from '../images/androidtablet.svg';
import uploadDownload from '../images/uploadDownload.svg';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';


const HomePage = ({devices}) => (
   
    <div className="HomePageWrapper">
        <div className="ToggleWrapper">
            <div className="ToggleInnerWrapper">
                <Toggle label={'Show all devices'} labelPosition={'right'}/>
            </div>
        </div>
        {devices ? devices.map(function (item) {
            let osVersion = <div style={{"display": "flex","justifyContent": "flexStart"}}>
                            <div>{item.osVersion}</div>
                            <RaisedButton label="Submit" primary={true} style={{"marginLeft":"auto","marginRight": "35px"}}  disabled={false} onClick={(e)=>{alert("todo");e.stopPropagation();}}/>
                            </div>;  
            return (
                <Card key={item.key} style={{marginBottom: '5px'}} initiallyExpanded={false}>
                    <CardHeader
                        title={item.model}
                        subtitle={<div style={{"display":"flex"}}><div>{item.tag}</div><div style={{"color":"#4CAF50","marginLeft":"auto","marginRight": "35px"}}>Avialable</div></div>}
                        actAsExpander={true}
                        showExpandableButton={true}
                        avatar={imgAvatar(item.os, item.category)}
                        style={{'textAlign': 'left'}}
                        children ={osVersion}
                        textStyle={{"paddingRight": "0px","width": "calc(100% - 56px)"}}
                    />
                    <CardText expandable style={{"paddingTop":"5px"}}>
                        <div style={{"borderTop":"1px solid #e2dddd"}}></div>
                         <div style={{"paddingTop":"10px"}}>
                            <div style={{"textAlign":"left"}}><span>Last Used By</span></div>
                            <div className="userHistory">
                                <ul style={{"listStyleType": "none"}}>
                                    <li>
                                        <div className="circle"></div>
                                        <div className="info">
                                            <div>
                                                <span>Cijo K.B</span>
                                            </div>
                                            <div className="dateInfo">
                                                <span>18/03/2017</span>
                                            </div>
                                            <div className="uploadDownload">
                                                <img src={uploadDownload} className="uploadDownload" alt="uploadDownload"/>
                                            </div>
                                            <div className="dateInfo">
                                                <span>18/03/2017</span>
                                            </div>
                                        </div>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                    <div className="circle"></div>
                                        <div className="info">
                                            <div>
                                                <span>Manu</span>
                                            </div>
                                            <div className="dateInfo">
                                                <span>18/03/2017</span>
                                            </div>
                                            <div className="uploadDownload">
                                                <img src={uploadDownload} className="uploadDownload" alt="uploadDownload"/>
                                            </div>
                                            <div className="dateInfo">
                                                <span>18/03/2017</span>
                                            </div>
                                        </div>
                                        <div className="line"></div>
                                    </li>
                                    <li>
                                    <div className="circle"></div>
                                        <div className="info">
                                            <div onTouchEnd={(e)=>alert("todo")}>
                                                <span style={{"color":"blue"}}>More ...</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                         </div>   
                    </CardText>
                </Card>);
        }) : null}
    </div>);

const imgAvatar = (os = 'android', category = 'phone') => {
    let avatarUrl = tablet;
    if (os === 'ios') {
        if (category === 'phone') {
            avatarUrl = iphone;
        } else {
            avatarUrl = ipad;
        }
    }
    else {
        if (category === 'phone') {
            avatarUrl = android;
        }
    }
    return avatarUrl;
};


export default HomePage;
