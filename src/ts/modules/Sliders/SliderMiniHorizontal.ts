import { Slider } from "./Slider";

export class SliderMiniHorizontal extends Slider {
    constructor({container, next, prev}) {
        super({container, next, prev});
        console.log(this);
    }

    bindTriggers() {
        this.next.addEventListener('click', (e) => {
            this.container.appendChild(this.slides[0]);
        })

        this.prev.addEventListener('click', (e) => {
            const active = this.slides[this.slides.length - 1];
            this.container.insertBefore(active, this.slides[0]);
        })
    }

    init() {
        console.log(this.container, this.next, this.prev);

        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start; 
        `;

        this.bindTriggers();
    }
}