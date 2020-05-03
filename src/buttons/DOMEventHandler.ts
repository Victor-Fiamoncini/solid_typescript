import EventHandler from "./EventHandler";

export default class DOMEventHandler implements EventHandler {
	public addEventListenerToClass(clazz: string, event: string, fn: Function) {
		const elements: any = document.querySelectorAll(clazz);

		for (const element of elements) {
			element.addEventListener(event, fn);
		}
	}
}
