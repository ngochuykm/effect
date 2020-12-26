import React from 'react'
import { connect } from 'react-redux'
import Header from '../component/Header'

class HeaderContainer extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <Header {...this.props}></Header>
            </div>
        )
    }    
}

const mapStateToProps = (state) => {
    return{
        page: state.config.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer)
