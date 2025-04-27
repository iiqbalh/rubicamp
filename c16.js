class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(varian, door, seat, tyre, year, warranty) {
        this.varian = varian;
        this.sn = this.serialNumber;
        this.door = door;
        this.seat = seat;
        this.tyre = tyre;
        this.year = year;
        this.warranty = warranty;
    }

    get serialNumber() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}

class Rush extends Car {
    constructor(year) {
        super('Rush', 6, 5, new Tyre('dunlop', 17), year, 1)
    }
}

class Agya extends Car {
    constructor(year) {
        super('Agya', 4, 4, new Tyre('brigestone', 15), year, 3)
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    get random() {
        return Math.floor(Math.random() * 10);
    }

    produce(year) {
        for (let i = 0; i < this.random; i++) {
            this.cars.push(new Rush(year))
        }

        for (let i = 0; i < this.random; i++) {
            this.cars.push(new Agya(year))
        }
    }

    result() {
        console.log('Hasil produksi: \n')
        this.cars.forEach((item, index) => {
            console.log(`no. ${index + 1}
varian   : ${item.varian}
sn       : ${item.sn}
door     : ${item.door}
seat     : ${item.seat} seater
tyre     : ${item.tyre.brand} ${item.tyre.size} inch
year     : ${item.year}
warranty : ${item.warranty} year\n`)
        })
    }

    guaaranteeSimulation(simulationYear) {
        console.log(`Hasil simulasi garansi semua mobil pada tahun ${simulationYear}: \n`)
        this.cars.forEach((item, index) => {
            console.log(`no. ${index + 1}
varian   : ${item.varian}
sn       : ${item.sn}
door     : ${item.door}
seat     : ${item.seat} seater
tyre     : ${item.tyre.brand} ${item.tyre.size} inch
year     : ${item.year}
warranty : ${item.warranty} year
\nstatus on ${simulationYear} this guarentee is ${item.year + item.warranty >= simulationYear ? 'active' : 'expired'}\n`)
        })
    }
}

const toyota = new CarFactory();
toyota.produce(2020);
toyota.produce(2022);
toyota.result();
toyota.guaaranteeSimulation(2025);




