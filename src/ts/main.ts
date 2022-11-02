import { Slider } from "./modules";

window.addEventListener('DOMContentLoaded', (): void => {
    const firstPageSlider = new Slider('.page', '.next');
    firstPageSlider.render();
})