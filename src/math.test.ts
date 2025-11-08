import { soma, subtrair } from './math';

describe('Função soma', () => {
  test('deve somar dois números positivos corretamente', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('deve somar números negativos corretamente', () => {
    expect(soma(-5, -3)).toBe(-8);
  });

  test('deve somar um número positivo e um negativo', () => {
    expect(soma(10, -5)).toBe(5);
  });

  test('deve somar zero corretamente', () => {
    expect(soma(0, 0)).toBe(0);
    expect(soma(5, 0)).toBe(5);
  });

  test('deve somar números decimais', () => {
    expect(soma(1.5, 2.5)).toBe(4);
  });
});

describe('Função subtrair', () => {
  test('deve subtrair dois números positivos corretamente', () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test('deve subtrair números negativos corretamente', () => {
    expect(subtrair(-5, -3)).toBe(-2);
  });

  test('deve subtrair um número negativo de um positivo', () => {
    expect(subtrair(10, -5)).toBe(15);
  });

  test('deve subtrair zero corretamente', () => {
    expect(subtrair(0, 0)).toBe(0);
    expect(subtrair(5, 0)).toBe(5);
  });

  test('deve subtrair números decimais', () => {
    expect(subtrair(5.5, 2.5)).toBe(3);
  });

  test('deve retornar resultado negativo quando o segundo número é maior', () => {
    expect(subtrair(3, 10)).toBe(-7);
  });
});
