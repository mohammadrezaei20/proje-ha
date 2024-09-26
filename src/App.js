import React, { Component } from 'react'
import Quiz from './components/Quiz/Quiz'
import Ticket from './components/Ticket/Ticket'
export default class App extends Component {
    render() {
        return (
            <div>
                <Ticket />
            </div>
        )
    }
}
