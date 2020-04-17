<template>
	<div id="dataStrategy"></div>
</template>
<script>
export default {
	name: 'pie-canvas',
	props: {
		pieData: {
			type: Array,
			default: function () {
				return [];
			}
		}
	},
	data () {
		return {
			myChart: null
		}
	},
	methods: {
		setOption (datas) {
			if (!this.myChart) this.myChart = echarts.init(document.getElementById('dataStrategy'));
			const option = {
			    color: ['rgba(31, 255, 237, 1)', 'rgba(255, 143, 92, 1)', 'rgba(0, 145, 255, 1)'],
			    grid: {
			    },
			    legend: {
			        top: '5%',
			        right: '10%',
			        orient: 'vertical',
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        },
			        itemWidth: 6,
			        itemHeight: 6,
			        padding: 0,
			        itemGap: 0,
			        align: 'left',
			        icon: 'rect',
			        data: [],
			    },
			    tooltip: {
			        formatter: "{a}：<br/>{b}: {c}%"
			    },
			    series: [
			        // 主要展示层的
			        {
			            radius: ['30%', '61%'],
			            center: ['40%', '60%'],
			            type: 'pie',
			            startAngle: -45,
			            label: {
			                normal: {
			                    show: true,
			                    formatter: "{c}%",
			                    textStyle: {
			                        fontSize: 10,
			                        color: '#fff'
			                    },
			                    position: 'outside'
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: true,
			                    length: 10,
			                    length2: 5,
			                    lineStyle: {
			                        color: '#fff'
			                    }
			                },
			                emphasis: {
			                    show: true
			                }
			            },
			            name: "数据交换策略",
			            data: [],

			        },
			        // 边框的设置
			        {
			            radius: ['30%', '38%'],
			            center: ['40%', '60%'],
			            type: 'pie',
			            z: 5,
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            animation: false,
			            tooltip: {
			                show: false
			            },
			            data: [{
			                value: 1,
			                itemStyle: {
			                    color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
				                    offset: 0,
				                    color: 'rgba(22, 77, 199, 1)'
				                },
				                {
				                    offset: 1,
				                    color: 'rgba(127, 205, 255, 1)'
				                }]),
				                shadowBlur: 11,
				                shadowOffsetX: 2,
				                shadowOffsetY: 1,
				                shadowColor: 'rgba(0,0,0,0.5)'
			                }
			            }],
			        }
			    ]
			}
			this.myChart.setOption(option);
		},
		updateData (pieData) {
			this.myChart.setOption({
				legend: {
					data: pieData
				},
				series: [{
					name: '数据交换策略',
					data: pieData
				}]
			});
		}
	},
	mounted () {
		this.setOption();
		this.pieData.length > 0 && this.updateData(this.pieData);
	},
	watch: {
		pieData (val) {
			this.updateData(val);
		}
	}
}
</script>
<style scoped>
	#dataStrategy {
		width: 100%;
		height: 100%;
	}
</style>
