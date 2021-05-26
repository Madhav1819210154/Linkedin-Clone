import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQHrc758dsNI0A/profile-displaybackgroundimage-shrink_200_800/0/1593445153696?e=1627516800&v=beta&t=zyq1ltVCL_Vr1i5LStS2D604BZnftRkPAgHIfel6PoU" alt=""></img>
                <Avatar className="sidebar__avatar" src="https://media-exp1.licdn.com/dms/image/C5103AQGTtTW2Dt9g_w/profile-displayphoto-shrink_100_100/0/1581737381477?e=1627516800&v=beta&t=D7W-Aiz_BBmsHE3rylwd42q5E2kELzwQP-1_t_G7y4I"></Avatar>
                <h2>Madhav Singhal</h2>
                <h4>madhavsinghal899@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar_stat">
                    <p>Who Viewed You</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default Sidebar
