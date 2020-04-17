/**
 * [api]标准接口处理
 * token = sessionStorage.getItem('access_token')
 * lng = sessionStorage.getItem('access_lng')
 */

import axios from "axios";
import qs from "qs";
const WRT_config = window.WRT_config;
let defaultAxios = null;
let defaultAxiosCompatible = null;

export function getDefaultAxios() {
  if (!defaultAxios) {
    defaultAxios = getAxiosInstance();
  }
  return defaultAxios;
}

export function getDefaultAxiosCompatible() {
  if (!defaultAxiosCompatible) {
    defaultAxiosCompatible = getAxiosCompatibleInstance();
  }
  return defaultAxiosCompatible;
}

/**
 * 获取Axios实例对象
 * @param {*} o 
 */
function getAxiosInstance(o) {
  o = o || {};
  var instance = axios.create({
    baseURL: o.server || WRT_config.server
    //headers: { 'Access-Token': "test", "Accept-Language":"*" }
  });
  instance.defaults.headers.post["Content-Type"] = "multipart/form-data";
  //   instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  instance.interceptors.request.use(
    config => {
      if (config.method === "post") {
        if (typeof config.data === "object" && !config.data.t) {
          config.data.t = WRT_config.defaultT;
        }
      }

      if (config.method === "get") {
        if (typeof config.params === "object" && !config.params.t) {
          config.params.t = WRT_config.defaultT;
        }
      }
      return config;
    },
    err => {
      // 请求超时!

      // Promise.resolve ??
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    data => {
      if (data.errors) {
        // 处理错误？？
      }
      return data;
    },
    err => {
      //==============  错误处理  ====================
      if (err && err.response) {
        if (err.response.data && err.response.data.errors) {
          err.message = err.response.data.errors[0].title;
        } else {
          switch (err.response.status) {
            case 400:
              err.message = "请求错误(400)";
              break;
            case 401:
              err.message = "未授权，请重新登录(401)";
              break;
            case 403:
              err.message = "拒绝访问(403)";
              break;
            case 404:
              err.message = "请求出错(404)";
              break;
            case 408:
              err.message = "请求超时(408)";
              break;
            case 500:
              err.message = "服务器错误(500)";
              break;
            case 501:
              err.message = "服务未实现(501)";
              break;
            case 502:
              err.message = "网络错误(502)";
              break;
            case 503:
              err.message = "服务不可用(503)";
              break;
            case 504:
              err.message = "网络超时(504)";
              break;
            case 505:
              err.message = "HTTP版本不受支持(505)";
              break;
            default:
              err.message = `连接出错(${err.response.status})!`;
          }
        }
      } else {
        err.message = "连接服务器失败!";
      }
      // hint(err)
      return Promise.reject(err);
    }
  );
  return instance;
}

export function getAxiosCompatibleInstance(o) {
  o = o || {};
  var instance = axios.create({
    baseURL: o.server || WRT_config.serverCompatible
  });
  instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  instance.interceptors.request.use(
    function(config) {
      if (config.method === "post") {
        if (typeof config.data === "object" && !config.data.t) {
          config.data.t = WRT_config.defaultT;
        }
        config.data = qs.stringify(config.data);
      }

      if (config.method === "get") {
        if (typeof config.params === "object" && !config.params.t) {
          config.params.t = WRT_config.t;
        }
      }
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    data => {
      if (data.errors) {
        // 处理错误？？
      }
      if (data.status === 200 && data.statusText === 'OK') {
        if (data.data.rtnmsg === 'ok') {
          return data.data.rtndt;
        } else {
          return Promise.reject(data.data.rtnmsg);
        }
      } else {
        return Promise.reject(data.statusText);
      }
    },
    err => {
      //==============  错误处理  ====================
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = "请求错误(400)";
            break;
          case 401:
            err.message = "未授权，请重新登录(401)";
            break;
          case 403:
            err.message = "拒绝访问(403)";
            break;
          case 404:
            err.message = "请求出错(404)";
            break;
          case 408:
            err.message = "请求超时(408)";
            break;
          case 500:
            err.message = "服务器错误(500)";
            break;
          case 501:
            err.message = "服务未实现(501)";
            break;
          case 502:
            err.message = "网络错误(502)";
            break;
          case 503:
            err.message = "服务不可用(503)";
            break;
          case 504:
            err.message = "网络超时(504)";
            break;
          case 505:
            err.message = "HTTP版本不受支持(505)";
            break;
          default:
            err.message = "连接出错(${err.response.status})";
            break;
        }
      } else {
        err.message = "连接服务器失败!";
      }
      return Promise.reject(err);
    }
  );
  return instance;
}

export default getAxiosInstance;
