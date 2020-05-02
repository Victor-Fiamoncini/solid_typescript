import ShareButtonGithub from "./ShareButtonGithub";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";

const shareButtonGithub = new ShareButtonGithub(
	".btn-github",
	"https://github.com"
);
shareButtonGithub.bind();

const shareButtonLinkedin = new ShareButtonLinkedin(
	".btn-linkedin",
	"https://linkedin.com"
);
shareButtonLinkedin.bind();

const shareButtonPrint = new ShareButtonPrint(".btn-print");
shareButtonPrint.bind();
