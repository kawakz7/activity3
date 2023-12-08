import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import HomePage from './components/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={RegistrationPage} name="Register" options={{headerShown:false}}/>
        <Stack.Screen component={LoginPage} name="Login" options={{headerShown:false}}/>
        <Stack.Screen component={HomePage} name="Home" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App(){
  return(
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  )
}