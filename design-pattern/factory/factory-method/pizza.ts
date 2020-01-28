class Pizza {

  prepare() {
    console.log('Pizza prepare!');
  }

  bake() {
    console.log('Pizza bake!');
  }

  cut() {
    console.log('Pizza cut!');
  }

  box() {
    console.log('Pizza box!');
  }
}

class CheesePizza extends Pizza {

  prepare() {
    console.log('Cheese prepare!');
  }

}

class ClamPizza extends Pizza {

}

class VeggiePizza extends Pizza {

}

export { Pizza, CheesePizza, ClamPizza, VeggiePizza };

