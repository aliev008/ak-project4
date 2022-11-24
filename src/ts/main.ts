import {
  ModulesSlider,
  SliderMiniHorizontal,
  VideoPlayer,
  DifferenceBlock,
  Form,
  Accordion,
} from "./modules";
import { createMask } from "./utils";

window.addEventListener("DOMContentLoaded", (): void => {
  // Main Page

  const modulesSliderMainPage = new ModulesSlider({
    container: ".page",
    nextModuleTriggers: ".next",
  });
  modulesSliderMainPage.render();

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

  const secondDifferenceBlock = new DifferenceBlock({
    blockSelector: ".officernew",
    blockItemsSelector: ".officernew .officer__card-item",
  });
  secondDifferenceBlock.init();

  const joinUsForm = new Form({
    containerSelector: ".join__evolution",
  });

  joinUsForm.init();

  const scheduleForm = new Form({
    containerSelector: ".schedule__form",
  });

  scheduleForm.init();

  // Modules Page

  const modulesPageVideoPlayer = new VideoPlayer(
    ".module__video-item .play",
    ".overlay"
  );
  modulesPageVideoPlayer.init();

  const modulesSliderModulesPage = new ModulesSlider({
    container: ".moduleapp",
    nextModuleTriggers: ".next",
    prevModuleTriggers: ".prev",
  });
  modulesSliderModulesPage.render();

  const accordionModulesPage = new Accordion({questions: '.module__info-show', answers: '.msg'});
  accordionModulesPage.init();

  // Common

  createMask('[name="phone"]', "+1 (___) ___-____");

  
});
