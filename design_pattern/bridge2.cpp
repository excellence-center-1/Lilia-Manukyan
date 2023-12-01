#include <iostream>
#include <memory>

class Manufacturer {
public:
    virtual void manufacture() = 0;
    virtual ~Manufacturer() = default;
};

class Toyota : public Manufacturer {
public:
    void manufacture() override {
        std::cout << "Manufactured by Toyota" << std::endl;
    }
};

class Honda : public Manufacturer {
public:
    void manufacture() override {
        std::cout << "Manufactured by Honda" << std::endl;
    }
};


class Vehicle {
protected:
    std::shared_ptr<Manufacturer> manufacturer;

public:
    virtual void assemble() = 0;
    virtual ~Vehicle() = default;
};

class Car : public Vehicle {
public:
    Car(std::shared_ptr<Manufacturer> man) : manufacturer(std::move(man)) {}

    void assemble() override {
        std::cout << "Assembling Car ";
        manufacturer->manufacture();
    }
};

class Bike : public Vehicle {
public:
    Bike(std::shared_ptr<Manufacturer> man) : manufacturer(std::move(man)) {}

    void assemble() override {
        std::cout << "Assembling Bike ";
        manufacturer->manufacture();
    }
};

int main() {
    std::shared_ptr<Manufacturer> toyota = std::make_shared<Toyota>();
    std::shared_ptr<Manufacturer> honda = std::make_shared<Honda>();

    Vehicle* car = new Car(toyota);
    Vehicle* bike = new Bike(honda);

    car->assemble();
    bike->assemble();

    delete car;
    delete bike;

    return 0;
}
