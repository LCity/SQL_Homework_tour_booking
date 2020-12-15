

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlApi from "../../api/urlRequest"
import urlRequest from '../../api/urlRequest';



export default () => {

  const [hotelList, sethotelList] = useState([])


  /**
   * 生命周期
   * componentWillMount
   * 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次
   */
  useEffect(() => {
    ; (async () => sethotelList((await UrlApi.getHotel())))()
  }, []

  )

  const refreshList = async () => sethotelList(await UrlApi.getHotel())

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>酒店ID</th>
            <th>位置</th>
            <th>房间数</th>
            <th>已购房间</th>
            <th>价格</th>
          </tr>
        </thead>

        <tbody>


          {
            typeof (hotelList) === 'undefined' ?
              1 :
              hotelList.map((hotel) => {
                return (
                  <tr key={hotel.pk}>
                    <td>{hotel.pk}</td>
                    <td>{hotel.fields.location}</td>
                    <td>{hotel.fields.numrooms}</td>
                    <td>{hotel.fields.numavail}</td>
                    <td>{hotel.fields.price}</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-info" onClick={() => { UrlApi.reHotel(localStorage.getItem("id"), hotel.pk); alert("预约成功"); refreshList() }}>预约</button>
                        <button type="button" class="btn btn-warning" onClick={() => { UrlApi.delHotel(hotel.pk); alert("删除成功"); refreshList() }}>删除</button>
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

