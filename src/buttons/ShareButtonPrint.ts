import ShareButton from "./ShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonPrint extends ShareButton {
	public constructor(clazz: string, eventHandler: EventHandler) {
		super(clazz, eventHandler);
	}

	public createAction(): Function {
		return () => window.print();
	}
}
