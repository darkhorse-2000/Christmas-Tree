const baubles = document.querySelectorAll('main > p');
const maxX = 55;
const maxY = 45;

baubles.forEach((bauble, i) => {
    const y = Math.pow(i / baubles.length, 0.5) * maxY * 2 - maxY;
    const x = Math.pow((maxX * i) / baubles.length, 0.5) * 5.5 * Math.random() * (i % 2 === 0 ? 1 : -1);

    bauble.style.setProperty("--a", `${x}vmin`);
    bauble.style.setProperty("--b", `${y}vmin`);
    bauble.style.setProperty("--c", Math.random() * 1.168661 + 0.025);
    bauble.style.setProperty("--hue", Math.random() * 360);

    bauble.animate(
        {opacity: [1, 0, 1, 0]},
        {
            duration: 2000 + Math.random() * 3000,
            iterations: Infinity,
            direction: "alternate",
            delay: Math.random() * -16000,
            easing: "ease-in-out"
        }
    )
});
if(matchMedia("(prefers-reduced-motion: reduce)").matches){
    document.getAnimations().filter((animation) => animation.id).forEach((animation) => {
        animation.pause();
    });
}