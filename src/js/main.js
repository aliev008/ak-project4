import { Slider } from "./modules";

window.addEventListener('DOMContentLoaded', () => {
    const firstPageSlider = new Slider('.page', '.next');
    firstPageSlider.render();
})