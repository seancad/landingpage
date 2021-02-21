import logo from './rembraindt-logo-2.png'
import linkedIn from './linkedIn.png'
import instagram from './instagram1.png'
import display1 from './images/Checkit.png'
import display2 from './images/image2.png'
import display3 from './images/display3.jpg'

import './App.css';
import Blinds from "./components/Blinds";

import React from 'react'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


import {useCollectionData} from 'react-firebase-hooks/firestore'


firebase.initializeApp({
  authDomain: process.env.REACT_APP_authDomain,
  apiKey:process.env.REACT_APP_apiKey ,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId ,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
})


const firestore = firebase.firestore()

const addEmail = async (email)=>{
  const messageRef = firestore.collection('Subscriptions')
  await messageRef.add({
    text : email,
    createdAt : firebase.firestore.FieldValue.serverTimestamp()
  })
  return messageRef
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function send(ref){
  const value = ref.current.value
  if (validateEmail(value)){
    console.log('sending')
    addEmail(value)
  }
}

function App() {
  const formRef = React.useRef()
  return (
    <div className="App">
      <div className="container">
        <Blinds/>
        <div className="navbar"> 
                <img src={logo} alt="logo"></img>
                <div className="title">
                    <div>Rem</div>
                    <div>BRAIN</div>
                    <div>dt</div>
                </div>
            </div>

        <div className="content">
        {/* <div className="img">
          <img src={logo} alt="logo"></img>
        </div> */}
        <div className="card">
        
        Our goal is to provide an unforgettable experience creating art from your brain waves. We offer the frontier of neuro-entertainment, to further explore yourself 
          through the combination of applied art and science.</div>
          <div className="images">
          <img src={display1} alt="logo"></img>
        </div>
        <div className="images">
        <img src={display2} alt="logo"></img>
        </div>
        <div className="images">
        <img src={display3} alt="logo"></img>
        </div>
        <div className="input">
            <input onChange={(e)=>send(formRef)}  class="c-checkbox" type="checkbox" id="checkbox"></input>
              <div class="c-formContainer">
                <form class="c-form" action="" >
                  <input ref={formRef} class="c-form__input" placeholder="E-mail" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required></input>
                  <label class="c-form__buttonLabel" for="checkbox">
                    <button class="c-form__button">Send</button>
                  </label>
                  <label class="c-form__toggle" for="checkbox" data-title="Newsletter Signup"></label>
                </form>
                </div>
        </div>
        </div>
        <div className="footer"> 
            <a href="https://www.linkedin.com/company/70542469/admin/">
              <img src={linkedIn}></img>
            </a>
            <a href="https://www.instagram.com/rembraindt/?igshid=1a7h5tu0g05ev">  
              <img src={instagram}>
              </img>
            </a>
          </div>
          </div>
    </div>
    
  );
}

export default App;
