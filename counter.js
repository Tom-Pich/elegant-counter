class Counter {
	constructor (node, options){
		try{
			this.wrapper = node;
			this.delay = options.delay || 0;
			this.speed = options.speed || 100;
			this.speedCurve = options.speedCurve || "decrease" ;
		}
		catch(e){console.warn("Please select a valid node"); console.log(e)}
	}

	start(){
		this.maxValue = parseInt(this.wrapper.innerText)
		this.currentValue = 0
		this.wrapper.innerText = 0
		//this.animate()
	}

	animate(){
		if (this.currentValue < this.maxValue-1){
			this.currentValue += this.maxValue/100
			this.wrapper.innerText = parseInt(this.currentValue)
			let timeGap
			switch(this.speedCurve){
				case "linear": timeGap = 10000/this.speed; break;
				case "increase": timeGap = 10000/this.speed*(this.maxValue/(this.maxValue + this.currentValue*2)); break;
				default: timeGap = 10000/this.speed*((this.currentValue*2+1)/this.maxValue)
			}
			setTimeout(() => this.animate(), timeGap)
		}
		else {
			this.wrapper.innerText = this.maxValue
		}
	}
}

function createCounter(node, options = {}){
	let counter = new Counter(node, options)
	counter.start()

	let observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting){ 
					setTimeout(() => counter.animate(), options.delay || 0) }
			},
			{threshold: 0.8}
		);
	observer.observe(node);
}