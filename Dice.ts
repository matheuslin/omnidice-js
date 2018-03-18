class Dice {

	private values: number[];

	constructor() {

		this.values = [];

		this.values.push(1);
		this.values.push(2);
		this.values.push(3);
		this.values.push(4);
		this.values.push(5);
		this.values.push(6);
	}

	roll = function() {
		return this.values[Math.floor(Math.random() * this.values.length)];
	}
}


export { Dice };