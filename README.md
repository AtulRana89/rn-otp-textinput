![PaginatableList](https://raw.githubusercontent.com/Twotalltotems/react-native-otp-input/master/assets/otp_banner.jpg)

# React Native OTP Input and Verification Code

**rn-otp-textinput** React Native Custom OTP Input is a customizable and easy-to-use OTP input component for React Native applications.

## Installation

`npm install --save rn-otp-textinput`
or
`yarn add rn-otp-textinput`

## Basic Usage

```js
import OTPInputView from 'rn-otp-textinput'

...


<OTPInputView pinCount={4} />

```

## More Advanced Usage

```js
import OTPInputView from '@twotalltotems/react-native-otp-input'

...

<OTPInputView
    pinCount={4}
    inputFieldStyle={styles.inputFieldStyle}
    onCodeFilled={(code) => console.log(code)} // Call your function here
    secureTextEntry={true} // Set to true to hide the input characters for added security
/>

const styles = StyleSheet.create({
  inputFieldStyle: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
});

```

## Parameters

| Parameter               | required | Description                                                                                     |
| ----------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| pinCount                | YES      | Number of digits in the component                                                               |
| inputFieldStyle     | NO       | The inputFieldStyle parameter is used to define the style of the input fields for the OTP. You can customize the appearance of the input fields by providing a style object.                                               |
| onCodeFilled            | NO       | Call your function when the last digit is entered                                                         |
| secureTextEntry         | NO       | Set to true to hide the input characters for added security                                                                    |
| keyboardAppearance      | NO       | Keyboard appearance ('default', 'dark', 'light')                                                |
| keyboardType            | NO       | Set to 'numeric' for a numeric keyboard.
| placeholder    | NO       | The character/string used as a placeholder in the code input fields      |
| placeholderTextColor    | NO       | Color of the placeholder Character                                                               |

## Roadmap

### Version 0.1.0 (Current)
- [ ] Add basic unit tests

### Version 1.1.0 (Upcoming)
- [ ] Feature X: Describe the feature briefly.

