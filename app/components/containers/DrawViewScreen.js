import React, {Component} from 'react'
import {View, Text, Button, TouchableHighlight} from 'react-native'
import DrawView from '../components/DrawView'

// Constants
const TOUCHES_BEGAN = 'touchesBegan'
const TOUCHES_MOVED = 'touchesMoved'
const TOUCHES_ENDED = 'touchesEnded'

class DrawViewScreen extends Component {

    constructor() {
        super()
        this.drawHandler = this.drawHandler.bind(this)
        this.toggleDrawButtonHandler = this.toggleDrawButtonHandler.bind(this)
        this.newPageButtonHandler = this.newPageButtonHandler.bind(this)
    }

    render() {
        const loadedPaths = [[20, 30, 20, 40, 20, 80], [100, 100, 200, 200, 300, 300]]
        return (
            <View
                style={{
                    flex:1
                }}
            >
                <Button
                    onPress={this.newPageButtonHandler}
                    title="+"
                />
                <DrawView
                    style={{
                        flex: 1,
                        backgroundColor: '#b8101f',
                        opaque: {true},
                        position: 'relative'
                    }}
                    loadedPaths={loadedPaths}
                    drawHandler={this.drawHandler}
                    lineColor={'#ffffff'}
                    lineWidth={8.0}
                />
                <View
                    style={{
                        flex: 0,
                        maxWidth: 60,
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: '#ee6e73',
                        position: 'absolute',
                        bottom: 10,
                        right: 10
                    }}
                >
                    <Button
                        onPress={this.toggleDrawButtonHandler}
                        title="Draw"
                    />
                </View>
            </View>
        )
    }

    drawHandler(touchEvent) {
        console.log(touchEvent)
        if (touchEvent.state === TOUCHES_BEGAN) {

        }
        else if (touchEvent.state === TOUCHES_MOVED) {

        }
        else if (touchEvent.state === TOUCHES_ENDED) {

        }
    }

    toggleDrawButtonHandler() {
        //this.store.dispatch('toggleDrawable')
    }

    newPageButtonHandler() {
        if (this.props.newPageHandler) {
            this.props.newPageHandler()
        }
    }
}

export default DrawViewScreen
