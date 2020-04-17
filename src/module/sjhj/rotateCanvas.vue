<template>
	<div class="rotate-canvas">
		<div class="ui_base u_p3d">
			<div class="ball_c"></div>
			<div class="base u_p3d">
				<div class="pan"></div>
				<div class="ball_base u_p3d ball_1">
					<div class="ball">身份<br/>特质</div>
				</div>
				<div class="ball_base u_p3d ball_2">
					<div class="ball">遵纪<br/>守法</div>
				</div>
				<div class="ball_base u_p3d ball_3">
					<div class="ball">商业<br/>用信</div>
				</div>
				<div class="ball_base u_p3d ball_4">
					<div class="ball">生活<br/>用信</div>
				</div>
				<div class="ball_base u_p3d ball_5">
					<div class="ball">社会<br/>贡献</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'rotate-canvas',
	data () {
		return {}
	},
	methods: {},
	created () {}
}
</script>
<style scoped>
	@import url('./css/zhengfu.css');
	.rotate-canvas {
		width: 100%;
		height: 100%;
	}
/*	.ball-inner {
		width: 35px;
		height: 35px;
		position: absolute;
		left: 54%;
    	top: 72%;
		transform: translate(-50%, -50%);
		border-radius: 50% 50%;
		background: url('./images/small_circle.png') center center no-repeat;
		background-size: 100% 100%;
		text-align: center;
		line-height: 35px;
		color: #6ACAFF;
		font-size: 11px;
	}*/
</style>