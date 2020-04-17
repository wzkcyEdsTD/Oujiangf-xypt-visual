<template>
  <div class="GXSYLchart" id="GXSYL"></div>
</template>

<script>
    const areadata = [];
    const numdata = [];
    let echarts = require('echarts/lib/echarts');
    require('echarts/lib/chart/bar');
    require('echarts/lib/chart/pictorialBar');
    require('echarts/lib/chart/line');
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/legend');
    var imgpath = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAXw0lEQVR4Xu2de5wcVZXHf6d6JuQxyVS7EF5hkacYWEKSrgZRwCCioi4ImeqIfoxBnqvgisqqH/wQUfysIrqCrkBA0GVNuia4goqoIKjghq7OiBDABwFBISwRqmYSyGu6zn6683AIM5l7q6u6q6tO/5XPJ+ece+7vV9+p293V9xLk1VoFbnpy4rSpL8wyguAYAEcRaC6DZxIo12iE8RIT1gC8hhhrGv8mY3WNa9V1Pa8ZwCmHbGptw9kejbI9/dbNvscZmNnNtYsAXgiiiSFHfhnALcPAV9fZ1h9C1pA0DQUEEA2xwoT2OitPNFD7JEBvD5M/dg7fGSB35aA99xfR1pVqIxUQQGK6HnqXVQ8iCr5NRMfHNMTWFRnzr5iNswYXFFbHOU5WawsgUTt/XbU7nw8uZ9DFBEyIuvxo9RjYzMCVgx59DucVtrRizKyMIYBE6PTUZQ8c2kXGD0B4fYRlNUrxI8MBn75uwdF/1EiS0F0oIIBEdHlMc1YenEPt1wDtFVHJkGX4uRpyxw3Zcx8PWUDSRigggERwOUxaWtlvYg6V9sOxYzJrADrGswtPRzC9TJcQQJq0v+f7v5veNbxpBYEOaLJUpOkMPFHrCorrTj/6hUgLZ6yYANKM4ddVu808P0DA7GbKxJbLvMLzjePljXt4hQWQ8NrBLFeWENHZTZSIPZWZb/BLxXNiHyilAwggIY2d2l85tovp/pDpLU6j4zy7cF+LB03FcAJISBvNsruSCHNCprc0jcFV3y5aLR00JYMJICGMNPvdU4nxgxCpbUth4FTftm5vWwMdOrAAEsK4vOM+BuCwEKltS2Hwg36fNQdE3LYmOnBgAUTTNNOpnECgezXTEhHO4Df7dvGXiWimQ5oQQDSNMsvu1US4UDMtEeHMuMYvWRclopkOaUIA0TQq77jPAthbMy0h4fyMZxdnJKSZjmhDANGwqWd55fDugFZppCQudIvBR6yfX3wkcY0ltCEBRMMYs796ITFfrZGSuFBm+qhfKnT0HFopqgCioXa+XLkeRJ39rTTzEq9UPFdj2pkOFUA07Dedyl0EeotGSuJCGXy3bxdPSlxjCW1IANEwxiy7jxPhII2UxIUyY7Vfsg5OXGMJbUgA0TDGdCp/I9A/aKQkLpTBL/h2cffENZbQhgQQDWNMx93Uqt+Za7SlFVr//bpvW7tpJWU4WADRMD8lgGzybSvsvlwaaqUjVADR8DEdSyys9W1rusa0Mx0qgGjYbzruagIO1EhJXCiD/+TbxUMT11hCGxJANIwxncrdBDpRIyWBoXynZxffkcDGEtmSAKJhSxq+KGTmq/1S8aMa0850qACiYb9Zrl5ExF/XSElcaMB87mCpuCRxjSW0IQFEw5g0PKy4qZbb9+X3zqk/kSwvBQUEEAWRRobky+4zIOyjmZaQcH7Es4tHJKSZjmhDANG0yXTcawj4iGZaIsKZ6LN+X+ELiWimQ5oQQDSNMsuV44moI3+2ujFX22/DGcf8VXPKmQ4XQELY35mbNuB237ZODTHdTKcIICHsN8vV04j4f0KktiWFwbVawDPlWAR9+QUQfc0aGZ20cRyA6z3bOi/kVDOdJoCEtL9zth7ldcGWifsPvu9IL+RUM50mgDRhv+m4NxDwoSZKxJ7KhIV+n/Xd2AdK6QACSDPGbj3+4D4Cis2UiSuXGV/zS9bFcdXPQl0BpEmXp3zv4T27uzb+JmlP+TLjVv+xgo3FFDQ5xUynCyAR2J93qv8I8IrEbCjHuMObvv5UzJs3HMH0Ml1CAInI/uQc4okfex69R06VisZYASQaHRtV6sdA5wz6EYEOibCscikGbvT3WH++3DmUJRs3UAAZVyLNAGfVhDxvuJyJP06gLs3sUOEMPAWmRX6pcE+oApI0pgICSEwXx1THfV2O+XoiOj6mIcDAJga+MvjS7l/AogM2xjVOlusKIDG73+usPNFA8AkAEf7MldcxaMnmWu4q+W1HvAYKIPHqu6N6jzMws5trF4J4IUCTwgzbWEoRX+NvCpbg/ccMhakhOXoKCCB6ejUffdOTE6dNfWGWEQTHADiAGHszNc4b2YtAjXNHmPlZED0L5mcI9FcGPTbMVFlfmvN7OUKteQt0KgggOmpJbOYUEEAyZ7lMWEcBAURHLYnNnAICSOYslwnrKCCA6KglsZlTQADJnOUyYR0FBBAdtSQ2cwoIIJmzXCaso4AAoqPWtti8U+3dAmPfHGr7EvEMBLQ/CAeCMQMEY6ySxHjMK1kXhBhyR0q+7F7LhMPGr8HDQOPLxj8z0UOUy7n+GXOeGj9PIkYqIICoXA+L2Zj2+oG3GgjeTcSnAbSvStrOMQxwgMm7D9mHvxgmf9uvF9cQEMq3+vmEBFrJoBVs8HcG51tPhOkjSzmhhM6KQD3OwB7dNHw2AroAhP2imTf9i2cXvhWmVr7sfhiEb4TJHQ1WAn7OwDd927o9ippprCGAjOLqpKWV/SYa9BkmLCIg0gMvGbjXt615YS4m03HvJeCEMLnj5PyBiT/j9xW/H0Ptji4pgOxkX32/qxzj9riOew67zGp2eaVylTLjFn/ThPPxgVkvqcRnIUYAGeGyWa7OAwU/i/+XgPrLrCiXV7u6sBm43e8rnCZPDW9VSQDZdrX0/vdDeaN746MA7RX3X0Zm3OOXLK2zDmNcXr1qugHh/ME+67q4deiE+gLINpfMcuXzRHRpK0zTXWa1Ynm107wf8Gyr/nuVzL8EkG2XQN6p/AWgGa27ItSXWa1aXo2ce2DgIPkYWJZYjWtiatl9YxfhvtbBUf/VoPoyyyxXfhnn5g+jzZtBl/t24bJWapLEseQOAiBfdr8FwvmtNEh1mdWG5VVDBgae8G3roFZqksSxBJD6BtRm8H9ElG+9QeMvs/KOWz8P8ZrW9wYME79xXV/xN+0YOyljZh4Qs989lRg/aIchKsusdiyvdmjBuLbZZ8faoWuUYwogjttPwPwoRVWtNd4yq13Lq+39M+D7Hk3P8j6/2QbEWdVj8oYXidCtelFHHzf2Mqudy6sdkDC9xy8V2nKHjV5r/YqZBqTXcT9kADfoyxZdxq6WWW1dXm2bYuOckZLVljtsdCqHr5RpQEzHvYeAN4eXr/nMsZZZ7V5e/f0Ogi0+TXoN7CPWNz/bzquQWUAm3bpixm613NNhf1sRrdWvXmYlYXm1fY4B87mDpeKSaOfcGdUyC0hvufpvBvG/J8Gm0ZZZplP5FYGOS0R/4F/7djG2XeqTMMexesgsIHmn8ghAM5Ngzs7LrKQsr0ZqsxHdMzbYRz2TBL1a2UMmATGXDcwio/ZgK4Ueb6yA6YLBUuHaepzZX72QmK8eL6fF/3+pZ1tXtHjMtg+XSUDy5eqVIK6f2ZGY18hlVpKWVzverGf00ZPsAcJMZr/7HIGmJ4aOrc8+NTZ0qA0H3d1dG0NvzBDnnAIjZw3On1ONc4yk1c4cIL39lbcYTHclzYh6P/VlFhnoTuDyqiEXM1/tl4ofTaJ2cfWUOUBMp3ITgT4Yl6DN1GXwLwB0J+XTq53nwsBaH4W9YVOtmXl2Um62ALnpyYn5KX9bC6AniSYxIwCBkvHdzOgK1RjvHCpZdyRRvzh6yhQgvU6lZICWxSFkZmoylnol68yszDdTgJhO5YcEeldWzI1lnswbPZq8R1YePckMIPVdS6h741oC5WK5cDJUlJk+6JcK38nClDMDSDs2PkjrBcTgu327eFJa5zdyXhkCpPK/IJKtbCK4quvf2Qx3Tdhr/emzno+gXKJLZAKQ3uXugUaA1Yl2osOaC4BLBm3ryg5rW7vdTABi9ruXEWOxtjqSMLYCW886ScTDnnHalA1AHHc1AQfGKWQmaxvGLG/+3IfSPPfUAzJtefXoXMAr0mxiG+d2pWdbl7Rx/NiHTj0gpuNeQ0B9byl5RaxA49GTvsKead4JPt2AOJwz2V3bnk3hIr4aE1ouID5psK94d0Lba7qtVAOSd6rvBPhHTaskBcZUgJm/45eKiXz4Mwrb0g1I2V0KwoIohJIaYyqw3ntp9z2w6ICNadQovYA4q3ry/PJaEE1Mo3FJmlONceZQyVqapJ6i6iW1gJjl6kIivjkqoaTOLhX4iWdbp6RRoxQD4v6cCJl4XqjdFyaDa8Ndu+2TxkdPUglIz/d/N71rePNzSf7hUbsv6qjHZ/C/+nbx61HXbXe9VAJi9lc+Tkxfabe4WRqfwVXfLlppm3M6AXHcAQJmp82spM8njecapg6QHmdgZjdqjyT9YkpjfwFwxaBtteSk4FbplzpAesvVLxrEn26VgDLOSAX4Gc8utvCk4PjVTxcgzJTvd59u7XHO8ZvUSSMw8wl+qfirTup5V72mChDTqZxAoHvTYk4nzoMZ3/VL1sJO7H20nlMFSN5x6/s1vSMt5nTiPBjYRKA9Pbsw2In979xzagAxl7uzKcBAGkzp9DkEROcM9hXaerRdVBqmB5By5XIi+mxUwkid8AowcKNvW2eHr5CczNQAknfcnwI4OTnSZrgTxiqvZP1TGhRIDyBl9xkQ9kmDKZ0+BwY/79vFPTt9HvX+UwRIZRBE09JgSqfPgQHft618p88jXYA4lSGApqbBlE6fA4Nf8O3i7p0+j1QBYpbdlUSYkwZTOn4OjPu9kvWmjp9HmpZYZtn9NhEWpcGUTp8DM9/gl4rndPo8UnUHyfevfBc4+GEaTOn0OdQIpwz1WT/p9HmkChAsZsOcWa3/SGqPUMYwD8mb/O3K8bom3s+t8R4tzMBiCkL5kLCk1HyKVde1t1w5xyC6PozGDDxOwMFhctOWw8BTBOwfZl4BcPagbd0YJjeJOakCpC6w6VTuItBbdMVm5qsA+hgRDN3c1MUzvgyC9pai9UNIfbuorX2S9UsdINtOkvoFgY5SFb6xheYkem1+Q1AB6HDVvFTG1Xdtn77+SHPtlEcJdIjqHBn8IG+ZeOLg+470VHM6IS51gDREv2XFtPyEXP1N4rFKJjA+4pWsb5qOexUBFyvlpDRo+1no08ruKTnCjxWn+YC3uXYy3n/MkGJ8x4SlE5C6/A7n8uRewkyLCZgwtiP8Vw/Wa+tnf5vLBmaRUXuwY9yLodGRP3jKl937QHjjWMMwsJkYn/Omr/8y5s0bjqGdtpdMLyDbpJ26vHpYrhYsI6JZo6ldY+PtQ6W59QcdG6+8496vfOdpu33RNlD/oMLvKxy6fbf2KU5lrwlAFaB9R45UBwPMS2vMX1y34Og/RttFsqqlHpCG3Pfc02U+33MpiC8k0Gu2WxAwfWqwVPjSSEumlVe+LUfBncmyqTXdMOE0v8+6beRok5cO7DMhV/tPgN9EgMvAnZtzhvPyGYU1remqvaNkA5DtGi9mY9phA8WcERTYwP3+fOu3o8mfL1fuBNHb2mtNy0f/mWdbWZvzuCJnC5Bx5dga0OMM7NGF4VUEmq6Y0tFh9U/xhpE7fL09Z21HTySG5gWQMUTNL195JIKgvjtHbwy6J6YkM7bUgHnrSlb9vZe8dlJAANnFJdG7fKBAQe3nBJhpvHIYPEyMRV6peEsa5xfFnASQcVRsfAoW8J1hH72IwqQ4atQfJwkAe8i2KnHUT0tNAUTFyZuenGhO/tuniHCZSnjyY/jTHiZ/FfYRm5Pfa3s7FEBU9W/s2lhNxROqnm2J74q+i1CKQkEAUVUqVXECiKqdAoiqUqmKE0BU7RRAVJVKVZwAomqnAKKqVKriBBBVOwUQVaVSFSeAqNopgKgqlao4AUTVTgFEValUxQkgqnYKIKpKpSpOAFG1UwBRVSpVcQKIqp0CiKpSqYoTQFTtFEBUlUpVnACiaqcAoqpUquIEEFU7BRBVpVIVJ4Co2imAqCqVqjgBRNVOAURVqVTFCSCqdgogqkqlKk4AUbVTAFFVKlVxAoiqnQKIqlKpihNAVO1sASBbt/REV9xHMMhPblVNT9Ex0OpTDhnZEkD4RYCMuLcZEkDUrwG5g6hq1QpAGKtBbBDoANW2wsQJIOqqCSCqWrUAEAD3AZwD6A2qbYWJE0DUVRNAVLVqASDMuBXERKDTVdsKEyeAqKsmgKhq1RpAvla/gxDRRapthYkTQNRVE0BUtWoFIHUwOKi/B/kP1bbCxAkg6qoJIKpatQAQkPFubgCCVxxio9qiapwAoqqUfMyrrlQLANmC3OEIaka3gYfVG9OPFEDUNZM7iKpWMQPC4JoPazf0PN6VX+9vVG0rTJwAoq6aAKKqVeyA4HHfthrnkpuOu5qAA1Vb040TQNQVE0BUtYoZEDDu8ErWO+vt5B33DgDvUG1NN04AUVdMAFHVKnZA6CteqfDJbXeQqwi4WLU13TgBRF0xAURVq5gBYeADvm39VwOQcnUhEd+s2ppunACirpgAoqpV3IAEuaP8BXN+1wBkuTubAgyotqYbJ4CoKyaAqGoVIyCNT7A8YxLOK2xptOOsmmDyhg1xPfYugKiaLt+DqCsVKyB4yLetWSObyZfdh0E4Qr1B9UgBRF0ruYOoahUnIMw3+KXiOSNbMcvujUQ4S7U9nTgBRF0tAURVqxgBCZjPHSwVl4xspbffPc9gXKvank6cAKKulgCiqlWMgDB4tm8XH3zFHSTGN+oCiKrp8h5EXanYAOEN3qNWDxbTK4+Yvq7abZr8EhG61ZtUixRA1HSqR8kdRFWr2ADBfZ5tHTdaG3nHvR/AsaotqsYJIKpKCSDqSsUECDNf5ZeKnxitEbPsfpUIH1NvUi1SAFHTSe4g6joBMQESENmDfYX+0VrpdSolA7RMp02VWAFERaWtMbLEUtUqJkA2g/d+yS4+N1obk2+t7r1bjZ9VbVE1TgBRVUoAUVcqBkCYsdovWQfvqgnTqTwR9TZAAoi67XIHUdUqFkBe/QXhzu3E8YWhAKJqutxB1JWKARCA3ufZhe/tqol8ufJ+EDWe8o3qJYCoKyl3EFWtYgBkV+8/trcVx/sQAUTVdLmDqCsVMSDMGPBL1lyVBkyn8lsCHaUSqxIjgKioJJ9iqatUj4waENDlvl24TKUJs1z5PBFdqhKrEiOAqKgkgKirFAMgtYCLQwuKrkoT05ZXj84FvEIlViVGAFFRSQBRVyliQBj8vG8X91RugJnMfvc5Ak1XztlFoACirqK8SVfVKsolFuNar2RdoDp0PS7vuNcBOFcnZ6xYAURdRQFEVasIAQkYbx0sWXepDl2P6+2vnmww/1QnRwBpXi0BRFVDh3N5VIdVw8eKY/CLPqzpsKmmVas+PrsvgmiaVt4owXIHUVdQAFHVKjpAbvbt4iLVYUfGmeXKzUS0MEzuyBzv0ULuVb8/abZoSvMFEFVjIwIkID5psK94t+qwI+N6HfetBvCzMLmvAKSvYICIm62ThXwBRNXlxWzkZ1b1lkU712Y869mFGaEvzog+zZIllqrp8k26ulJbP0lq7q8u40teyfqU1qA7BefL7pdAuCRsDWYEfsnKhc3PWp7cQTQczzvuOgA9Gik7Qhn1s6O6Xjc0f/afwuRvz5m67IFDc4bxewr7x415yCsVe5vpIUu5AoiG23mn8heAZmikjATkdt+2Tg2Tu3OO6VR+SKB3haz1tGdb+4fMzVyaAKJhuelUqgRSesDwVWXJON7rm/trjeHGDDWdygkEujdULcb9Xsl6U6jcDCYJIBqm58vuUhAWaKQ0Qhlc9e2ipZu3q3jTqbgEKmjXZF7ilYqRfCOvPXYHJgggGqbly+6HQfiGRkojtBYYbxhaMDeyhw3rNaf2V47tYqpvC6T1YuKz/L7iTVpJGQ4WQDTMn+JU9uoGPavzBpmB23zbOk1jGOVQ03FvI+CfVRMYPBxgyp5D9uEvquZkPU4A0bwC8k7lJwC9XTFtkHO5Wf4Zc55SjNcKM5f+9rWUG65vWar6qdT1nm2dpzVIxoMFEM0LoP4xa5dBVYCm7iq1/n0DG3xy2G/NVdvqLbsnEfDT8c4SqT8DFmDKIXL3UFV2a5wAoqdXI7pxAlQNt4Gw3+jpvAEwzh5vQ4YQQ4+akneqZzL42wTsNloAM+5B0HWW/97Zf45qzKzUEUDCOl0/BQovnwngrG0f/U5mwK//NQfoCs8uPBy2dJi8/PKVR6IWfJrBbwPV+6DfB8CAwfyA95j1Y3k4MYyqwP8DR/8pQeXnmxkAAAAASUVORK5CYII=';
    export default {
        name: "GXSYL.vue",
        props: {
            content: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                option: {
                    tooltip: {
                        trigger: "item",
                        textStyle: {
                            fontSize: 20,
                        },
                    },
                    grid: {
                        left: 40,
                        right: 80,
                        top: 15,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis: {
                        max: 0,
                        splitLine: {
                            show: false,//去除网格线
                        },
                        axisLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        }
                    },
                    yAxis: {
                        type: 'category',
                        axisLabel: {
                            textStyle: {
                                color: '#DDA205',
                                fontSize: 15,
                            }
                        },
                        inverse: false,
                        data: [],
                        axisLine: {
                            show: false,
                        },
                        axisTick: {
                            show: false,
                        },
                    },
                    series: [
                        {
                            type: 'pictorialBar',
                            symbol: imgpath,
                            symbolRepeat: "fixed",
                            symbolSize: 25,
                            symbolMargin: "5%",
                            symbolClip: true,
                            symbolPosition: "start",
                            symbolBoundingData: 100000,
                            //barMinHeight: 20,
                            z: 10,
                            data: [],
                        },
                        {
                            // full data
                            type: 'pictorialBar',
                            itemStyle: {
                                normal: {
                                    opacity: 0.2
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    formatter: function (params) {
                                        return params.value;
                                    },
                                    position: 'right',
                                    textStyle: {
                                        color: '#32C5FF',
                                        fontSize: 18
                                    }
                                }
                            },
                            animationDuration: 0,
                            symbolRepeat: 'fixed',
                            symbolMargin: '5%',
                            symbol: imgpath,
                            symbolSize: 25,
                            symbolBoundingData: 100000,
                            z: 5,
                            data: [],
                        }
                    ],
                },
            }
        },
        methods: {
            draw() {
                const that = this;
                var data0 = [];
                var data1 = [];
                for (var k = 0; k < 4; k++) {
                    data0.unshift(areadata[k])
                    data1.unshift(numdata[k])
                }
                const maxnum = Math.floor((Math.max.apply(Math, numdata) / 0.8));
                this.option.series[0].symbolBoundingData = maxnum;
                this.option.series[1].symbolBoundingData = maxnum;
                this.option.xAxis.max = maxnum;
                this.option.yAxis.data = data0;
                this.option.series[0].data = data1;
                this.option.series[1].data = data1;
                let myChart = echarts.init(document.getElementById('GXSYL'));
                myChart.setOption(that.option);
                var i = 4;
                setInterval(function () {

                    if (i < areadata.length) {
                        var input = areadata[i];
                        var numinput = numdata[i];
                        i++
                    } else {
                        i = 0;
                        var input = areadata[i];
                        var numinput = numdata[i];
                        i++
                    }

                    that.option.series[0].data.pop();
                    that.option.series[0].data.unshift(numinput);
                    that.option.yAxis.data.pop();
                    that.option.yAxis.data.unshift(input);

                    myChart.setOption(that.option);
                }, 5000);
            }
        },
        mounted() {
        },
        watch: {
            content(val) {
                const that = this;
                for (var i = 0; i < val.length; i++) {
                    areadata.push(val[i].area);
                    numdata.push(val[i].sumNum);
                }
                this.draw();
            }
        }
    }
</script>

<style scoped>
  .GXSYLchart {
    width: 100%;
    height: 100%;
  }
</style>
