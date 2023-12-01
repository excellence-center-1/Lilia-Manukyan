#include <iostream>
#include <memory>

class Color {
public:
    virtual std::string applyColor() const = 0;
};

class RedColor : public Color {
public:
    std::string applyColor() const override {
        return "Red";
    }
};

class BlueColor : public Color {
public:
    std::string applyColor() const override {
        return "Blue";
    }
};

class Shape {
protected:
    std::shared_ptr<Color> color;

public:
    Shape(std::shared_ptr<Color> c) : color(c) {}

    virtual std::string applyColor() const = 0;
};

class Square : public Shape {
public:
    Square(std::shared_ptr<Color> c) : Shape(c) {}

    std::string applyColor() const override {
        return "Applying " + color->applyColor() + " color to square";
    }
};

class Circle : public Shape {
public:
    Circle(std::shared_ptr<Color> c) : Shape(c) {}

    std::string applyColor() const override {
        return "Applying " + color->applyColor() + " color to circle";
    }
};

int main() {
    std::shared_ptr<Color> redColor = std::make_shared<RedColor>();
    std::shared_ptr<Color> blueColor = std::make_shared<BlueColor>();

    std::unique_ptr<Shape> square = std::make_unique<Square>(redColor);
    std::unique_ptr<Shape> circle = std::make_unique<Circle>(blueColor);

    std::cout << square->applyColor() << std::endl;  
    std::cout << circle->applyColor() << std::endl;  

    return 0;
}
