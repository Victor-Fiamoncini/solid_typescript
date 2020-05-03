import Bird from "./Bird";

export default abstract class Airbird extends Bird {
	public layEggs(): void {
		console.log("Laying eggs");
	}

	public abstract fly();
}
