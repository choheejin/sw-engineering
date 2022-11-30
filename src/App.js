import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import {ItemDetailPage, ItemListPage, ItemWritePage} from "./pages/item-page";
import {MainPage, NotFoundPage} from "./pages";
import {LoginPage, UserPage, SignupPage} from "./pages/auth-page";
import {useEffect, useState} from "react";
import OrderListPage from "./pages/order-page/OrderListPage";
import RepairListPage from "./pages/repair-page/RepairListPage";
import EmployeePage from "./pages/auth-page/EmployeePage";
import SupplierPage from "./pages/order-page/SupplierPage";

function App() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('cusNo')){
            setIsLogin(true);
        }
    })

    return (
        <div className="bg-gray-50 h-full min-h-screen">
            <Navigation/>
            <Router>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/signup" element={<SignupPage/>}></Route>

                    <Route path="/employee" element={<EmployeePage/>}></Route>
                    <Route path="/user" element={<UserPage/>}></Route>

                    <Route path="/items" element={<ItemListPage/>}></Route>
                    <Route path="/item/:key" element={<ItemDetailPage/>}></Route>
                    <Route path="/item/apply" element={<ItemWritePage/>}></Route>

                    <Route path="/orders" element={<OrderListPage/>}></Route>
                    <Route path="/suppliers" element={<SupplierPage/>}></Route>

                    <Route path="/repairs" element={<RepairListPage />}></Route>

                    <Route path="/main" element={<MainPage/>}></Route>

                    <Route path="/" element={isLogin? <MainPage/> : <LoginPage/>}></Route>
                    <Route path="*" element={<NotFoundPage/>}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
