class Counter {
    static counterInterval = null;
    count = 0;

    play(gap = 1) {
        counterNumber.textContent = this.count;
        this.counterInterval = setInterval(() => {
            counterNumber.textContent = this.count + gap
            this.count += gap
        }, gap + "000");
    }

    pause() {
        clearInterval(this.counterInterval)
    }

    restart() {
        this.count = 0;
        counterNumber.textContent = this.count;
    }
}