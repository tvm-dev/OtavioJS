//imports JS:
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//css imports:
//import './assets/css/style.css'

import Login from './modules/Login'

const formLogin = new Login('.formLogin')
const formRegister = new Login('.formRegister')

formLogin.init()
formRegister.init()
  