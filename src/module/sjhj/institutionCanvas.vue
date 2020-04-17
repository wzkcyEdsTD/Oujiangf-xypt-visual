<template>
	<div id="institutionCanvas"></div>
</template>
<script>
export default {
	name: 'pie-canvas',
	props: {
		pieData: {
			type: Array,
			default: function () {
				return [0, 0, 0];
			}
		}
	},
	data () {
		return {
			myChart: null
		}
	},
	methods: {
		setOption (pieData) {
			if (!this.myChart) this.myChart = echarts.init(document.getElementById('institutionCanvas'));
			const option = {
			    grid: {
			        show:'true',
			        borderWidth:'0',
			        y2:'30',
			        x:'75',
			        y:'0',
			        x2:'20'
			    },
			    tooltip: {
			        show: false
			    },
			    backgroundColor: 'transparent',        //背景色
			    xAxis: {
			        show: true,                //是否显示x轴
			        axisTick: {show: false},    //x轴的端点
			        axisLabel: {
			            show: true,
			            textStyle: {
			            	fontSize: 10,
			                color: 'rgb(164, 238, 255)'       //y轴字体颜色
			            }
			        },
			        axisLine: {
			        	show: true,
			        	lineStyle: {
		                    color:'rgba(55, 113, 183, 0.2)'
		                }
			        },
			        splitLine: {
			        	show: true,
			        	lineStyle: {
		                    color:'rgba(55, 113, 183, 0.2)'
		                }
			        },   //横向的线
			        type: 'value'
			    },
			    yAxis: {
			        type: 'category',
			        inverse:true,               //让y轴数据逆向
			        axisLabel: {
			        	margin: 15,
			            show: true,
			            textStyle: {
			            	fontSize: 13,
			                color: 'rgb(80, 176, 253)'       //y轴字体颜色
			            }
			        },
			        splitLine: {show: false},
			        axisTick: {show: false},    //y轴的端点
			        axisLine: {show: false},    //y轴的线
			        data: ['公积金','社保','行政处罚']
			    },
			    series: [
			        {
			            name: '数据内框',
			            type: 'bar',
			            itemStyle: {
			                normal: {
			                    barBorderRadius: 18,
			                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
				                    offset: 0,
				                    color: 'rgba(255, 111, 76, 1)'
				                },
				                {
				                    offset: 1,
				                    color: 'rgba(255, 208, 107, 1)'
				                }]),
			                }
			            },
			            label: {show: false},
			            barWidth: 13,
			            data: pieData
			        }
			    ]
			};
			this.myChart.setOption(option);
		},
		updateData (pieData) {
			this.myChart.setOption({
				series: [{
					name: '数据内框',
		            data: pieData
				}]
			})
		}
	},
	mounted () {
		this.setOption(this.pieData);
	},
	watch: {
		pieData (val) {
			this.updateData(val);
		}
	}
}
</script>
<style scoped>
	#institutionCanvas {
		width: 100%;
		height: 100%;
	}
</style>