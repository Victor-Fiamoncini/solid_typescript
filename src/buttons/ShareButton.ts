import EventHandler from "./EventHandler";
import DOMEventHandler from "./DOMEventHandler";

export default abstract class ShareButton {
	public eventHandler: EventHandler;
	public clazz: string;

	public constructor(clazz: string, eventHandler: EventHandler) {
		this.clazz = clazz;
		this.eventHandler = eventHandler;
	}

	public abstract createAction(): Function;

	public bind(): void {
		const action = this.createAction();

		this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
	}
}
