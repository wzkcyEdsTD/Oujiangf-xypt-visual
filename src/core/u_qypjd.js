import {getDefaultAxios, getDefaultAxiosCompatible} from "./index.js";

/**
 * [u_qypjd]鹿城在册数据参评企业点
 * @param {*} _option
 */
async function ds(_option = {}) {
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
          name: `(select b.* from u_qypjd as b inner join u_qyzc as c on b.uuid = c.uuid)`,
          updateflag: 1
        }
      ],
      cols: [
        {name: "id", raw: "a.id"},
        {name: "uuid", raw: "a.uuid", keyflag: 1},
        {name: "name", raw: "a.name"},
        {name: "ssjd", raw: "a.ssjd"},
        {name: "hydm", raw: "a.hydm"},
        {name: "hy", raw: "a.hy"},
        {name: "mc", raw: "a.mc"},
        {name: "x", raw: "a.x"},
        {name: "y", raw: "a.y"},
        {name: "cy", raw: "a.cy"},
        {name: "pch", raw: "a.pch"}
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

// 正态分布
async function ztfb(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_ztfb'
        }
      ],
      cols: [
        {name: "kind", raw: "kind"},
        {name: "sumNum", raw: "sumNum"},
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取信用分的最高分和平均分
async function scoreMaxAvg(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.csf_user_score'
        }
      ],
      cols: [
        {name: "max", raw: "MAX(a.score)"},
        {name: "avg", raw: "AVG(a.score)"},
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取男女的平均分
async function sexAvgScore(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_nvpjf'
        }
      ],
      cols: [
        {name: "score", raw: "a.score"},
        {name: "sex", raw: "a.sex"},
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取各区县分数分布
async function eachCityScore(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_gqxfsfb'
        }
      ],
      cols: [
        {name: "sumNum", raw: "a.sumNum"},
        {name: "credit_level", raw: "a.credit_level"},
        {name: "area", raw: "a.area"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取全市分数分布
async function cityScore(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_qsfsfb'
        }
      ],
      cols: [
        {name: "sumNum", raw: "a.sumNum"},
        {name: "credit_level", raw: "a.credit_level"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取各县市区的平均分
async function eachCityAvgScore(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_gxqpjf'
        }
      ],
      cols: [
        {name: "area", raw: "a.area"},
        {name: "avgnum", raw: "a.avgnum"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取各年龄段的分数分布
async function eachAgeScore(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_gnlpjf'
        }
      ],
      cols: [
        {name: "avgscore", raw: "a.avgscore"},
        {name: "age_range", raw: "a.age_range"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}


// 获取数据量、事项数、接入单位数、共享数据量
async function getSjhjNumbers(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_sjl'
        },
        {
          alias: "b",
          name: 'wz_csf.xyyzt_sxs'
        },
        {
          alias: "c",
          name: 'wz_csf.xyyzt_jrdws'
        },
      ],
      cols: [
        {name: "sjl", raw: "a.sumNum"},
        {name: "sxs", raw: "b.sumNum"},
        {name: "jrdws", raw: "c.sumNum"},
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取信用公开等级
async function getXyGrade(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_gxdj'
        }
      ],
      cols: [
        {name: "open_level", raw: "a.open_level"},
        {name: "sumNum", raw: "a.sumNum"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取数据交换策略
async function getDataStrategy(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_sjjhcl'
        }
      ],
      cols: [
        {name: "data_exchange_type", raw: "a.data_exchange_type"},
        {name: "sumNum", raw: "a.sumNum"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取数据交换频率
async function getDataRate(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_sjjhpl'
        }
      ],
      cols: [
        {name: "data_exchange_rate", raw: "a.data_exchange_rate"},
        {name: "sumNum", raw: "a.sumNum"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取数据更新动态
async function getupsj(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_sjhj_sjgxdt'
        }
      ],
      cols: [
        {name: "table_name", raw: "a.table_name"},
        {name: "sumNum", raw: "a.sumNum"},
        {name: "ownername", raw: "a.ownername"},
        {name: "uptime", raw: "a.uptime"}
      ],
      module: "wzqd",
      ..._option
    })
  };
  return await axios.post("/api/dw/ds", option);
}

// 获取数据更新动态
async function getkindmeg(_option = {}) {
  const axios = getDefaultAxiosCompatible();
  const option = {
    action: "001",
    count: 100,
    ds: JSON.stringify({
      buffers: [],
      tables: [
        {
          alias: "a",
          name: 'wz_csf.xyyzt_sjhj_glsj'
        }
      ],
      cols: [
        {name: "kind", raw: "a.kind"},
        {name: "sumNum", raw: "a.sumNum"},
        {name: "unit", raw: "a.unit"},
      ],
      module: "wzqd",
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

const api = {
  ds,
  ztfb,
  scoreMaxAvg,
  sexAvgScore,
  eachCityScore,
  cityScore,
  eachCityAvgScore,
  eachAgeScore,
  getSjhjNumbers,
  getXyGrade,
  getDataStrategy,
  getDataRate,
  getupsj,
  getkindmeg,
  gjjdata,
  sbdata,
  getsplf,
};

export default api;
