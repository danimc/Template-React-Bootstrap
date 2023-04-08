import "./App.css"
import ContainerPage from "./pages/container"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <ContainerPage />
    </BrowserRouter>
  )
}

export default App
