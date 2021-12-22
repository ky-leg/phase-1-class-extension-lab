class Polygon {
    constructor(array){
        this.sides = array.length;
        this.addedUpSides = array.reduce((x, y) => x + y)
        this.array = array
    }
    get countSides(){
        return this.sides
    }
    
    get perimeter(){
        return this.addedUpSides
    }
}

class Triangle extends Polygon {
    get isValid(){
        let array = this.array
        let hasThreeSides = this.countSides === 3
        let isProperRatio = (
            array[0] + array[1] > array[2] &&
            array[1] + array[2] > array[0] &&
            array[2] + array[0] > array[1]
        )
        return (hasThreeSides && isProperRatio)
    }
}

class Square extends Polygon{
    get area(){
        return this.array[0]**2
    }
    get isValid(){
        let array= this.array
        let hasFourSides = this.countSides === 4 
        let isProperRatio = (
                array[0] === array[1] &&
                array[0] ===array[2] &&
                array[0] ===array[3]
            )
        return (hasFourSides && isProperRatio)
    }
}

const triangle = new Triangle([1,2,2])
console.log(triangle.perimeter)