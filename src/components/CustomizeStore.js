import React from 'react'
import Option from './Option'

export default class CustomForm extends React.Component {
    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Option features={this.props.features} data={this.props.data} update={this.props.update}/>
          </form>
        )
    }
}