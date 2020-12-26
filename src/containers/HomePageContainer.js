import React from 'react'
import * as actions from '../action'
import { connect } from 'react-redux'
import HomePage from '../component/HomePage'

class HomePageContainer extends React.Component{
    constructor(props){
        super()
    }
    componentDidMount(){
        this.props.setPages(this.props.currentPage)
    }
    render(){
        return(
            <div>
                <HomePage {...this.props}></HomePage>
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
    return{
        setPages: (payload) => {
            dispatch(actions.setPage(payload))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePageContainer)
