class Menstrual_cycle {
    constructor(date, length, flow) {
        this.date = (typeof date === 'string') ? new Date(date) : date;
        this.length = Number(length);
        this.flow = Number(flow);

        if (this.length > 20 && this.length <= 25) {
            this.ovulation = 8;
        } else if (this.length > 25 && this.length <= 35) {
            this.ovulation = 14;
        } else {
            throw new Error("Cycle length out of expected range (21-35).");
        }
    }

    nextPeriodDate() {
        const nextDay = new Date(this.date);
        nextDay.setDate(nextDay.getDate() + this.length);
        return nextDay.toISOString().split('T')[0];
    }

    getOvulationDate() {
        const ovulationDay = new Date(this.date);
        ovulationDay.setDate(ovulationDay.getDate() + this.length + this.ovulation);
        return ovulationDay.toISOString().split('T')[0];
    }

    daysToFertility() {
        const startDay = new Date(this.date);
        startDay.setDate(startDay.getDate() + this.length + this.ovulation - 7);

        const endDay = new Date(this.date);
        endDay.setDate(endDay.getDate() + this.length + this.ovulation);

        return `from ${this.formatDate(startDay)} to ${this.formatDate(endDay)}`;
    }

    daysofFlow() {
        const startDay = new Date(this.date);
        startDay.setDate(startDay.getDate() + this.length - this.flow);

        const endDay = new Date(this.date);
        endDay.setDate(endDay.getDate() + this.length);

        return `from ${this.formatDate(startDay)} to ${this.formatDate(endDay)}`;
    }

    saveDays() {
        const startDay = new Date(this.date);
        startDay.setDate(startDay.getDate() + this.length + this.ovulation + 1);

        const endDay = new Date(this.date);
        endDay.setDate(endDay.getDate() + this.length + this.ovulation + 14);

        return `from ${this.formatDate(startDay)} to ${this.formatDate(endDay)}`;
    }

    formatDate(dateObj) {
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}

module.exports = Menstrual_cycle;
