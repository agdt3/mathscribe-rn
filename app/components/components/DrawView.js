const ColorPropType = require('ColorPropType')

import React, {PropTypes} from 'react'
import {requireNativeComponent} from 'react-native';


class DrawView extends React.Component {
    constructor() {
        super()
        this._onChange = this._onChange.bind(this)
    }

    _onChange(event: Event) {
        this.props.drawHandler({
            state: event.nativeEvent.state,
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

DrawView.defaultProps = {
    loadedPaths: [],
    lineColor: '#000000',
    lineWidth: 1.0
}

DrawView.propTypes = {
    opaque: PropTypes.bool,
    backgroundColor: ColorPropType,
    onChange: PropTypes.func,
    loadedPaths: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    drawHandler: PropTypes.func.isRequired,
    lineColor: ColorPropType,
    lineWidth: PropTypes.number
}

let RCTLinearInterpView = requireNativeComponent('RCTLinearInterpView', DrawView)

module.exports = DrawView
