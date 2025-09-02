import { Route, Routes } from "react-router"
import LayoutClient from "./pages/LayoutClient"
import Home from "./pages/client/Home"

function App() {

  return (
    <Routes>
      <Route path="/" element={<LayoutClient />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
