export function KeenAutoScroll(speed = 2) {
    return (slider) => {
        let raf;
        function next() {
            slider.moveToIdx(slider?.track.details?.abs + 1, true);
            raf = requestAnimationFrame(() => {
                setTimeout(next, speed * 2000);
            });
        }

        slider.on("created", () => {
            next();
        });

        slider.on("destroyed", () => {
            cancelAnimationFrame(raf);
        });
    };
}
