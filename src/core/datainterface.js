import {getDefaultAxios, getDefaultAxiosCompatible} from "./index.js";

function gettime() {
  var date = new Date;

  var y = date.getFullYear().toString();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var time = y + m.toString();

  return parseInt(time);
}

/**
 * [当前开通用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_user_auth where auth_status = 1;
 */
async function presentdredgeuser(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.csf_user_auth`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "sumNum", raw: "count(distinct a.idcard)"},
      ],
      module: "wzqd",
      where: "a.auth_status = 1",
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
 * [当月开通用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_user_auth where date_format(create_time, '%Y%m')  = (date_format(now(), '%Y%m')) and auth_status = 1;
 */
async function dredgeuseratmonth(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.csf_user_auth`,
        },
      ],
      cols: [
        {name: "sumNum", raw: "count(distinct a.idcard)"},
      ],
      module: "wzqd",
      where: "date_format(a.create_time, '%%Y%%m')  = (date_format(now(), '%%Y%%m')) and a.auth_status = 1",
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
 * [上月开通用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_user_auth where date_format(create_time, '%Y%m')  = (date_format(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y%m')) and auth_status = 1;
 */
async function dredgeuseratlastmonth(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.csf_user_auth`,
        },
      ],
      cols: [
        {name: "sumNum", raw: "count(distinct a.idcard)"},
      ],
      module: "wzqd",
      where: "date_format(a.create_time, '%%Y%%m')  = (date_format(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%%Y%%m')) and a.auth_status = 1",
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
 * [当月活跃用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_log_detail where result ='success' and date_format(create_time, '%Y%m')  = (date_format(now(), '%Y%m'));
 */
async function livelyuseratmonyh(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.csf_log_detail`,
        },
      ],
      cols: [
        {name: "sumNum", raw: "count(distinct a.idcard)"},
      ],
      module: "wzqd",
      where: "result ='success' and date_format(create_time, '%%Y%%m')  = (date_format(now(), '%%Y%%m'))",
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
 * [上月活跃用户数]
 * 实时数据
 * select count(distinct idcard) from wz_csf.csf_log_detail where result ='success' and date_format(create_time, '%Y%m')  = (date_format(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%Y%m'));
 */
async function livelyuseratlastmonyh(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.csf_log_detail`,
        },
      ],
      cols: [
        {name: "sumNum", raw: "count(distinct a.idcard)"},
      ],
      module: "wzqd",
      where: "result ='success' and date_format(create_time, '%%Y%%m')  = (date_format(DATE_SUB(CURDATE(), INTERVAL 1 MONTH), '%%Y%%m'))",
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
 * [各县总开通量]
 * xyyzt_ldjsc_gxktl
 */
async function dredgeusersumatcountry(_option = {}) {
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
          name: `wz_csf.xyyzt_ldjsc_gxktl`,
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
 * [各县当月活跃用户]
 * xyyzt_ldjsc_gxhyyh
 */
async function livelyuseratcountry(_option = {}) {
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
          name: `wz_csf.xyyzt_ldjsc_gxhyyh`,
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
 * [各县当月开通量]
 * xyyzt_ldjsc_gxdyktl
 */
async function eachcountrydredgeuser(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.xyyzt_ldjsc_gxdyktl`,
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
 * [各类数据量]
 * xyyzt_sjhj_glsj
 */
async function eachkindofdata(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.xyyzt_sjhj_glsj`,
        },
      ],
      cols: [
        {name: "kind", raw: "a.kind"},
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
 * [公积金数据量]
 * xyyzt_ldjsc_gjj
 */
async function gjjdata(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.xyyzt_ldjsc_gjj`,
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
 * [社保数据量]
 * xyyzt_ldjsc_sb
 */
async function sbdata(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: `wz_csf.xyyzt_ldjsc_sb`,
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
 * [应用场景当月使用量]
 * xyyzt_ldjsc_cjyy
 */
async function sceneusenumanmonth(_option = {}) {
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
          name: `wz_csf.xyyzt_ldjsc_cjyy`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "app_name", raw: "a.appname"},
        {name: "sumNum", raw: "a.sumNum"},
        {name: "updatime", raw: "a.uptime"},
      ],
      module: "wzqd",
      where: ``,
      wherejson: "",
      linkwhere: "",
      order: "a.sumNum desc",
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
 * [应用场景各月使用量]
 * xyyzt_dygcjsy
 */
async function sceneusenumeachmonth(_option = {}) {
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
          name: `wz_csf.xyyzt_ldjsc_cjyy`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "app_name", raw: "a.appname"},
        {name: "sumNum", raw: "a.sumNum"},
        {name: "updatime", raw: "a.uptime"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "a.uptime",
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
 * [分数分布]
 * xyyzt_qsfsfb
 */
async function fsfbanmonth(_option = {}) {
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
          name: `wz_csf.xyyzt_qsfsfb`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "credit_level", raw: "a.credit_level"},
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
 * [省评论分]
 * xyyzt_qsfsfb
 */
async function getsplf(_option = {}) {
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
          name: `wz_csf.xyyzt_ldjsc_sxyf`,
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
 * [评价指标]
 * xyyzt_pjzb
 */
async function getpjzbmsg(_option = {}) {
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
          name: `wz_csf.xyyzt_pjzb`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "name", raw: "a.name"},
        {name: "kind", raw: "a.kind"},
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
 * [身份特质]
 * xyyzt_pjzb
 */
async function getsftzmsg(_option = {}) {
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
          name: `wzcredit_source.profession`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "kind", raw: "profession"},
        {name: "sumNum", raw: "count(*)"},
      ],
      module: "wzqd",
      where: "",
      wherejson: "",
      linkwhere: "",
      order: "",
      groupby: "profession",
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
 * [身份特质]
 * xyyzt_pjzb
 */
async function getosftzmsg(_option = {}) {
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
          name: `wz_csf.xyyzt_sftz`,
          updateflag: 1
        },
      ],
      cols: [
        {name: "kind", raw: "kind"},
        {name: "sumNum", raw: "sumNum"},
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
  presentdredgeuser,//当前开通用户数
  dredgeuseratmonth,//当月开通用户数
  dredgeuseratlastmonth,//上月开通用户数
  livelyuseratmonyh,//当月活跃用户数
  livelyuseratlastmonyh,//上月活跃用户数
  dredgeusersumatcountry,//各县总开通量
  livelyuseratcountry,//各县当月活跃用户
  eachcountrydredgeuser,//各县当月开通量
  eachkindofdata,//各类数据量
  gjjdata,//公积金数据量
  sbdata,//社保数据量
  sceneusenumeachmonth,
  sceneusenumanmonth,
  fsfbanmonth,//分数分布
  getsplf,//省评论分
  getpjzbmsg,//评价指标
  getsftzmsg,//身份特质
  getosftzmsg,//身份特质
};

export default api;
