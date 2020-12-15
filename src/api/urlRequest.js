import PropTypes from 'prop-types';
import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';


const serverUrl = "http://localhost:8001/tourbooking/";


export default {
    async getFlight() {
        let res = await axios.get(serverUrl + 'flights/');

        return res.data['msg']
    },
    async getBus() {
        let res = await axios.get(serverUrl + 'bus/');
        return res.data['msg']
    },
    async getHotel() {
        let res = await axios.get(serverUrl + 'hotels/');
        return res.data['msg']
    },
    async getRes() {
        let res = await axios.get(serverUrl + 'reservations/');
        return res.data['msg']
    },
    async resUser(id, name) {
        var qs = require('qs');
        var data = qs.stringify({
            'id': id,
            'name': name,
        });
        var config = {
            method: 'post',
            url: serverUrl + 'custom/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: data,
            data: data
        };
        let res = await axios(config);
        return res
    },
    async delFlight(flightnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': flightnum
        });
        var config = {
            method: 'delete',
            url: serverUrl + 'flights/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },

    async delBus(busnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': busnum
        });
        var config = {
            method: 'delete',
            url: serverUrl + 'bus/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },

    async delHotel(hotelnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': hotelnum
        });
        var config = {
            method: 'delete',
            url: serverUrl + 'hotels/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },
    async getID() {
        let id = JSON.parse(localStorage.getItem("id"))
        return id
    },
    async reBus(id, busnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': busnum,
            'id': id
        });
        var config = {
            method: 'post',
            url: serverUrl + 'bus/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },
    async reFlight(id, flightnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': flightnum,
            'id': id
        });
        var config = {
            method: 'post',
            url: serverUrl + 'flights/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },
    async reHotel(id, hotelnum) {
        var qs = require('qs');
        var data = qs.stringify({
            'num': hotelnum,
            'id': id
        });
        var config = {
            method: 'post',
            url: serverUrl + 'hotels/',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };
        let res = await axios(config);
        return res
    },
    async getFlightRe(id,retype){
        var qs = require('qs');
        console.log(id,retype)
        var params= qs.stringify({
            'id':id,
            'type':retype,
            
        })
        var config = {
            method: 'get',
            url: serverUrl + 'reservations/',
            
            params:{
                id:id,
                type:retype,
            }
        };
        let res = await axios(config);
    
        return res
    }


}
