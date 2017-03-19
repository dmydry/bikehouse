class Bike {
  constructor(name, bikeClass, desc, img) {
    this.name = name;
    this.bikeClass = bikeClass;
    this.desc = desc;
    this.img = img;
  }
}

export const colors = ['blue', 'grey', 'black', 'white', 'silver', 'gold', 'red'];
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
    bikes.push(new Bike(
      `Honda Vario ${colors[Math.floor(Math.random() * colors.length)]}`,
      '110cc',
      descriptions[Math.floor(Math.random() * descriptions.length)],
      `http://placehold.it/${imgSize}`));
  }
  return bikes;
};
