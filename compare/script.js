const img = document.querySelector('.info-image');
const Name = document.querySelector('.name');
const id = document.querySelector('.id');
const csavingImg = document.querySelector('.csavingImg');
const csaving = document.querySelector('.csaving');
const energyInfo = document.querySelector('.energyInfo');

class Profile {
    constructor (name, id, imgSrc, csavings, csavingsImg, info) {
        this.name = name;
        this.id = id;
        this.imgSrc = imgSrc;
        this.csavings = csavings;
        this.csavingsImg = csavingsImg;
        this.info = info;
    }

    updateData() {
        img.src = this.imgSrc;
        Name.innerHTML = this.name;
        id.innerHTML = `ID: ${this.id}`;
        csavingImg.src = this.csavingsImg;
        csaving.innerHTML = `Based on your energy usage, switching to ${this.name} will reduce your carbon footprint by ${this.csavings}kg of coal per year.`;
        energyInfo.innerHTML = this.info;
    }
}

const origin = new Profile('Origin Energy', 'ABC900192', 'https://compare.energy.vic.gov.au/assets/images/retailers/big/origin.png', 30, 'person_silhouette20.png', '75% Coal powered generation, 20% wind power, 5% solar power');
const originElement = document.querySelector('.origin');
originElement.addEventListener('click', () => {
    origin.updateData();
});

const energyLocal = new Profile('Energy Locals', '813816ASL', 'https://compare.energy.vic.gov.au/assets/images/retailers/big/energy_locals.png', 80, 'person_silhouette.png', '90% wind power, 10% solar power');
const energyLocalElement = document.querySelector('.energyLocal');
energyLocalElement.addEventListener('click', () => {
    energyLocal.updateData();
});