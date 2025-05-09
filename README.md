
# TypeScript Practice & Blog Post

This repository contains solutions to 8 TypeScript programming problems and two detailed blog posts discussing TypeScript concepts.

## 🧠 Problem Solutions

All TypeScript code is written in a single file named `solutions.ts`. Here's a quick summary of the problems and their functionality:

### 1. `formatString(input: string, toUpper?: boolean): string`
Converts a string to uppercase by default. If the second parameter is `false`, it converts to lowercase.

### 2. `filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]`
Filters an array of objects by returning only those with a rating of 4 or more.

### 3. `concatenateArrays<T>(...arrays: T[][]): T[]`
Concatenates multiple arrays of the same type using rest parameters and generics.

### 4. Vehicle & Car Classes
- `Vehicle`: Class with private `make` and `year` properties and a `getInfo()` method.
- `Car`: Extends `Vehicle` with a private `model` property and a `getModel()` method.

### 5. `processValue(value: string | number): number`
Returns the length if the input is a string and the number multiplied by 2 if it’s a number.

### 6. `getMostExpensiveProduct(products: Product[]): Product | null`
Finds and returns the product with the highest price or `null` if the array is empty.

### 7. Enum `Day` & `getDayType(day: Day): string`
Returns "Weekday" or "Weekend" based on the provided day of the week enum.

### 8. `squareAsync(n: number): Promise<number>`
Returns the square of a number after 1 second or rejects if the number is negative.

---

## Blog Posts

### 1. What are some differences between interfaces and types in TypeScript?

TypeScript provides both `interface` and `type` to define object shapes, but they differ slightly.

**Key Differences:**
- **Extensibility:** Interfaces can be extended multiple times, types cannot be reopened once defined.
- **Declaration Merging:** Interfaces support it, types do not.
- **Use Cases:** Use interfaces for object shapes and classes; types for complex unions and primitives.

**Example:**
```ts
interface Person {
  name: string;
}

type Animal = {
  name: string;
}
```

**Recommendation:** Prefer `interface` for objects and `type` for unions or primitives.

---

### 2. What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword returns a union of all property names (keys) of a type as string literals.

**Why Use `keyof`:**
It enables creating more type-safe and dynamic utility functions.

**Example:**
```ts
type Person = { name: string; age: number };
type PersonKeys = keyof Person; 

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "Alice", age: 30 };
getProperty(person, "name"); 
```

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- TypeScript installed globally or locally

### Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/typescript-practice-blog.git
cd typescript-practice-blog
```

2. Install TypeScript (if not already installed):

```bash
npm install -g typescript
```

3. Compile the TypeScript file:

```bash
tsc solutions.ts
```

4. Run compiled file using Node:

```bash
node solutions.js
```

---

##  Project Structure

```
📁 typescript-practice-blog
├── solutions.ts
└── README.md
```

---

