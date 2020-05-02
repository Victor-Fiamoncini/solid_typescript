import ShareButton from "./ShareButton";

export default abstract class LinkShareButton extends ShareButton {
	public url: string;

	public constructor(clazz: string, url: string) {
		super(clazz);
		this.url = url;
	}

	public abstract createLink(): string;

	public createAction(): Function {
		const link = this.createLink();

		return () => window.open(link);
	}
}
