

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlApi from "../../api/urlRequest"
import urlRequest from '../../api/urlRequest';
import './index.css'


export default () => {

    const [current, serCurrent] = useState(1);
    const [displayList, setDisplayList] = useState([])
    const [showTitle, setShowTitle] = useState(["预约航班", "预约航班", "预约巴士", "预约酒店"])
    const [tableTitle, setTableTitle] = useState([["航班ID", "起始地", "目的地", "价格"], ["航班ID", "起始地", "目的地", "价格"], ["酒店ID", "位置", "房间数", "已购房间", "价格"], ["巴士ID", "位置", "座位数", "已购座位", "价格"]])
    useEffect(() => {
        ; (async () => refreshList(1))()
    }, []
    )
    const refreshList = async (num) => {
        await serCurrent(num)
        let id = await UrlApi.getID();
        let res = await (await UrlApi.getFlightRe(id, num)).data['msg'];
        await console.log(res)
        await setDisplayList(res)
    }
    function getListBody(current) {
        switch (current) {
            case 1:
                return (
                    <div>
                        {  <table className="table">
                            <thead>
                                <tr>
                                    {
                                        typeof (tableTitle[current]) === 'undefined' ?
                                            <h1> 请点击左侧栏按钮查看具体预约信息</h1> :
                                            tableTitle[current].map((item) => {
                                                return (
                                                    <th> {item} </th>
                                                );
                                            })
                                    }

                                            )
                                        </tr>
                            </thead>
                            <tbody>
                            {
                                typeof (displayList) === 'undefined' ?
                                    1 :
                                    displayList.map((flight) => {
                                        return (
                                            <tr key={flight.pk}>
                                                <td>{flight.pk}</td>
                                                <td>{flight?.fields.fromcity}</td>
                                                <td>{flight?.fields.arivcity}</td>
                                                <td>{flight?.fields.price}</td>

                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        }</div>
                )
                break;
            case 2:
                return (
                    <div>
                        {
                            <table className="table">
                            <thead>
                                <tr>
                                    {
                                        typeof (tableTitle[current]) === 'undefined' ?
                                            <h1> 请点击左侧栏按钮查看具体预约信息</h1> :
                                            tableTitle[current].map((item) => {
                                                return (
                                                    <th> {item} </th>
                                                );
                                            })
                                    }

                                            )
                                        </tr>
                            </thead>
                            <tbody>
                            {
                                typeof (displayList) === 'undefined' ?
                                    1 :
                                    displayList.map((bus) => {
                                        return (
                                            <tr key={bus.pk}>
                                            <td>{bus.pk}</td>
                                            <td>{bus.fields.location}</td>
                                            <td>{bus.fields.numseats}</td>
                                            <td>{bus.fields.numavail}</td>
                                            <td>{bus.fields.price}</td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        }</div>
                )
                break;
            case 3:
                return (
                    <div>
                        {
                             <table className="table">
                             <thead>
                                 <tr>
                                     {
                                         typeof (tableTitle[current]) === 'undefined' ?
                                             <h1> 请点击左侧栏按钮查看具体预约信息</h1> :
                                             tableTitle[current].map((item) => {
                                                 return (
                                                     <th> {item} </th>
                                                 );
                                             })
                                     }
 
                                             )
                                         </tr>
                             </thead>
                             <tbody>
                             {
                                 typeof (displayList) === 'undefined' ?
                                     1 :
                                     displayList.map((hotel) => {
                                         return (
                                            <tr key={hotel.pk}>
                                            <td>{hotel.pk}</td>
                                            <td>{hotel.fields.location}</td>
                                            <td>{hotel.fields.numrooms}</td>
                                            <td>{hotel.fields.numavail}</td>
                                            <td>{hotel.fields.price}</td>
 
                                             </tr>
                                         );
                                     })
                                 }
                                 </tbody>
                             </table>
                        }</div>
                )
                break;
            default:
                break;
        }

    }

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2 sidebar">

                    <button className="buttonforli" onClick={() => { refreshList(1) }}>Flight </button><br />
                    <button className="buttonforli" onClick={() => { refreshList(3) }}>Hotel </button><br />
                    <button className="buttonforli" onClick={() => { refreshList(2) }}>Bus  </button>

                </div>
                <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    <div>
                        <h1 class="page-header">{showTitle[current]}</h1>
                        <div class="table-responsive">
                            <div>



                                {getListBody(current)}

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )

}

/**
 * 任何使用this.context.xxx的地方，必须在组件的contextTypes里定义对应的PropTypes
 */

