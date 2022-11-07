const YouTubePlayer = require("youtube-player");

export class VideoPlayer {
  triggers: NodeListOf<HTMLElement>;
  modal: HTMLElement;
  closeTrigger: HTMLElement;
  player: YT.Player;

  constructor(trigger: string, modal: string) {
    this.triggers = document.querySelectorAll(trigger);
    this.modal = document.querySelector(modal);
    this.closeTrigger = this.modal.querySelector<HTMLElement>(".close");
  }

  createPlayer(url: string) {
    this.player = new YouTubePlayer("frame", {
      height: "100%",
      width: "100%",
      videoId: `${url}`,
    });
    this.modal.style.display = "flex";
  }

  bindTriggers() {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (document.querySelector("iframe#frame")) {
          this.modal.style.display = "flex";
        } else {
          const path: string = this.triggers[0].getAttribute("data-url");
          this.createPlayer(path);
        }
      });
    });
  }

  bindCloseTrigger() {
    this.closeTrigger.addEventListener("click", () => {
      this.player.stopVideo();
      this.modal.style.display = "none";
    });
  }

  init() {
    this.bindTriggers();
    this.bindCloseTrigger();
  }
}
