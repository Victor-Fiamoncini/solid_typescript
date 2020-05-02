import EventHandler from "./EventHandler";

export default abstract class ShareButton {
	public eventHandler: EventHandler;
	public clazz: string;

	public constructor(clazz: string) {
		this.clazz = clazz;
		this.eventHandler = new EventHandler();
	}

	public abstract createAction(): Function;

	public bind(): void {
		const action = this.createAction();

		this.eventHandler.addEventListenerToClass(this.clazz, "click", action);
	}
}
