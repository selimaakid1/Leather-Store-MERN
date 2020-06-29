import React from 'react'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

const Alerts = props => {
    return (
        <div className='alerts'>
            {props.alert.length > 0 && props.alert.map(alert => (
            <Alert key={alert.id} variant={alert.type}>
                {alert.msg}
            </Alert>))}
        
</div >
    )
}


const mapStateToProps = state => {
    return {
        alert: state.alert
    }
}
export default connect(mapStateToProps)(Alerts)