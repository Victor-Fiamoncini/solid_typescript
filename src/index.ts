import ShareButtonGithub from "./buttons/ShareButtonGithub";
import ShareButtonLinkedin from "./buttons/ShareButtonLinkedin";
import ShareButtonPrint from "./buttons/ShareButtonPrint";
import ShareButton from "./buttons/ShareButton";
import DOMEventHandler from "./buttons/DOMEventHandler";
import MockEventHandler from "./buttons/MockEventHandler";

const domEventHandler = new DOMEventHandler();
const mockEventHandler = new MockEventHandler();

const shareButtonGithub: ShareButton = new ShareButtonGithub(
	".btn-github",
	mockEventHandler,
	"https://github.com"
);
shareButtonGithub.bind();

const shareButtonLinkedin: ShareButton = new ShareButtonLinkedin(
	".btn-linkedin",
	domEventHandler,
	"https://linkedin.com"
);
shareButtonLinkedin.bind();

const shareButtonPrint: ShareButton = new ShareButtonPrint(
	".btn-print",
	domEventHandler
);
shareButtonPrint.bind();
