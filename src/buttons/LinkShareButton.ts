import ShareButton from "./ShareButton";
import EventHandler from "./EventHandler";

export default abstract class LinkShareButton extends ShareButton {
	public url: string;

	public constructor(clazz: string, eventHandler: EventHandler, url: string) {
		super(clazz, eventHandler);
		this.url = url;
	}

	public abstract createLink(): string;

	public createAction(): Function {
		const link = this.createLink();

		return () => window.open(link);
	}
}
