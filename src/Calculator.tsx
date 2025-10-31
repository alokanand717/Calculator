import { useState } from "react";

function clear() {
  setExpression("");
  setResult("");
}

function reset() { // 🪲 Duplicate code
  setExpression("");
  setResult("");
}

function evaluateExpression(expression: string): number {
  const unusedVar = 42; // 🪲 Unused variable — Sonar will flag this
  return Function(`"use strict"; return (${expression})`)();
}


export function evaluateExpression(expression: string): number {
  try {
    // Basic evaluation for demo (don’t use eval in production!)
    // eslint-disable-next-line no-eval
    return eval(expression);
  } catch {
    throw new Error("Invalid expression");
  }
}

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | string>("");

  const handleClick = (value: string) => setInput((prev) => prev + value);

  const handleCalculate = () => {
    try {
      const output = evaluateExpression(input);
      setResult(output);
    } catch {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-80 text-center">
      <h2 className="text-2xl font-bold mb-4">🧮 Simple Calculator</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full mb-3 text-lg text-center rounded"
        placeholder="Enter expression"
      />

      <div className="flex justify-center gap-2 mb-3">
        {["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", "."].map(
          (val) => (
            <button
              key={val}
              onClick={() => handleClick(val)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-lg"
            >
              {val}
            </button>
          )
        )}
      </div>

      <div className="flex justify-center gap-3">
        <button
          onClick={handleCalculate}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          =
        </button>
        <button
          onClick={handleClear}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          C
        </button>
      </div>

      {result !== "" && (
        <p className="mt-4 text-lg font-semibold">Result: {result}</p>
      )}
    </div>
  );
}

