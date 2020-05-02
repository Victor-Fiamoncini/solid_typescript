import LinkShareButton from "./LinkShareButton";

export default class ShareButtonLinkedin extends LinkShareButton {
	public constructor(clazz: string, url: string) {
		super(clazz, url);
	}

	public createLink(): string {
		return `https://linkedin.com/${this.url}`;
	}
}
