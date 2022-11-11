import {
  SliderMainVertical,
  SliderMiniHorizontal,
  VideoPlayer,
} from "./modules";

window.addEventListener("DOMContentLoaded", (): void => {
  const sliderMainVertical = new SliderMainVertical({
    container: ".page",
    triggers: ".next",
  });
  sliderMainVertical.render();

  const showupSlider = new SliderMiniHorizontal({
    container: ".showup__content-slider",
    next: ".showup__next",
    prev: ".showup__prev",
  });
  showupSlider.init();

  const modulesSlider = new SliderMiniHorizontal({
    container: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
  });
  modulesSlider.init();

  const feedSlider = new SliderMiniHorizontal({
    container: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
  });
  feedSlider.init();

  const firstPageVideoPlayer = new VideoPlayer(".showup .play", ".overlay");
  firstPageVideoPlayer.init();
});
