import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../components/MainScreen";
import MovieDetailScreen from "../components/MovieDetailScreen";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen}  />
        <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
  
}

export default AppNavigation;
