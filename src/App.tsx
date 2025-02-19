/* -------------------------------------------
  (c)2025 Lance Stubblefield
  elynoradmin: src/App.tsx
-------------------------------------------- */
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import {Layout} from "./layout";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import ThemesPage from "./pages/themes";
import AdminPage from "./pages/admin";
import NewsPage from "./pages/news";

function App() {

    return (
        <div className="App">

            AppTSX
            <Toaster reverseOrder={true}/>

            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='products' element={<ProductsPage/>}/>
                    {/*<Route path='products/:productID' element={<ProductsPage/>}/>*/}
                    {/*<Route path='products/opts' element={<ProductsPage/>}/>*/}
                    {/*<Route path='products/cats' element={<ProductsPage/>}/>*/}
                    <Route path='themes' element={<ThemesPage/>}/>
                    <Route path='news' element={<NewsPage/>}/>
                    <Route path='admin' element={<AdminPage/>}/>
                </Routes>
            </Layout>

        </div>
    )
}

export default App
