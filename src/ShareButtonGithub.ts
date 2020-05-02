import LinkShareButton from "./LinkShareButton";

export default class ShareButtonGithub extends LinkShareButton {
	public constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	public createLink(): string {
		return `https://github.com/${this.url}`;
	}
}
