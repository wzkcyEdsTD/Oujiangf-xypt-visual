import {getDefaultAxios, getDefaultAxiosCompatible} from "./index.js";

/**
 * [当月开通用户数]
 * xyyzt_dyktyh
 */
async function openusersumatmonth(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_dyktyh`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [当月使用用户数]
 * xyyzt_dysyyh
 */
async function applyusersumatmonth(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_dysyyh`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [各月活跃用户数]
 * xyyzt_gysyl
 */
async function everyapplyusersum(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_gysyl`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "usedate", raw: "a.usedate"},
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [各月开通用户数]
 * xyyzt_gysyl
 */
async function everyusersum(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_gyktl`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "usedate", raw: "a.ktdate"},
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [惠民情况统计1]
 * xyyzt_gcjsyl
 */
async function sceneusenum(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_gcjsyl`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "app_name", raw: "a.app_name"},
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [惠民情况统计2]
 * xyyzt_gqxsyl
 */
async function applyusersumatcountry(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_gqxsyl`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "area", raw: "a.area"},
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

/**
 * [各年龄段使用]
 * xyyzt_gqxsyl
 */
async function ageusenum(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          orm: "",
          name: `wz_csf.xyyzt_gnlsyl`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "age_range", raw: "a.age_range"},
        {name: "sumNum", raw: "a.sumNum"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "",
      having: "",
      distinct: false,
      rowlimit: 0,
      childs: [],
      page: {},
      params: [],
      control: {},
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

const api = {
  openusersumatmonth,
  applyusersumatmonth,
  everyapplyusersum,
  everyusersum,
  sceneusenum,
  applyusersumatcountry,
  ageusenum,

};

export default api;
