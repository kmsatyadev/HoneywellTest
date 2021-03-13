import Login from './components/LoginButton'
import PokemonList from './components/PokemonList'

import {
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route path='/pokemon' component={PokemonList}/>  
    </Switch>
  </main>
)

export default Routes;

