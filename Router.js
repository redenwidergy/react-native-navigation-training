import { createStackNavigator } from "react-navigation";

import TodoApp from "./Apps/TodoApp";
import Books from "./Books";

export default createStackNavigator(
  {
    Home: TodoApp,
    Books: Books
  },{
    initialRouteName: 'Books'
  }
);