class MathUtils {
    static sum(numbers){
        if(numbers.length === 0){
            return "no element in array";
        }
        return numbers.reduce((accumulator, current) => accumulator + current, 0);
    }

    static average(numbers){
        if(numbers.length === 0){
            return "no element in array";
        }
        const sum = MathUtils.sum(numbers);
        return sum / numbers.length;
    }

    static max(numbers){
        if(numbers.length === 0){
            return "no element in array";
        }
        return Math.max(...numbers);
    }

    static min(numbers){
        if(numbers.length === 0){
            return "no element in array";
        }
        return Math.min(...numbers);
    }
}

const numbers = [5, 2, -9, 1, 7];
console.log("Sum:", MathUtils.sum(numbers));
console.log("Average:", MathUtils.average(numbers));
console.log("Max:", MathUtils.max(numbers));
console.log("Min:", MathUtils.min(numbers));
