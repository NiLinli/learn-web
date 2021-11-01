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

  box() {
    console.log('CheesePizza box!');
  }

}

class ClamPizza extends Pizza {
  box() {
    console.log('ClamPizza box!');
  }
}

class VeggiePizza extends Pizza {
  box() {
    console.log('VeggiePizza box!');
  }
}

export { Pizza, CheesePizza, ClamPizza, VeggiePizza };

