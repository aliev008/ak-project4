import {
  SliderMainVertical,
  SliderMiniHorizontal,
  VideoPlayer,
  DifferenceBlock,
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
    activeClass: "card-active",
    animated: true,
    autoplayOn: true,
  });
  showupSlider.init();

  const modulesSlider = new SliderMiniHorizontal({
    container: ".modules__content-slider",
    next: ".modules__info-btns .slick-next",
    prev: ".modules__info-btns .slick-prev",
    activeClass: "card-active",
    animated: true,
    autoplayOn: true,
  });
  modulesSlider.init();

  const feedSlider = new SliderMiniHorizontal({
    container: ".feed__slider",
    next: ".feed__slider .slick-next",
    prev: ".feed__slider .slick-prev",
    activeClass: "feed__item-active",
    animated: false,
    autoplayOn: true,
  });
  feedSlider.init();

  const firstPageVideoPlayer = new VideoPlayer(".showup .play", ".overlay");
  firstPageVideoPlayer.init();

  const firstDifferenceBlock = new DifferenceBlock({
    blockSelector: ".officerold",
    blockItemsSelector: ".officerold .officer__card-item",
  });
  firstDifferenceBlock.init();

  const secondDifferenceBlock= new DifferenceBlock({
    blockSelector: ".officernew",
    blockItemsSelector: ".officernew .officer__card-item",
  });
  secondDifferenceBlock.init();
});
