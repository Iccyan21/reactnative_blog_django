import { createStackNavigator } from "@react-navigation/stack";
import BlogScreen from "../screens/blog/BlogScreen";
import BlogDetailScreen from "../screens/blog/BlodDetailScreen";

const Stack = createStackNavigator()

export const BlogNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="BlogScreen" 
            component={BlogScreen} 
            options={{
                headerTitle: 'ブログ',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#FDE047',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            />
            <Stack.Screen 
            name="BlogDetailScreen" 
            component={BlogDetailScreen} 
            options = {{
                headerTitle: 'ブログ詳細',
                headerTitleAlign: 'center',
                headerStyle: {
                backgroundColor: '#FDE047',
                },
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            />
        </Stack.Navigator>
    )
}

