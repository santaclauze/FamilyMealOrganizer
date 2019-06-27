import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import WeeklyCalendar from 'app/screens/WeeklyCalendar';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: null, gesturesEnabled: false }
        },
        WeeklyCalendar: {
            screen: WeeklyCalendar,
            navigationOptions: { header: null, gesturesEnabled: false }
        }

    },
    {
    }
);

export default createAppContainer(RNApp);
