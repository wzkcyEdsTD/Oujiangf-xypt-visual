<template>
	<div class="text-animate">
		
	</div>
</template>
<script>
export default {
	name: 'text-animate',
	props: {
		texts: {
			type: Array,
			default: function () {
				return []
			}
		}
	},
	data () {
		return {
			index: 0, // 当前开始哪一个文字索引
			textDoms: [], // 所有文字span dom元素的数组集合
		}
	},
	methods: {
		init () {
			const styles = ['left: 20%;top: 50%;', 'left: 39%;top: 70%;', 'left: 31%;top: 29%;', 'left: 42%;top: 50%;'],
				color = ['#6ACAFF', '#437DA9'],
				commonStyle = 'position: absolute;font-size: 11px;';
			for (let i = 0; i < this.texts.length;i++) {
				const dom = document.createElement('span');
				dom.style.cssText = styles[i % styles.length] + commonStyle;
				dom.style.color = color[Math.round(Math.random() * (color.length - 1))];
				dom.style.display = 'none';
				dom.innerHTML = this.texts[i];
				this.textDoms.push(dom);
				this.$el.appendChild(dom);
			}
			this.animate(this.index);
			this.animate(this.index);
			this.animate(this.index);
			this.animate(this.index);
			this.animate(this.index);
		},
		animate (index) {
			const vm = this;
			if (vm.textDoms[index] && vm.textDoms[index].style.display === 'none') {
				$(vm.textDoms[index]).fadeIn(Math.ceil(Math.random() * 2 + 1) * 1000, function () {
					$(this).fadeOut(Math.floor(Math.random() * 2 + 1) * 1000, function () {
						vm.index++;
						if (vm.index > vm.textDoms.length) vm.index = 0;
						vm.animate(vm.index);
					});
				});
			} else {
				vm.index++;
				if (vm.index > vm.textDoms.length) vm.index = 0;
				vm.animate(vm.index);
			}
		}

	},
	mounted () {
		this.texts.length > 0 && this.init();
	}
}
</script>
<style scoped>
	.text-animate {
		height: 100%;
		width: 100%;
		position: relative;
	}
</style>