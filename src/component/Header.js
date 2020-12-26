import React from 'react'
import '../style/header.css'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            pageHover: ""
        }
    }

    render(){
        return(
            <div className="header-warp">
                <div className="container">
                    <div className="header">
                        <div className="logo">NGỌC HUY</div>
                        <div className="menu">
                            <ul>
                                <li onMouseEnter={() => this.setState({pageHover: this.props.page==="border"? "":"border"})} onMouseLeave={() => this.setState({pageHover:""})} className={(this.props.page==="border"&&this.state.pageHover==="")||this.state.pageHover==="border"? "active":""}><a href="/border">Border</a></li>
                                <li onMouseEnter={() => this.setState({pageHover: this.props.page==="animation"? "":"animation"})} onMouseLeave={() => this.setState({pageHover:""})} className={(this.props.page==="animation"&&this.state.pageHover==="")||this.state.pageHover==="animation"? "active":""}><a href="/animation">Animation</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header