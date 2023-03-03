import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defauls'
import { GlobalStyle } from './styles/global'
import { Home } from './screens/Home'
import { Navbar } from './components/Navbar'
import { ProductsArea } from './screens/Products'
import { Services } from './screens/Services'
import { History } from './screens/History'
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsArea />} />
          <Route path="/services" element={<Services />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
