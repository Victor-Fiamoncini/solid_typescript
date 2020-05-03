import EventHandler from "./EventHandler";

export default class MockEventHandler implements EventHandler {
	public addEventListenerToClass(clazz: string, event: string, fn: Function) {
		console.log(clazz, event, fn);
	}
}
