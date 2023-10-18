
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class CustomOtpInput extends React.Component {
    constructor(props) {
        super(props);

        this.pinCount = this.props.pinCount || 4;
        this.inputRefs = Array.from({ length: this.props.pinCount || 4 }, () => React.createRef());
        this.state = {
            otp: Array(this.pinCount).fill(''),
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.pinCount !== this.props.pinCount) {
            // Pin count changed, update the component's state and refs
            this.pinCount = this.props.pinCount;
            this.inputRefs = Array.from({ length: this.pinCount }, () => React.createRef());
            this.setState({ otp: Array(this.pinCount).fill('') });
        }
    }

    handleInputChange = (text, index) => {
        if (text.length === 1 && index < this.pinCount - 1) {
            this.inputRefs[index + 1].current.focus();
        }

        const newOtp = [...this.state.otp];
        newOtp[index] = text;
        this.setState({ otp: newOtp });

        if (this.props.onCodeFilled && newOtp.every((value) => value.length === 1)) {
            this.props.onCodeFilled(newOtp.join(''));
        }
    };

    handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            this.inputRefs[index - 1].current.focus();
        }
    };

    render() {
        const {
            inputFieldStyle,
            placeholder = "",
            placeholderTextColor = "",
            secureTextEntry = false,
            keyboardAppearance = "default",
            keyboardType = "numeric",
        } = this.props;

        const defaultInputFieldStyle = {
            width: 40,
            height: 40,
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            fontSize: 24,
            textAlign: 'center',
            marginHorizontal: 5,
        };

        return (
            <View style={styles.container}>
                {Array.from({ length: this.pinCount }).map((_, index) => (
                    <TextInput
                        key={index}
                        ref={this.inputRefs[index]}
                        style={inputFieldStyle || defaultInputFieldStyle}
                        onChangeText={(text) => this.handleInputChange(text, index)}
                        onKeyPress={(e) => this.handleKeyPress(e, index)}
                        keyboardType={keyboardType}
                        maxLength={1}
                        autoFocus={index === 0}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderTextColor}
                        secureTextEntry={secureTextEntry}
                        keyboardAppearance={keyboardAppearance}
                    />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between'
    },
});

export default CustomOtpInput;