// Problem 1: String formatting function
function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Problem 2: Filter items by rating
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

// Problem 3: Generic array concatenation
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, current) => [...result, ...current], [] as T[]);
}

// Problem 4: Vehicle and Car classes
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Problem 5: Process string or number
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// Problem 6: Find most expensive product
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  
  return products.reduce((mostExpensive, current) => 
    current.price > mostExpensive.price ? current : mostExpensive, 
    products[0]
  );
}

// Problem 7: Day enum and day type function
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return (day === Day.Saturday || day === Day.Sunday) ? "Weekend" : "Weekday";
}

// Problem 8: Async square function
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

// Export functions and classes for testing
export {
  formatString,
  filterByRating,
  concatenateArrays,
  Vehicle,
  Car,
  processValue,
  Product,
  getMostExpensiveProduct,
  Day,
  getDayType,
  squareAsync
};