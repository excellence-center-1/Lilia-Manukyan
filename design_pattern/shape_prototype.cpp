#include <iostream>
#include <unordered_map>
#include <memory>

class Shape {
public:
    virtual ~Shape() {}
    virtual void draw() const = 0;
    virtual std::unique_ptr<Shape> clone() const = 0;
};

class Circle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Circle\n";
    }

    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Circle>(*this); // Cloning the Circle object
    }
};

class Square : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Square\n";
    }

    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Square>(*this); // Cloning the Square object
    }
};

class Triangle : public Shape {
public:
    void draw() const override {
        std::cout << "Drawing Triangle\n";
    }

    std::unique_ptr<Shape> clone() const override {
        return std::make_unique<Triangle>(*this); // Cloning the Triangle object
    }
};

class ShapeRegistry {
private:
    std::unordered_map<std::string, std::unique_ptr<Shape>> prototypes;

public:
    ShapeRegistry() {
        // Initialize prototypes in the registry
        prototypes["Circle"] = std::make_unique<Circle>();
        prototypes["Square"] = std::make_unique<Square>();
        prototypes["Triangle"] = std::make_unique<Triangle>();
    }

    std::unique_ptr<Shape> createShape(const std::string& shapeType) const {
        auto it = prototypes.find(shapeType);
        if (it != prototypes.end()) {
            return it->second->clone(); // Clone the requested shape
        }
        return nullptr; // Return nullptr for unknown shapes
    }
};

int main() {
    ShapeRegistry shapeRegistry;

    // Test cases
    std::unique_ptr<Shape> circle = shapeRegistry.createShape("Circle");
    if (circle) circle->draw();

    std::unique_ptr<Shape> square = shapeRegistry.createShape("Square");
    if (square) square->draw();

    std::unique_ptr<Shape> triangle = shapeRegistry.createShape("Triangle");
    if (triangle) triangle->draw();

    std::unique_ptr<Shape> unknownShape = shapeRegistry.createShape("Rectangle");
    if (!unknownShape) {
        std::cout << "Unknown shape requested\n";
    }

    return 0;
}
