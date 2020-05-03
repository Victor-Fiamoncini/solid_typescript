import LinkShareButton from "./LinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonGithub extends LinkShareButton {
	public constructor(clazz: string, eventHandler: EventHandler, url: string) {
		super(clazz, eventHandler, url);
	}

	public createLink(): string {
		return `https://github.com/${this.url}`;
	}
}
