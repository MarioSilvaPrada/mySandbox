Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}


class Chronometer {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }


    addTime(seconds) {
        this.seconds += seconds;
    }

    startTime() {

        setInterval(() => {
            this.seconds++;
            if (this.seconds >= 60) {
                this.seconds = 0;
                this.minutes++;
                if (this.minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            console.log(`${(this.hours).pad(2)}:${(this.minutes.pad(2))}:${(this.seconds).pad(2)}`);
        }, 1000)
    }

    getTime() {
        console.log(`${(this.hours).pad(2)}:${(this.minutes.pad(2))}:${(this.seconds).pad(2)}`)
    }
}

let time = new Chronometer(0, 1, 15);


time.startTime()



