import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyUser from '@pages/MyUser';
import CreateUser from '@pages/CreateUser';
import AdminUser from '@pages/AdminUser';
import MyAccount from '@pages/MyAccount';
import MyCategories from '@pages/MyCategories';
import MyBudget from '@pages/MyBudget';
import MyAuditTransaction from '@pages/MyAuditTransaction';
import CreateAccount from '@pages/CreateAccount';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'
import '@styles/global.css';

const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>                
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/password-recovery" element={<PasswordRecovery/>} />
                        <Route exact path="/send-email" element={<SendEmail/>} />
                        <Route exact path="/new-password" element={<NewPassword/>} />
                        <Route exact path="/user" element={<MyUser/>} />
                        <Route exact path="/signup" element={<CreateUser/>} />
                        <Route exact path="/account" element={<MyAccount/>} />
                        <Route exact path="/categories" element={<MyCategories/>} />
                        <Route exact path="/budget" element={<MyBudget/>} />  
                        <Route exact path="/audit-transaction" element={<MyAuditTransaction/>} />                     
                        <Route exact path="/create-account" element={<CreateAccount/>} />
                        <Route exact path="/admin-user" element={<AdminUser/>} />
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Layout>             
            </BrowserRouter>  
        </AppContext.Provider>   
    );
}

export default App;