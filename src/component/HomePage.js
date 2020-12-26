import React from 'react'
import '../style/homePage.css'
import Border from './HomePage/Border'

class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            <div className="home-page">
                <div className="container">
                    <div className="homepage-warp">
                        <Border {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage