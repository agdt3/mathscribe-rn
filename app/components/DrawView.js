const ColorPropType = require('ColorPropType')

import React, {Component, PropTypes} from 'react'
import {requireNativeComponent} from 'react-native';


class DrawView extends Component {
    constructor() {
        super()
        this._onChange = this._onChange.bind(this)
    }

    _onChange(event: Event) {
        //console.log("_onChange")
        //console.log(event.nativeEvent.point)
        this.props.drawHandler({
            status: event.nativeEvent.status,
            point: event.nativeEvent.point
        })
    }

    render() {
        return (<RCTLinearInterpView
                    {...this.props}
                    onChange={this._onChange}
                />)
    }
}

DrawView.propTypes = {
    opaque: PropTypes.bool,
    backgroundColor: ColorPropType,
    onChange: PropTypes.func,
    loadedPaths: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    drawHandler: PropTypes.func
}

var RCTLinearInterpView = requireNativeComponent('RCTLinearInterpView', DrawView)

module.exports = DrawView
