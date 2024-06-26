import Home from "./pages/home/Home"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom"
import Login from "./pages/login/Login"
import Wallet from "./pages/wallet/Wallet"
import List from "./pages/list/List"
import New from "./pages/add/New"
import { userInputs } from "./pages/add/formSource"
import "./style/dark.scss"
import { DarkModeContext } from "./context/darkModeContext"
import {useContext} from "react"
import "./app.scss"
function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter> 
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="users" >
              <Route index element={<List />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
