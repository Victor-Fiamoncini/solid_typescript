import ShareButton from "./ShareButton";

export default class ShareButtonPrint extends ShareButton {
	public constructor(clazz: string) {
		super(clazz);
	}

	public createAction(): Function {
		return () => window.print();
	}
}
