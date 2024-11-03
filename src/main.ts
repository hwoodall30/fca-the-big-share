setupExplanationCircleAnimation();
setupLogoAnimations();

function setupExplanationCircleAnimation() {
	const circle = document.querySelector(".circle-image") as HTMLElement;
	if (!circle) return;

	const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const scale = 0.8 + entry.intersectionRatio * 0.2;
				circle.style.setProperty("--progress", scale.toString());
			}
		},
		{
			root: null,
			threshold: thresholds,
		},
	);

	observer.observe(circle);
}

function setupLogoAnimations() {
	const logos = document.querySelectorAll(".organization-logo-container .logo");
	if (!logos?.length) return;

	const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const scale = 0.8 + entry.intersectionRatio * 0.2;
				(entry.target as HTMLElement).style.setProperty("--scale", scale.toString());
			}
		},
		{
			root: null,
			threshold: thresholds,
		},
	);

	for (const logo of logos) {
		observer.observe(logo);
	}
}
