'use client';

import { useState } from 'react';

export default function Home() {
  const [romanInput, setRomanInput] = useState<string>('');
  // const [decimalInput, setDecimalInput] = useState<string>('');
  const [romanResult, setRomanResult] = useState<number | string>('');
  // const [decimalResult, setDecimalResult] = useState<string>('');

  const romanoAEntero = (romano: string): number | string => {
    const tablaRomanos: Record<string, number> = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let result = 0;
    let prevValue = 0;

    for (const letra of romano) {
      const actual = tablaRomanos[letra];
      if (!actual) return 'Entrada inválida';
      if (actual > prevValue) {
        result += actual - 2 * prevValue;
      } else {
        result += actual;
      }
      prevValue = actual;
    }
    return result;
  };

  const handleRomanSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const resultado = romanoAEntero(romanInput);
    setRomanResult(resultado);
  };

  return (
    <div className="bg-marble min-h-screen">
      <div className="bg-marble text-gold p-6 text-center font-roman">
        <h1 className="text-4xl font-bold">Conversor de Números Romanos</h1>
        <p className="text-lg italic">Transforma números romanos y decimales</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-8 border border-bronze">
        <h2 className="text-2xl text-terracotta font-roman mb-4">De Romano a Decimal</h2>
        <form onSubmit={handleRomanSubmit}>
          <input
            type="text"
            value={romanInput}
            onChange={(e) => setRomanInput(e.target.value.toUpperCase())}
            placeholder="Ingresa un número romano"
            className="w-full border-2 border-gold rounded p-2 mb-4 font-roman"
          />
          <button
            type="submit"
            className="w-full bg-gold text-marble py-2 rounded hover:bg-bronze font-bold"
          >
            Convertir
          </button>
        </form>
        <p className="mt-4 text-bronze text-lg">Resultado: {romanResult}</p>
      </div>
    </div>
  );
}
