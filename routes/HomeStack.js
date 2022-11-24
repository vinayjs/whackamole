import {createStackNavigator} from  'react-navigation-stack'
import{createAppContainer} from 'react-navigation'
import HomePage from '../components/HomePage'
import GameBoard from '../components/GameBoard'


const screens = {
    Home: {
        screen: HomePage
    },
    GameBorad: {
        screen: GameBoard
    }

}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)
