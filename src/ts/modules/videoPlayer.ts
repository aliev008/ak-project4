const YouTubePlayer = require("youtube-player");

export class VideoPlayer {
  triggers: NodeListOf<HTMLElement>;
  modal: HTMLElement;
  closeTrigger: HTMLElement;
  player: YT.Player;
  path: string;

  constructor(trigger: string, modal: string) {
    try {
      this.triggers = document.querySelectorAll(trigger);
      this.modal = document.querySelector(modal);
      this.closeTrigger = this.modal.querySelector<HTMLElement>(".close");
    } catch (error) {}
  }

  onVideoPlaybackEnd(currentBlock: HTMLElement) {
    this.player.addEventListener("onStateChange", (state: any) => {
      const nextBlock = currentBlock.parentElement
        .nextElementSibling as HTMLElement;
      if (
        state.data === 0 &&
        nextBlock.classList.contains("module__video-item")
      ) {
        const nextBlockDataUrl = nextBlock
            .querySelector(".play")
            .getAttribute("data-url"),
          nextBlockPlayElem = nextBlock.querySelector(".play"),
          nextBlockNewPlayBtn = currentBlock
            .querySelector(".play__circle")
            .cloneNode(true),
          nextBlockNewPlayText = currentBlock
            .querySelector(".play__text")
            .cloneNode(true),
          nextBlockOldPlayBtn =
            nextBlockPlayElem.querySelector(".play__circle"),
          nextBlockOldPlayText = nextBlockPlayElem.querySelector(".play__text");

        nextBlockPlayElem.setAttribute("data-url", nextBlockDataUrl);
        nextBlockPlayElem.replaceChild(
          nextBlockNewPlayBtn,
          nextBlockOldPlayBtn
        );
        nextBlockPlayElem.replaceChild(
          nextBlockNewPlayText,
          nextBlockOldPlayText
        );
        nextBlock.style.filter = "none";
        nextBlock.style.opacity = "1";
      }
    });
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
    // Play video triggers
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        if (
          document.querySelector("iframe#frame") &&
          trigger.getAttribute("data-url") === this.path
        ) {
          this.modal.style.display = "flex";
        } else if (!trigger.querySelector(".closed")) {
          this.path = trigger.getAttribute("data-url");
          this.player && this.player.destroy();
          this.createPlayer(this.path);
          this.onVideoPlaybackEnd(trigger);
        }
      });
    });
    // Close modal window triggers
    this.closeTrigger.addEventListener("click", async () => {
      if (this.player) {
        (await this.player.getPlayerState()) === 0
          ? this.player.destroy()
          : this.player.stopVideo();
        this.modal.style.display = "none";
      }
    });
  }

  init() {
    try {
      this.bindTriggers();
    } catch (error) {}
  }
}
