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

const HomePage = ({devices}) => {
    return (<div className="HomePageWrapper">
        {devices ? devices.map(function (item) {
            return (<Card key={item.key} style={{marginBottom: '5px'}} initiallyExpanded={false}>
                <CardHeader
                    title={item.model}
                    subtitle={item.tag}
                    actAsExpander={true}
                    showExpandableButton={true}
                    avatar={imgAvatar(item.os, item.category)}
                    style={{'textAlign': 'left'}}
                />
                <CardText expandable>
                    <CardText>
                      "Todo"
                    </CardText>
                </CardText>
            </Card>);
        }) : null
        }
    </div>);
};

const imgAvatar = (os = 'android', category = 'phone') => {
    let avatarUrl = tablet;
    if (os === 'ios') {
        if (category === 'phone') {
            avatarUrl = iphone;
        } else {
            avatarUrl = ipad;
        }
    }
    if (category === 'phone') {
        avatarUrl = android;
    }
    return avatarUrl;
};

export default HomePage;
