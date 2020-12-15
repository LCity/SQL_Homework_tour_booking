

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlApi from "../../api/urlRequest"
import urlRequest from '../../api/urlRequest';



export default () => {

  const [flightList, setFlightList] = useState([])


  /**
   * 生命周期
   * componentWillMount
   * 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次
   */
  useEffect(() => {
    ; (async () => setFlightList((await UrlApi.getFlight())))()
  }, []

  )
 
  const refreshList = async ()=> setFlightList(await UrlApi.getFlight())

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>航班ID</th>
            <th>起始地</th>
            <th>目的地</th>
            <th>价格</th>
          </tr>
        </thead>

        <tbody>
          {console.log("fucking", flightList)}

          {
            typeof (flightList) === 'undefined' ?
              1 :
              flightList.map((flight) => {
                return (
                  <tr key={flight.pk}>
                    <td>{flight.pk}</td>
                    <td>{flight.fields.fromcity}</td>
                    <td>{flight.fields.arivcity}</td>
                    <td>{flight.fields.price}</td>
                    <td>
                      <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-info"    onClick={()=>{UrlApi.reFlight(localStorage.getItem("id"),flight.pk); alert("预约成功");refreshList()}}>预约</button>
                        <button type="button" class="btn btn-warning" onClick={()=>{UrlApi.delFlight(flight.pk); alert("删除成功");refreshList()}}>删除</button>
                      </div>
                    </td>
                  </tr>
                );
              })
          }
        </tbody>
      </table>
    </div>
  )

}

/**
 * 任何使用this.context.xxx的地方，必须在组件的contextTypes里定义对应的PropTypes
 */

