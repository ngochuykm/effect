import React from 'react'
import { connect } from 'react-redux'

class HeaderContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div></div>
        )
    }    
}

const mapStateToProps = (state) => {
    return{}
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
