import Bird from "./Bird";

export default abstract class Seabird extends Bird {
	public layEggs(): void {
		console.log("Laying eggs");
	}
}
