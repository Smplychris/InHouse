import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.set(".nav-wrapper", {
	backdropFilter: "blur(30px)",
});

///// NAV LINK ANIMATION
let navElements = document.querySelectorAll(".nav-link");
navElements.forEach((navElement) => {
	let line = navElement.querySelector(".nav-link-line");
	let hoverLine = gsap.timeline({ paused: true });
	hoverLine.from(line, {
		yPercent: 300,
		duration: 0.4,
		ease: "power1.Out",
		scale: 2,
		opacity: 0,
		filter: "blur(12px)",
	});
	hoverLine.to(
		navElement,
		{
			color: "#ff6b00",
			duration: 0.4,
			ease: "power1.Out",
		},
		"-=0.4"
	);
	navElement.addEventListener("mouseover", () => {
		hoverLine.play();
	});
	navElement.addEventListener("mouseleave", () => {
		hoverLine.reverse();
	});
});
let navButton = document.querySelector(".nav-button");
let navButtonHover = gsap.timeline({ paused: true });

navButtonHover.to(navButton, {
	//scale: 1.1,
	borderRadius: "20px",
	border: "1px solid #ff6b00",
	backgroundColor: "#ff6b00",
	color: "#ffffff",
	boxShadow: "0px 0px 10px #FF6B00",
	duration: 0.3,
	ease: "power1.inOut",
});
navButton.addEventListener("mouseover", () => {
	navButtonHover.play();
});
navButton.addEventListener("mouseleave", () => {
	navButtonHover.reverse();
});

///// HERO BUTTON HOVER ANIMATION
let heroButton = document.querySelector(".hero-button-wrapper");
let heroButtonFill = document.querySelector(".hero-button-fill");
let heroButtonHover = gsap.timeline({ paused: true });
heroButtonHover.from(heroButtonFill, {
	yPercent: 50,
	ease: "power1.out",
	scale: 0,
	duration: 0.4,
	//opacity: 0,
	filter: "blur(120px)",
});
heroButtonHover.to(
	heroButton,
	{
		//scale: 1.05,
		borderRadius: 16,
		ease: "power1.out",
		duration: 0.4,
		color: "#000000",
	},
	"-=0.4"
);
heroButton.addEventListener("mouseover", () => {
	heroButtonHover.play();
});
heroButton.addEventListener("mouseleave", () => {
	heroButtonHover.reverse();
});

///// COMPANIES HOVER ANIMATION
let companies = document.querySelectorAll(".company-wrapper");
companies.forEach((company) => {
	let logo = company.querySelector(".company-logo");
	let link = company.querySelector(".company-link");
	let companyHover = gsap.timeline({ paused: true });
	companyHover.from(link, {
		opacity: 0,
		scale: 0.5,
		ease: "power1.out",
		filter: "blur(30px)",
		duration: 0.4,
		y: 40,
	});
	companyHover.to(
		logo,
		{
			y: -10,
			ease: "power1.inOut",
			duration: 0.4,
			scale: 0.6,
		},
		"-=0.4"
	);
	companyHover.to(
		company,
		{
			backgroundColor: "#0000001a",
			ease: "sine.out",
			duration: 0.4,
			borderRadius: 18,
		},
		"-=0.4"
	);
	company.addEventListener("mouseover", () => {
		companyHover.play();
	});
	company.addEventListener("mouseleave", () => {
		companyHover.reverse();
	});
});
