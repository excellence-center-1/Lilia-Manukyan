#include <iostream>
#include <memory>

class Shape {
public:
    virtual ~Shape() {}
    virtual void draw() const = 0;
};

class Circle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Circle\n";
    }
};

class Square : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Square\n";
    }
};

class Triangle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Triangle\n";
    }
};

class ShapeFactory {
public:
    virtual std::unique_ptr<Shape> createShape(const std::string& shapeType) = 0;
};

class ShapeFactoryImpl : public ShapeFactory {
public:
    std::unique_ptr<Shape> createShape(const std::string& shapeType) override {
        if (shapeType == "Circle") {
            return std::make_unique<Circle>();
        } else if (shapeType == "Square") {
            return std::make_unique<Square>();
        } else if (shapeType == "Triangle") {
            return std::make_unique<Triangle>();
        } else {
            return nullptr; // Return nullptr for unknown shapes
        }
    }
};

int main() {
    ShapeFactoryImpl shapeFactory;

    // Test cases
    std::unique_ptr<Shape> circle = shapeFactory.createShape("Circle");
    if (circle) circle->draw();

    std::unique_ptr<Shape> square = shapeFactory.createShape("Square");
    if (square) square->draw();

    std::unique_ptr<Shape> triangle = shapeFactory.createShape("Triangle");
    if (triangle) triangle->draw();

    std::unique_ptr<Shape> unknownShape = shapeFactory.createShape("Rectangle");
    if (!unknownShape) {
        std::cout << "Unknown shape requested\n";
    }

    return 0;
}
