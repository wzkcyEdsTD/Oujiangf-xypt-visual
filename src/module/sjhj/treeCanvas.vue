<template>
	<div class="tree-canvas">
		<canvas>此浏览器不支持canvas</canvas>
	</div>
</template>
<script>
export default {
	name: 'tree-canvas',
	data () {
		return {
		}
	},
	methods: {
	},
	mounted () {
		const vm = this;
		var w = window.innerWidth, h = window.innerHeight;
	    var ctx = null ;
	    var treeNum = 3 ;
	    var initRadius = 25 ;     // 树干的初始宽度
	    var maxGeneration = 5 ;   // 最多分支的次数
	    var branchArray = null ;  // 树干的集合
	    var flowers = [];         // 花的集合

	    window.MyRequestAnimationFrame = window.requestAnimationFrame ||
	        window.mozRequestAnimationFrame ||
	        window.webkitRequestAnimationFrame ||
	        window.msRequestAnimationFrame ;

	    window.MyCancelRequestAnimationFrame = window.cancelRequestAnimationFrame ||
	        window.mozCancelRequestAnimationFrame ||
	        window.webkitCancelRequestAnimationFrame ||
	        window.msCancelRequestAnimationFrame ;

	    /**
	     * 初始化canvas
	     */
	    function initCanvas () {
	        var canvas = vm.$el.querySelector('canvas');
	        canvas.setAttribute('width' , w);
	        canvas.setAttribute('height' , h);
	        canvas.style.width = vm.$el.clientWidth + 'px';
	        canvas.style.height = vm.$el.clientHeight + 'px';
	        if(canvas.getContext) {
	            ctx = canvas.getContext('2d');
	            initTree();
	            loop();
	        }
	    }

	    /**
	     * 初始化树的数量
	     */
	    function initTree () {
	        branchArray = new BranchArray ();
	        for(var i = 0 ; i < treeNum ; i++) {
	            branchArray.add(new Branch(w / 2 , h));
	        }
	    }

	    /**
	     * 树干
	     * @param x
	     * @param y
	     * @constructor
	     */
	    function Branch (x , y) {
	        this.x = x ;
	        this.y = y ;
	        this.radius = initRadius ;
	        this.angle = Math.PI / 2 ; // 树枝的初始角度
	        this.speed = 2.35 ;    // 数生长的速度
	        this.generation = 1 ;
	    }

	    /**
	     * 生长
	     */
	    Branch.prototype.grow = function () {
	        this.draw();
	        this.update();
	    }

	    Branch.prototype.draw = function () {
	        ctx.fillStyle = 'rgba(33, 209, 255, 1)';
	        ctx.beginPath();
	        ctx.arc(this.x , this.y , this.radius , 0 , 2 * Math.PI);
	        ctx.fill();
	    }

	    /**
	     * 更改数的高度以及扭曲度
	     */
	    Branch.prototype.update = function () {

	        // 计算树干每次的扭曲角度，因为树一般不是笔直生长的，都会有不规则的扭曲
	        this.angle += random( -0.1 * this.generation / 2 , 0.1 * this.generation / 2 );

	        var vx = this.speed * Math.cos(this.angle);
	        // 因为初始角度设置为Math.PI , 所以vy要取负数
	        var vy = - this.speed * Math.sin(this.angle);

	        if(this.radius < 0.99 || this.generation > maxGeneration) {
	            branchArray.remove(this);
	        }

	        this.x += vx ;
	        this.y += vy ;

	        this.radius *= 0.99 ;

	        if(this.radius >= 0.9) {
	            // 计算当前是第几代分支
	            var g = (maxGeneration - 1) * initRadius / (initRadius - 1) / this.radius + (initRadius - maxGeneration) / (initRadius - 1) ;
	            if( g > this.generation + 1) {
	                this.generation = Math.floor(g) ;
	                // 随机创建分支
	                for(var i = 0 ; i < random(1,3) ; i++) {
	                    this.clone(this);
	                }
	            }
	        }

	    }

	    /**
	     * 创建分支
	     * @param b
	     */
	    Branch.prototype.clone = function (b) {
	        var obj = new Branch(b.x , b.y);
	        obj.angle = b.angle ;
	        obj.radius = b.radius ;
	        obj.speed = b.speed;
	        obj.generation = b.generation;
	        branchArray.add(obj);
	        // 如果当前分支次数大于3则创建花，这样可以让花在树的顶端显示
	        if( b.generation > 3 ) {
	            flowers.push(new Flower(b.x , b.y));
	        }
	    }

	    function BranchArray () {
	        this.branchs = [];
	    }

	    /**
	     * 添加树干到集合中
	     * @param b
	     */
	    BranchArray.prototype.add = function (b) {
	        this.branchs.push(b);
	    }
	    /**
	     * 从集合中移除树干
	     * @param b
	     */
	    BranchArray.prototype.remove = function (b) {
	        if( this.branchs.length > 0) {
	            var index = this.branchs.findIndex(function (item) {
	                return b === item ;
	            })
	            if(index != -1) {
	                this.branchs.splice(index , 1);
	            }
	        }
	    }

	    /**
	     * 花
	     * @param x
	     * @param y
	     * @constructor
	     */
	    function Flower (x , y) {
	        this.x = x ;
	        this.y = y ;
	        this.r = 1 ;       // 花瓣的半径
	        this.petals = 5 ;  // 花瓣数量
	        this.speed = 1.0235 ;// 花的绽放速度
	        this.maxR = random(3 , 7); // 花的大小
	    }

	    /**
	     * 花朵开放（通过改变花的半径实现开放的效果）
	     * @param index
	     */
	    Flower.prototype.update = function (index) {
	        if(this.r == this.maxR) {
	            flowers.splice(index , 1);
	            return ;
	        }
	        this.r *= this.speed ;
	        if(this.r > this.maxR) this.r = this.maxR ;
	    }

	    /**
	     * 绘制花朵
	     */
	    Flower.prototype.draw = function () {
	        ctx.fillStyle = "#FF9245" ;
	        for(var i = 1 ; i <= this.petals ; i++) {
	            var x0 = this.x + this.r * Math.cos( Math.PI / 180  * (360 / this.petals) * i) ;
	            var y0 = this.y + this.r * Math.sin( Math.PI / 180  * (360 / this.petals) * i) ;
	            ctx.beginPath();
	            ctx.arc(x0 , y0 , this.r , 0  , 2 * Math.PI) ;
	            ctx.fill();
	        }
	        ctx.fillStyle = "#FF9245";
	        ctx.beginPath();
	        ctx.arc(this.x  , this.y  , this.r / 2 , 0  , 2 * Math.PI) ;
	        ctx.fill();
	    }

	    function random (min , max) {
	        return Math.random() * (max - min) + min ;
	    }

	    /**
	     * 循环遍历所有树干和花，并调用更新和draw方法，实现动画效果
	     */
	    function loop () {
	        for(var i = 0 ; i < branchArray.branchs.length ; i ++) {
	            var b = branchArray.branchs[i];
	            b.grow();
	        }
	        var len = flowers.length ;
	        while (len --) {
	            flowers[len].draw();
	            flowers[len].update();
	        }
	        MyRequestAnimationFrame(loop);
	    }
	    initCanvas();
	}
	// mounted () {
	// 	class Vector {
	// 	    constructor(x, y) {
	// 	        this.x = x || 0;
	// 	        this.y = y || 0;

	// 	    }

	// 	    add(v) {
	// 	        this.x += v.x;
	// 	        this.y += v.y;
	// 	        return this;

	// 	    }

	// 	    length() {
	// 	        return Math.sqrt(this.x * this.x + this.y * this.y);
	// 	    }

	// 	    rotate(angle) {
	// 	        this.x = Math.cos(angle) * this.x - Math.sin(angle) * this.y;
	// 	        this.y = Math.sin(angle) * this.x + Math.cos(angle) * this.y;
	// 	        return this;
	// 	    }
	// 	}

	// 	class Leaf {
	// 	    constructor(options = {}) {
	// 	        this.p = options.p || null;
	// 	        this.r = options.r || 0;
	// 	        this.c = options.c || 'rgba(255,255,255,1.0)';
	// 	        this.ctx = options.ctx;
	// 	    }

	// 	    render() {
	// 	        let r = Util.random(1, 4);
	// 	        for (let i = 0; i < 5; i++) {
	// 	            setTimeout(() => {
	// 	                Util.drawArc(this.ctx, this.p.x, this.p.y, r, this.c);
	// 	            }, i * 60);
	// 	        }

	// 	    }
	// 	}

	// 	//工具方法
	// 	class Util {
	// 	    static random(min, max) {
	// 	        return Math.random() * (max - min) + min;
	// 	    }

	// 	    static rgba(r, g, b, a) {
	// 	        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	// 	    }

	// 	    static randomrgba(min, max, a) {
	// 	        return this.rgba(Math.round(this.random(min, max)), Math.round(this.random(min, max)), Math.round(this.random(min, max)), a);

	// 	    }

	// 	    static drawArc(ctx, x, y, r, color) {
	// 	        ctx.beginPath();
	// 	        ctx.fillStyle = color;
	// 	        ctx.moveTo(x, y);
	// 	        ctx.arc(x, y, r, 0, 2 * Math.PI, true);
	// 	        ctx.fill();
	// 	    }
	// 	}

	// 	/***
	// 	 * 定义 Tree 类
	// 	 */
	// 	class Tree {
	// 	    constructor(obj = {}) {
	// 	        this.stat = {fork: 0, length: 0};
	// 	        this.branches = [];
	// 	        this.timer = null;
	// 	        this.start = true;
	// 	    }

	// 	    //添加分支
	// 	    addBranch(branch) {
	// 	        this.branches.push(branch);
	// 	        return this;
	// 	    }

	// 	    //移除分支
	// 	    removeBranch(branch) {
	// 	        this.branches.map((b, i) => {
	// 	            if (b === branch) {
	// 	                this.branches.splice(i, 1);
	// 	            }
	// 	        });
	// 	        return this;
	// 	    }

	// 	    //渲染
	// 	    render(cb = () => undefined) {
	// 	        let self = this;

	// 	        this.timer = setInterval(function () {
	// 	            if (self.start) {
	// 	                cb.call(self);
	// 	                let branches = self.branches;
	// 	                if (branches.length > 0) {
	// 	                    branches.map(b => {
	// 	                        b.grow();
	// 	                    })
	// 	                }
	// 	            }
	// 	        }, 1000 / 30);

	// 	    }

	// 	    //初始化
	// 	    init(ctx) {
	// 	        this.ctx = ctx;
	// 	    }

	// 	    //终止
	// 	    abort() {
	// 	        this.branches = [];
	// 	        this.stat.fork = 0;
	// 	        this.stat.length = 0;
	// 	    }

	// 	}

	// 	/**
	// 	 * 定义 树枝 Branch 类
	// 	 */
	// 	class Branch {
	// 	    constructor(options = {}) {
	// 	        //位置
	// 	        this.p = options.p || null;
	// 	        //矢量
	// 	        this.v = options.v || null;
	// 	        this.r = options.r || 0;
	// 	        this.tree = options.t || null;
	// 	        this.color = options.c || 'rgba(255,255,255,1.0)';
	// 	        this.length = 0;
	// 	        this.generation = 1;
	// 	        this.circle = 2 * Math.PI;
	// 	        this.register();
	// 	    }

	// 	    register() {
	// 	        this.tree.addBranch(this);
	// 	        return this;
	// 	    }

	// 	    draw() {
	// 	        let ctx = this.tree.ctx;
	// 	        ctx.beginPath();
	// 	        ctx.fillStyle = this.color;
	// 	        ctx.moveTo(this.p.x, this.p.y);
	// 	        ctx.arc(this.p.x, this.p.y, this.r, 0, this.circle, true);
	// 	        ctx.fill();
	// 	    }

	// 	    modify() {
	// 	        let angle = 0.18 - (0.10 / this.generation);
	// 	        this.p.add(this.v);
	// 	        this.length += this.v.length();
	// 	        this.r *= 0.99;
	// 	        this.v.rotate(Util.random(-angle, angle));
	// 	        if (this.r < 0.8 || this.generation > 10) {
	// 	            this.tree.removeBranch(this);
	// 	            //add leaf
	// 	            let l = new Leaf({
	// 	                p: this.p,
	// 	                c: this.color,
	// 	                ctx: this.tree.ctx
	// 	            });

	// 	            l.render();
	// 	        }
	// 	    }

	// 	    //分叉
	// 	    fork() {
	// 	        let p = this.length - Util.random(100, 200);
	// 	        if (p > 0) {
	// 	            let n = Math.round(Util.random(1, 3));
	// 	            this.tree.stat.fork += n - 1;
	// 	            for (let i = 0; i < n; i++) {
	// 	                this.clone(this);
	// 	            }
	// 	            this.tree.removeBranch(this);
	// 	        }
	// 	    }

	// 	    grow() {
	// 	        this.draw();
	// 	        this.modify();
	// 	        this.fork();
	// 	    }

	// 	    clone(b) {
	// 	        let r = new Branch(
	// 	            {
	// 	                p: new Vector(b.p.x, b.p.y),
	// 	                v: new Vector(b.v.x, b.v.y),
	// 	                r: b.r,
	// 	                c: b.color,
	// 	                t: b.tree
	// 	            });
	// 	        r.generation = b.generation + 1;
	// 	        return r;
	// 	    }

	// 	}


	// 	let drawInit = ($ele, options = {}) => {
	// 		const $canvas = document.createElement('canvas');
	// 		$canvas.style.cssText = 'background-color: transparent';
	// 	    $ele.appendChild($canvas);
	// 	    let {width, height, xwidth, xheight} = options;
	// 	    let center_x = width / 2,
	// 	        stretch = 600 / height,
	// 	        y_speed = 3 / stretch;
	// 	    $canvas.style.width = xwidth + 'px';
	// 	    $canvas.style.height = xheight + 'px';
	// 	    $canvas.width = width;
	// 	    $canvas.height = height;
	// 	    let ctx = $canvas.getContext('2d');
	// 	    ctx.globalCompositeOperation = "lighter";
	// 	    let tree = new Tree();
	// 	    tree.init(ctx);
	// 	    new Branch({
	// 	        p: new Vector(center_x, height),
	// 	        v: new Vector(Util.random(-1, 1), -y_speed),
	// 	        r: 15 / stretch,
	// 	        c: 'rgba(33, 209, 255, 1)',
	// 	        t: tree
	// 	    });
	// 	    tree.render();
	// 	};

	// 	class DrawTree {
	// 	    constructor(el, opt) {
	// 	        this.$ele = el;
	// 	        let $window = window;
	// 	        let [canvas_width, canvas_height] = [$window.innerWidth, $window.innerHeight - 30];
	// 	        this.defaults = {
	// 	            width: canvas_width,
	// 	            height: canvas_height
	// 	        };
	// 	        this.options = Object.assign({}, this.defaults, opt);
	// 	    }

	// 	    init() {
	// 	        drawInit(this.$ele, this.options);
	// 	    }

	// 	}
	// 	let d = new DrawTree(this.$el, {
	// 		xwidth: this.$el.clientWidth,
	// 		xheight: this.$el.clientHeight
	// 	});
	// 	d.init();
	// }
}
</script>
<style scoped>
	.tree-canvas {
		width: 100%;
		height: 100%;
	}
</style>