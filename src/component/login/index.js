
import PropTypes from 'prop-types';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import urlRequest from '../../api/urlRequest';
import { Link, Router } from 'react-router-dom'
import App from '../../App'
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.get['Content-Type'] = 'application/json';
const serverUrl = "http://localhost:8001/tourbooking/flights/"


export default () => {

    const [userID, setUserID] = useState(0)

    const [pageControl, setPageControl] = useState(0)
    const [userName, setUserName] = useState("Li")

    useEffect(() => {
        let res = localStorage.getItem('id')
        console.log(res)
        if(!(res === null))
            setPageControl(1);
    }, [])
  
     
    const saveId = (id, name) => {
        let res = urlRequest.resUser(id, name)
        
        localStorage.setItem("id", id)
        alert("登录成功")
    }

    const inputChange = (e) => {
        this.setUserName(e.target.value)
    }
    const IDRef = useRef();
    const nameRef = useRef();
    const showPage = () => {

        if (pageControl === 0)
            return (<div class="container">
                <form class="form-signin">
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label for="inputID" class="sr-only">ID</label>
                    <input type="text" id="inputID" class="form-control" placeholder="Please input ID" required="" autofocus="" value={userID} onChange={(val) => { setUserID(val.value) }} />
                    <label for="inputName" class="sr-only">Name</label>
                    <input type="text" id="inputPassword" class="form-control" value={userName} placeholder="Please input name" required=""    onChange={(val) => { setUserName(val.value) }} />
                    <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={() => { saveId(userID, userName); setPageControl(1) }}>Sign in</button>
                </form>
            </div>)
        else {
            return (
                <div>
                    <App />
                </div>
            )
        }

    }

    return (
        <div>
            <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>

            {
                showPage(pageControl)
            }
        </div >
    );
}



