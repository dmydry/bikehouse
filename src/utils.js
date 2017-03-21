import moment from 'moment';

class Bike {
  constructor(brand, model, type, color, dates, client, status, investor, prodDate, currBooking, img, descriptions) {
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.color = color;
    this.dates = dates;
    this.client = client;
    this.status = status;
    this.investor = investor;
    this.prodDate = prodDate;
    this.currBooking = currBooking;
    this.img = img;
    this.description = descriptions;
  }
}

export const brands = ['Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 'Benelli'];
const models = {
  h: ['Vario 110', 'Vario 125', 'Vario 150', 'Scoopy 110', 'CB 150', 'CBR 250'],
  y: ['Mio 110', 'Fino 110', 'GT 125', 'NMAX 150'],
  k: ['Z250 SL', 'Z250', 'Pulsar 200'],
  s: ['NoName'],
  b: ['Zafferano 250'],
};
const colors = ['blue', 'grey', 'black', 'white', 'silver', 'gold', 'red'];
const investrors = ['inv1', 'inv2', 'inv3', 'inv4', 'inv5'];
const descriptions = [
  'Super bike for YOU!',
  'Only today! Book it!',
  'Best choice. Stylish motorbike',
  'Be a speedster, ride it today',
  'Your road best friend',
  '2016 year award. Motorbike with soul',
  'Red monster only for you',
];

export const items = (count, imgSize) => {
  const bikes = [];
  for (let i = 0; i < count; i += 1) {
    const brand = brands[Math.floor(Math.random() * brands.length)];
    let model;
    if (brand === 'Honda') model = models.h[Math.floor(Math.random() * models.h.length)];
    if (brand === 'Yamaha') model = models.y[Math.floor(Math.random() * models.y.length)];
    if (brand === 'Kawasaki') model = models.k[Math.floor(Math.random() * models.k.length)];
    if (brand === 'Suzuki') model = models.s[Math.floor(Math.random() * models.s.length)];
    if (brand === 'Benelli') model = models.b[Math.floor(Math.random() * models.b.length)];
    const type = 'motorbike';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const dates = {
      disabled: {
        today: moment('00:00', 'HH:mm').toDate(),
        from: moment('00:00', 'HH:mm').add(10, 'd').toDate(), // Disable all dates after specific date
        to: moment('00:00', 'HH:mm').add(0, 'd').toDate(), // Disable all dates up to specific date
      },
    };
    const client = { id: 0 };
    const status = 'available';
    const investor = investrors[Math.floor(Math.random() * investrors.length)];
    const prodDate = (start, end) => new Date(start.getTime() + (Math.random() * (end.getTime() - start.getTime())));
    const currBooking = {
      from: '',
      to: '',
    };
    const img = `http://placehold.it/${imgSize}`;
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    bikes.push(new Bike(brand, model, type, color, dates, client, status, investor,
      prodDate(new Date(2012, 0, 1), new Date()), currBooking, img, description));
  }
  return bikes;
};
