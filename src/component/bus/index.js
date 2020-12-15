

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UrlApi from "../../api/urlRequest"
import urlRequest from '../../api/urlRequest';



export default () => {

  const [busList, setbusList] = useState([])


  /**
   * 生命周期
   * componentWillMount
   * 组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次
   */
  useEffect(() => {
    ; (async () => setbusList((await UrlApi.getBus())))()
  }, []

  )

  const refreshList = async () => setbusList(await UrlApi.getBus())

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>巴士ID</th>
            <th>位置</th>
            <th>座位数</th>
            <th>已购座位</th>
            <th>价格</th>
          </tr>
        </thead>

        <tbody>


          {
            typeof (busList) === 'undefined' ?
              1 :
              busList.map((bus) => {
                return (
                  <tr key={bus.pk}>
                    <td>{bus.pk}</td>
                    <td>{bus.fields.location}</td>
                    <td>{bus.fields.numseats}</td>
                    <td>{bus.fields.numavail}</td>
                    <td>{bus.fields.price}</td>

                    <td>
                      <div class="btn-group" role="group" aria-label="...">
                        <button type="button" class="btn btn-info" onClick={() => { UrlApi.reBus(localStorage.getItem("id"), bus.pk); alert("预约成功"); refreshList() }}>预约</button>
                        <button type="button" class="btn btn-warning" onClick={() => { UrlApi.delBus(bus.pk); alert("删除成功"); refreshList() }}>删除</button>
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

