import React, { useRef, useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomOtpInput = ({ pinCount = 4, inputFieldStyle, placeholder = "", placeholderTextColor = "#fff", secureTextEntry = false, keyboardAppearance = "default", keyboardType = "numeric", onCodeFilled }) => {
    const inputRefs = Array.from({ length: pinCount }, () => useRef(null));
    const [otp, setOtp] = useState(Array(pinCount).fill('')); // Store OTP in state

    // Use useEffect to update the OTP state when pinCount changes
    useEffect(() => {
        setOtp(Array(pinCount).fill(''));
    }, [pinCount]);

    const handleInputChange = (text, index) => {
        // Move focus to the next input field
        if (text.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        }
        // Update the OTP in state
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Check if all fields are filled
        if (onCodeFilled && newOtp.every((value) => value.length === 1)) {
            onCodeFilled(newOtp.join('')); // Call the callback with the joined OTP
        }
    };

    const handleKeyPress = (e, index) => {
        // Handle backspace key press
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    // Define a default style if inputFieldStyle is not provided
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
            {Array.from({ length: pinCount }).map((_, index) => (
                <TextInput
                    key={index}
                    ref={inputRefs[index]}
                    style={inputFieldStyle || defaultInputFieldStyle} // Use provided inputFieldStyle or default
                    onChangeText={(text) => handleInputChange(text, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
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
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
export default CustomOtpInput;