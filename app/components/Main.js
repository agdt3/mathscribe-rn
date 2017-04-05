import React, {Component} from 'react'
import {Text, View} from 'react-native'
import DrawView from './DrawView'

// Constants
const TOUCHES_BEGAN = 'touchesBegan'
const TOUCHES_MOVED = 'touchesMoved'
const TOUCHES_ENDED = 'touchesEnded'


class Main extends Component {
    render() {
        const loadedPaths = [[20, 30, 20, 40, 20, 80], [100, 100, 200, 200, 300, 300]]
        return (
            <DrawView
                style={{
                    flex: 1,
                    backgroundColor: '#b8101f',
                    opaque: {true}
                }}
                loadedPaths={loadedPaths}
                drawHandler={this.drawHandler.bind(this)}
            />
        )
    }

    drawHandler(touchEvent) {
        if (touchEvent.status === TOUCHES_BEGAN) {

        }
        else if (touchEvent.status === TOUCHES_MOVED) {

        }
        else if (touchEvent.status === TOUCHES_ENDED) {

        }
    }
}

export default Main
