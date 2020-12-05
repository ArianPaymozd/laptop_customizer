import React from 'react'

import CartItems from './CartItems'

import CartTotal from './CartTotal'

export default class Cart extends React.Component {
    render () {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItems data={this.props.data}/>
                <CartTotal data={this.props.data}/>
            </section>
        )
    }
}