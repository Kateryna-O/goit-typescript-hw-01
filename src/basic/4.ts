function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

showMessage("Hello, world!");
const sum = calc(5, 10);

try {
  customError();
} catch (e) {
  console.error(e);
}
