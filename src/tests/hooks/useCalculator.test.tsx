import { act, renderHook } from "@testing-library/react-hooks";
import React from "react";
import useCalculator from "../../hooks/useCalculator";


test("addition", () => {
    const { result } = renderHook(() => useCalculator());
    const { addition } = result.current;
    const add = addition('1', '1');
    expect(add).toEqual('2');
  });

  test("substraction", () => {
    const { result } = renderHook(() => useCalculator());
    const { substraction } = result.current;
    const add = substraction('2', '1');
    expect(add).toEqual('1');
  });

  test("division", () => {
    const { result } = renderHook(() => useCalculator());
    const { division } = result.current;
    const add = division('2', '2');
    expect(add).toEqual('1');
  });

  test("modulo", () => {
    const { result } = renderHook(() => useCalculator());
    const { modulo } = result.current;
    const add = modulo('5', '3');
    expect(add).toEqual('2');
  });

  test("square", () => {
    const { result } = renderHook(() => useCalculator());
    const { square } = result.current;
    const add = square('25');
    expect(add).toEqual('5');
  });

  

