class Key {
  private signature: number = Math.random();

  public getSignatur() {
    return this.signature;
  }
}

class Person {
  constructor(private key: object) {}

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected tenants: object[] = [];
  protected door: boolean = false;

  public comeIn(person: object) {
    if (this.door) {
      this.tenants.push(person);
    }
  }

  public abstract openDoor(key: object): void;
}

class MyHouse extends House {
  constructor(private key: object) {
    super();
  }

  public openDoor(personKey: object): void {
    if (key === personKey) {
      this.door = true;
    } else {
      this.door = false;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
