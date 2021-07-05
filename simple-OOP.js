class starlet {
    constructor(qty) {
        this.qty = qty
    }
    siap() { return this.qty }
}
let banyak = Math.floor(Math.random() * 1000)
let readyStarlet = new starlet(banyak)


class lamborghini {
        constructor(qty) {
            this.qty = qty
        }
        ready() { return this.qty }
    }
let banyak1 = Math.floor(Math.random() * 100)
let readyLamborghini = new lamborghini(banyak1)

class car {
            constructor(strl, lmb, warr) {
                this.strl = strl
                this.lmb = lmb
                this.warr = warr
            }
            strlt() { return `Toyota Starlet : ${this.strl} Unit` }
            lmbr() { return `Lamborghini Aventador : ${this.lmb} Unit` }
            guarantee() { return `Garansi : ${this.warr} Tahun` }
        }
let garansi = Math.floor(Math.random() * Math.floor(10))
let jual = new car(readyStarlet.siap(), readyLamborghini.ready(), garansi)

class tyre {
            constructor(jenisBan) {
                this.jenisBan = jenisBan
            }
            tyre() { return `Ban     : ${this.jenisBan}` }
            tyre2() { return `Ban     : ${this.jenisBan}` }
        }

let ban = ['ZYTRE', 'Michellin Super Sport', 'Pirelli', 'Achilles']
let rndm = Math.floor(Math.random() * 4)
let bann = new tyre(ban[rndm])
let rndom = Math.floor(Math.random() * 4)
let bann2 = new tyre(ban[rndom])

class engine {
            constructor(jenisMesin) {
                this.jenisMesin = jenisMesin
            }
            engine() { return `Mesin   : ${this.jenisMesin}` }
            engine2() { return `Mesin   : ${this.jenisMesin}` }
        }
let eg = ['V8', 'V12', 'V2', 'V4', 'V6']
let mesin = new engine(eg[rndm])
let mesin2 = new engine(eg[rndom])
class carFactory {
            constructor(bulan) {
                this.bulan = bulan
            }
            egType() { return mesin.engine() }
            trType() { return bann.tyre() }
            egType2() { return mesin2.engine2() }
            trType2() { return bann2.tyre2() }
            month() { return `Pada bulan ${this.bulan} PT CAR FACTORY produksi :` }
            produksi(wulan) {
                this.bulan = wulan
                return `${this.month()}\n\n${jual.strlt()}\n|Spesifikasi\n${this.egType2()}\n${this.trType2()}\n${jual.guarantee()}\n\n${jual.lmbr()}\n|Spesifikasi\n${this.egType()}\n${this.trType()}\n${jual.guarantee()}`
            }
        }
const Produksi = new carFactory()
console.log(Produksi.produksi('Maret'))