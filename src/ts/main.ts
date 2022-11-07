import { Slider, VideoPlayer } from "./modules";

window.addEventListener('DOMContentLoaded', (): void => {
    const firstPageSlider = new Slider('.page', '.next');
    const firstPageVideoPlayer = new VideoPlayer('.showup .play', '.overlay');
    firstPageSlider.render();
    firstPageVideoPlayer.init();
})