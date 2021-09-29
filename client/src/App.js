import { useEffect } from "react";
import { useProgress } from "@react-three/drei";
import Plants from './Plants'
import { ThemeProvider } from "@material-ui/core"
import Theme from "./components/Theme.js"
import { a, useTransition } from "@react-spring/web";
import { Route, Switch } from "react-router-dom"
import Login from './components/Login'
import { useState } from 'react'
import SignUp from './components/SignUp'
import PlantsContainer from "./components/PlantsContainer";
import Footer from './components/Footer'
import Cart from "./components/Cart"
import Dashboard from "./components/Dashboard"
import * as React from 'react';
import ToolsContainer from './components/ToolsContainer'
import BooksContainer from './components/BooksContainer'

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}


function App() {
  const [plants, setPlants] = useState([])
  const [tools, setTools] = useState([])
  const [books, setBooks] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [search, setSearch] = useState('');
  const [searchTools, setSearchTools] = useState('');
  const [searchBooks, setSearchBooks] = useState('');
  const [userCart, setUserCart] = useState(false)



  function onLogin(user) {
    setCurrentUser(user)
  }

  function onLogout() {
    setCurrentUser(false)
  }

  useEffect(() => {
    if (currentUser) {
      fetch(`/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setUserCart(data.poly_carts))
    }
    else {
      setUserCart([])
    }
  }, [currentUser])

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then(res => res.json())
      .then(setPlants)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then(res => res.json())
      .then(setBooks)
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/tools")
      .then(res => res.json())
      .then(setTools)
  }, [])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  let plantsToDisplay = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );
  const toolsToDisplay = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchTools.toLowerCase())
  );
  const booksToDisplay = books.filter((book) =>
    book.title.toLowerCase().includes(searchBooks.toLowerCase())
  );

 
  function sortPlantsPrice() {
    plantsToDisplay.sort((a, b) => a.price.toString().localeCompare(b.price.toString()))
  }


  const newPlants = plantsToDisplay.filter(plant => plant.lighting === true)
  

  function onDeleteItem(id){
    fetch(`/users/${currentUser.id}/poly_carts/${id}`, {
      method: 'DELETE'
    })
    const newCart = userCart.filter(item => item.id !== id)
    setUserCart(newCart)
  }

  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="#224229"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63"></tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(currentUser ? cursor : auto)}'), auto`
  }, [currentUser])

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Switch>
          <Route
            path='/login'
            component={() =>
              <Login onLogin={onLogin} />}
          />
          <Route
            path='/dashboard'
            component={() =>
              <Dashboard plants={plants} userCart={userCart} onLogout={onLogout} />}
          />
          <Route
            path='/purchase_tools'
            component={() =>
              <ToolsContainer setTools={setTools} onLogout={onLogout}  searchTools={searchTools} setSearchTools={setSearchTools} setUserCart={setUserCart} userCart={userCart} tools={toolsToDisplay} userCart={userCart} currentUser={currentUser} />}
          />
          <Route
            path='/purchase_books'
            component={() =>
              <BooksContainer setBooks={setBooks} onLogout={onLogout}  searchBooks={searchBooks} setSearchBooks={setSearchBooks} setUserCart={setUserCart} userCart={userCart} books={booksToDisplay} userCart={userCart} currentUser={currentUser} />}
          />
          <Route
            path='/signup'
            component={() =>
              <SignUp onLogin={onLogin} />}
          />
          <Route
            path='/Cart'
            component={() =>
              <Cart userCart={userCart} onLogin={onLogin} onDeleteItem={onDeleteItem} />}
          />
          <Route
            path='/purchase_plants'
            component={() =>
              <PlantsContainer setPlants={setPlants} onLogout={onLogout} search={search} setUserCart={setUserCart} userCart={userCart} currentUser={currentUser} search={search} setSearch={setSearch} plants={plantsToDisplay} />}
          />
          <Route
            path='/'
            component={() =>
              <Plants plants={plants} />}
          />
        </Switch>
        <Footer />
        <Loader />
      </ThemeProvider>
    </>
  );
}

export default App;
