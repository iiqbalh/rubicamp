class Tyre {
    constructor(brand, size) {
        this.brand = brand;
        this.size = size;
    }
}

class Car {
    constructor(varian, door, seat, tyre, year, warranty) {
        this.varian = varian;
        this.sn = this.serialNumber();
        this.door = door;
        this.seat = seat;
        this.tyre = tyre;
        this.year = year;
        this.warranty = warranty;
    }

    serialNumber() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
}

class Rush extends Car {
    constructor(year) {
        super('Rush', 5, 7, new Tyre('dunlop', 17), year, 3);
    }
}

class Agya extends Car {
    constructor(year) {
        super('Agya', 5, 4, new Tyre('brigestone', 15), year, 1);
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    get randomNumbers() {
        return Math.floor(Math.random() * 10)
    }

    produce(year) {
        for (let i = 0; i < this.randomNumbers; i++) {
            this.cars.push(new Rush(year))
        }

        for (let i = 0; i < this.randomNumbers; i++) {
            this.cars.push(new Agya(year))
        }
        
    }

    guaranteeSimulationYear(simulationYear) {
        console.log(`hasil simulasi garansi semua mobil pada tahun ${simulationYear}: `);
        this.cars.forEach((car, index) => {
        console.log(`\nno.${index + 1}
        \nvarian   : ${car.varian}
        \nsn       : ${car.sn}
        \ndoor     : ${car.door}
        \nseat     : ${car.seat}
        \ntyre     : ${car.tyre.brand} ${car.tyre.size} inch
        \nyear     : ${car.year}
        \nwarranty : ${car.warranty} year\n`)
        console.log(`status on ${simulationYear} this guarantee status is ${car.year + car.warranty >= simulationYear ? "active" : "expired"}`);
        })
    }

    result() {
        console.log('hasil produksi: ');
        this.cars.forEach((car, index) => {
        console.log(`\nno.${index + 1}
        \nvarian   : ${car.varian}
        \nsn       : ${car.sn}
        \ndoor     : ${car.door}
        \nseat     : ${car.seat}
        \ntyre     : ${car.tyre.brand} ${car.tyre.size} inch
        \nyear     : ${car.year}
        \nwarranty : ${car.warranty} year`)
        })
    }
}

const toyota = new CarFactory()
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulationYear(2025)


