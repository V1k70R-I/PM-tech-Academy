console.log(2 + "2" == "2" + 2); //true, произойдет конкатенация строк с обеих сторон равенства, в итоге мы получем что строка "22" равна строке "22", это правдивое выражение
console.log(2 + "3" == "3" + 2); //false, произойдет конкатенация строк с обеих сторон равенства, в итоге мы получем что строка "23" равна строке "32", это ложное выражение
console.log("3" + "2" == 3 + 2); //false, с левой стороны выражение конкатенируют две строки, а с правой происходит математическое действие "сумма", при преобразовании получаем - "32" == 5, это ложное выражение
console.log("3" + "2" == "3" + 2); //true, c обеих сторон произойден конкатенация строк, при преобразовании получаем - "32" == "32", это правдивое выражение
console.log("3" + "2" == 2 + "3"); //false, c обеих сторон произойден конкатенация строк, но порядок цифр различен, в итоге получаем - "32" == "23", это ложое выражение
console.log(2 + Number("3") == Number("3") + 2); //true, c обеих сторон строка "3" явно преобразуется в число, и мы получим два математических варажения по обе стороны равенста, результатом которых будет 5, они равны между собой, соответственно это правда

console.log(12 / "6"); // 2, делитель преобразуется из строки в число и произойдет математическая операция "деление", результат которой 2
console.log("number" + 15 + 3); // number153, из-за того что при одинаковом приоритете - операции выполняются справа налево, то сначала произойдет конкатенация "number" + "15", результатом которой будет строка "number15", а потом еще одно слияние строк "number15" + "3", окончательным результатом будет строка "number153".
console.log(15 + 3 + "number"); // 18number, сначала выполнится математическое выражение 15 + 3, результат которого число 18, после произойдет конкатенация, результат которой строка "18number"
console.log([1] > null); //true, произойдет неяное преобразование обеих сторон неравенста, массив [1], преобразуется в цифру 1, a null в цифру 0, как нам всем известно 1 больше 0, поэтому выражение правдивое
console.log("foo" + + "bar"); // fooNaN, данное выражение неявно преобразует "bar" в number, но "bar" - это не число (NaN), поэтому произойден конкатенация "foo" и NaN, в итоге получим строку "fooNaN"
console.log('true' == true); //false, строка преобразуется в NaN, а true в 1, и они не равны между собой
console.log(false == 'false'); //false, строка преобразуется в NaN, а false в 0, и они не равны между собой
console.log(null == ''); //false, nul и undefined равны друг другу и не равны никаким другим значениям. Это специальное правило языка.
console.log(!!"false" == !!"true"); //true сначала происходит неяное преобразование непустой строки в логическое значение - это true, но потом true в противоположное, в итоге false == false, а это истина
console.log([`x`] == `x`); //true, из-за того что в массиве один элемент он преобразуется в строку и идет сравнение двух строк, а они равны между собой, значит -
