import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntIcons from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Entypo'
import Images from '../assets/images/Images'
import Constants from '../shared/Constants'
import { Api, USER_LOGIN_URL } from '../services/api'
import SimpleToast from 'react-native-simple-toast'
import ErrorMsg from '../shared/ErrorMsg'
import { setToken } from '../services/storage'
import { useDispatch } from 'react-redux'
import { login, userType } from '../shared/redux/features/users.slice'

const Login = (props) => {
  const navigation = useNavigation()
  const [ showpass, setShowpass ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const dispatch = useDispatch()
  const togglePassword = () => {
    setShowpass(!showpass)
  }
  const gotoForgotPassword = () => {

  }
  const gotoSignup = ()=>{
    navigation.navigate('Signup')
  }
  const gotoResellerLogin = ()=>{
    navigation.navigate('ResellerLogin')
  }
  const memberLogin = ()=>{
    dispatch(userType('member'))
    props.updateUserType('member')

    // if(email==''){
    //   SimpleToast.show(ErrorMsg.emailRequired)
    // }
    // else if(password==''){
    //   SimpleToast.show(ErrorMsg.passwordRequired)
    // }
    // else{
    //   Api(USER_LOGIN_URL, 'POST', {email: email, password: password}).then(res=>{
    //     const data = res?.data
    //     if(data.status==200){
    //       dispatch(login(data.user))
    //       setToken(data?.user?.session_key)
    //       props.navigation.navigate('Signup')
    //     }
    //     else{
    //       SimpleToast.show(res.data.message)
    //     }
    //   }).catch(err=>console.log(err))
    // }
  }
  return (
    <View style={{ flex: 1, backgroundColor: Constants.colors.white, }}>
      <ScrollView style={{ flex: 1, }}>
        <View style={styles.header}>
          <Image source={Images.logo} style={styles.logo} />
          <View style={styles.curvedUpper}></View>
        </View>
        <View style={styles.body}>
          <View style={styles.loginTextContainer}><Text style={styles.loginText}>Log In</Text></View>
          <View style={styles.inputContainer}>
            <AntIcons name='user' color={Constants.colors.primary} size={24} style={styles.inputIcon} />
            <TextInput style={styles.textInput} placeholder="Username" onChangeText={(text)=>setEmail(text)} />
          </View>
          <View style={styles.inputContainer}>
            <AntIcons name='lock1' color={Constants.colors.primary} size={24} style={styles.inputIcon} />
            <TextInput secureTextEntry={!showpass} style={styles.textInput} placeholder="Password" onChangeText={(text)=>setPassword(text)}  />
            <Pressable onPress={togglePassword}><Icon name={showpass ? 'eye-with-line' : 'eye'} color={Constants.colors.primary} size={24} style={styles.paswordToggle} /></Pressable>
          </View>
          <Pressable onPress={gotoForgotPassword}><Text style={styles.forgotpasswordText}>Forgot Password</Text></Pressable>
          <Pressable style={styles.button} onPress={memberLogin}><Text style={styles.buttonText}>Log In</Text></Pressable>
          <View style={styles.signupLink}>
            <Text style={styles.notAmember}>Not a Member </Text><Pressable onPress={gotoSignup}><Text style={styles.signupText}>Sign Up</Text></Pressable>
          </View>
          <Pressable style={styles.button} onPress={gotoResellerLogin}><Text style={styles.buttonText}>Reseller Login</Text></Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.colors.primary,
    borderBottomRightRadius: 60,
  },
  logo: {
    width: 235,
    height: 235,
  },
  curvedUpper: {
    backgroundColor: Constants.colors.primary,
    height: 60,
    width: '20%',
    position: 'absolute',
    top: '100%',
    left: 0,
  },
  body: {
    flex: 4,
    backgroundColor: Constants.colors.white,
    borderTopLeftRadius: 60,
    padding: Constants.padding,
  },
  loginTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  loginText: {
    fontFamily: Constants.fontFamily.RobotoBold,
    fontSize: 32,
    color: Constants.colors.primary,
    marginBottom: Constants.margin,
  },
  inputContainer: {
    marginTop: 8,
    height: 55,
    backgroundColor: Constants.colors.inputBg,
    borderRadius: Constants.borderRadius,
  },
  inputIcon: {
    position: 'absolute',
    top: 14,
    left: 10,
  },
  textInput: {
    position: 'absolute',
    left: 38,
    top: 3,
    right: 38,
  },
  paswordToggle: {
    position: 'absolute',
    top: 14,
    right: 10,
  },
  forgotpasswordText: {
    alignSelf: 'flex-end',
    fontFamily: Constants.fontFamily.RobotoRegular,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    color: Constants.colors.secondary,
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 220,
    padding: 25,
    marginTop: Constants.margin,
    backgroundColor: Constants.colors.primary,
    borderRadius: Constants.borderRadius,
  },
  buttonText: {
    fontFamily: Constants.fontFamily.RobotoRegular,
    color: Constants.colors.white,
    fontSize: 22,
    alignSelf: 'center',
  },
  signupLink: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 20,
  },
  notAmember: {
    marginTop: 8,
    fontFamily: Constants.fontFamily.PoppinsMedium,
    fontSize: 16,
    color: Constants.colors.black,
  },
  signupText: {
    fontFamily: Constants.fontFamily.RobotoBold,
    fontSize: 28,
    color: Constants.colors.primary,
    borderBottomWidth: 3,
    borderBottomColor: Constants.colors.secondary,
  },
})

export default Login