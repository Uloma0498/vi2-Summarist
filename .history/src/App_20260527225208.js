import './App.css';
import { useState } from 'react';
import { auth } from "./firebase/init";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ForYou from './Pages/ForYou';
import SignIn from './components/UI/SignIn';
import SignUp from './components/UI/SignUp';


