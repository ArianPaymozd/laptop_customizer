import React from 'react'
import CustomForm from './CustomizeStore'


export default class MainForm extends React.Component {
    render() {
        return <CustomForm features={this.props.features} data={this.props.data} update={this.props.update}/>
    }
}
