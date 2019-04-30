const fib = require('./fibbonacci');

//W komentarzach poniżej podana argumentacja użycia testu
describe('Fibbonacci sequence', () => {

//Podana liczba nie jest całkowita, np. 4.5
it ("fib function given a number which is not an integer should return 'This is not an integer!'", () => {
 expect(fib(4.5)).toBe('This is not an integer!')
});

//Jako parametr podana tablica
it("fib function given an Array Object as a parameter should return 'This is not an integer!'", () => {
 expect(fib([10, 20, 15])).toBe('This is not an integer!')
});

//Jako parametr podany obiekt
it("fib function given an Object Object as a parameter should return 'This is not an integer!'", () => {
 expect(fib({name: 'Andrew', age: 20})).toBe('This is not an integer!')
});

//Podana liczba całkowita jest ujemna (zakładamy, że ciąg Fibbonacciego we wskazanej formie zaczyna się od [0, 1])
it("fib function with a given negative number should return 'The given number can not be negative!'", () => {
 expect(fib(-5)).toBe('The given number can not be negative!')
});

//Jako parametr podano liczbę całkowitą 0 - powinna zostać zwrócona pusta tablica
it("fib function given 0 as a parameter should return an empty array", () => {
 expect(fib(0)).toEqual([])
});

//Jako parametr podano liczbę całkowitą 1 - powinna zostać zwrócona tablica jednoelementowa [0] - ten punkt zależny jest również od interpretacji ciągu Fibbonacciego 
it("fib function given an Integer equal 1 as a parameter should return an array [0]", () => {
 expect(fib(1)).toEqual([0])
});

//Jako parametr podano liczbę całkowitą 2 - powinna zostać zwrócona tablica dwuelementowa [0, 1] - 2 pierwsze wyrazy formalnego ciągu Fibbonacciego
it("fib function given an Integer equal 2 as a parameter should return an array [0, 1]", () => {
 expect(fib(2)).toEqual([0, 1])
});

//Jako parametr podano liczbę całkowitą większą od 2 - powinna zostać zwrócona tablica o długości podanej liczby całkowitej,reprezentująca kolejne wyrazy ciągu Fibbonacciego
it("fib function with a given INTEGER bigger than 2 should return an array with length of INTEGER and filled with following numbers of Fibbonacci's sequence", () => {
 expect(fib(15)).toEqual([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ])
});

//Jak wyżej, potwierdzenie działania dla większych liczb
it("fib function with a given INTEGER bigger than 2 should return an array with length of INTEGER and filled with following numbers of Fibbonacci's sequence", () => {
 expect(fib(100)).toEqual([ 0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
  1346269,
  2178309,
  3524578,
  5702887,
  9227465,
  14930352,
  24157817,
  39088169,
  63245986,
  102334155,
  165580141,
  267914296,
  433494437,
  701408733,
  1134903170,
  1836311903,
  2971215073,
  4807526976,
  7778742049,
  12586269025,
  20365011074,
  32951280099,
  53316291173,
  86267571272,
  139583862445,
  225851433717,
  365435296162,
  591286729879,
  956722026041,
  1548008755920,
  2504730781961,
  4052739537881,
  6557470319842,
  10610209857723,
  17167680177565,
  27777890035288,
  44945570212853,
  72723460248141,
  117669030460994,
  190392490709135,
  308061521170129,
  498454011879264,
  806515533049393,
  1304969544928657,
  2111485077978050,
  3416454622906707,
  5527939700884757,
  8944394323791464,
  14472334024676220,
  23416728348467684,
  37889062373143900,
  61305790721611580,
  99194853094755490,
  160500643816367070,
  259695496911122560,
  420196140727489660,
  679891637638612200,
  1100087778366101900,
  1779979416004714000,
  2880067194370816000,
  4660046610375530000,
  7540113804746346000,
  12200160415121877000,
  19740274219868226000,
  31940434634990100000,
  51680708854858330000,
  83621143489848430000,
  135301852344706760000,
  218922995834555200000 ]
   )
});
})