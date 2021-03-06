import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import FooterBotton from './component/FooterButton';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idText: '이메일',
            pwText: '비밀번호',
            id: '',
            pw: '',
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./icon.png')}
                    style={styles.icon} />
                <Text style={styles.welcome}>환영합니다</Text>
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(id) => this.setState({ id })}
                    placeholder={this.state.idText}
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.textInputButton}
                    onChangeText={(pw) => this.setState({ pw })}
                    placeholder={this.state.pwText}
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <FooterBotton buttonText={'로그인'}
                    style={styles.loginButton}
                    onPress={() => { }} />
                <Text style={styles.noAccountText}>계정이 없으신가요?</Text>
                <TouchableOpacity>
                    <Text style={styles.makeAccountText}>계정 만들기</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D8D8D8'
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 70
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 23
    },
    textInputButton: {
        width: 288,
        borderColor: 'gray',
        paddingVertical: 10,
        borderWidth: 0.3,
        paddingHorizontal: 5,
        borderRadius: 2,
        backgroundColor: 'white',
        height: 50
    },
    loginButton: {
        width: 315,
        height: 50,
        marginTop: 50
    },
    noAccountText: {
        color: '#5B5A5A', fontSize: 12, marginTop: 30
    },
    makeAccountText: {
        color: '#9013FE', fontSize: 12
    }
});