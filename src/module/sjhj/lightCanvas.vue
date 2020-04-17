<template>
	<div class="light-canvas">
		<canvas></canvas>
	</div>
</template>
<script>
export default {
	name: 'light-canvas',
	data () {
		return {}
	},
	methods: {},
	mounted () {
		var c = this.$el.querySelector('canvas'),
				ctx = c.getContext("2d");
		c.width = this.$el.clientWidth;
		c.height = this.$el.clientHeight;
		var lines = [],
				maxSpeed = 5,
				spacing = 5,
				xSpacing = 0,
				n = this.$el.clientWidth / spacing,
				colors = ["#3B8686", "#79BD9A", "#A8DBA8", "#0B486B"],
				i;
		for (i = 0; i < n; i++){
			xSpacing += spacing;
			lines.push({
				x: xSpacing,
				y: Math.round(Math.random()*c.height),
				width: 2,
				height: Math.round(Math.random()*(innerHeight/10)),
				speed: Math.random()*maxSpeed + 1,
				// color: colors[Math.floor(Math.random() * colors.length)]
				color: 'rgba(33, 209, 255, 1)'
			});
		}
		function draw(){
			var i;
			ctx.clearRect(0,0,c.width,c.height);
			
			for (i = 0; i < n; i++){
				ctx.fillStyle = lines[i].color;
				ctx.fillRect(lines[i].x, lines[i].y, lines[i].width, lines[i].height);
				lines[i].y += lines[i].speed;
				
				if (lines[i].y > c.height)
					lines[i].y = 0 - lines[i].height;
			}
			requestAnimationFrame(draw);
		}
		draw();
	}
}
</script>
<style scoped>
	.light-canvas {
		width: 100%;
		height: 100%;
	}
	.light-canvas canvas {
		background-color: transparent;
	}
</style>