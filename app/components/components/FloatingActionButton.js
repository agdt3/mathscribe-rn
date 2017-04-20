import React, { PropTypes } from 'react'

class FloatingActionButton extends React.Component {
    render() {
        return (
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
                    onPress={this.props.onPressHandler}
                    title={this.props.title}
                    icon={this.props.icon}
                />
            </View>
        )
    }
}


