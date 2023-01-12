/**
 * MIT License

Copyright (c) 2017 deepakshajan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

var options = {
				   solution: 			[[null,	null,	null,	null,	'F',	null,	null],
									 	 [null,	null,	null,	null,	'A',	null,	null],
										 [null,	null,	null,	null,	'L',	null,	null],
										 [null,	null,	null,	null,	'L',	null,	null],
										 [null,	null,	null,	'W',	'O',	'M',	'B'],
									 	 [null,	null,	null,	null,	'P',	null,	null],
									 	 [null,	'O',	null,	null,	'I',	null,	null],
										 [null,	'V',	null,	null,	'A',	null,	null],
										 ['V',	'A',	'G',	'I',	'N',	'A',	null],
										 [null,	'R',	null,	null,	'T',	null,	null],
										 [null,	'I',	null,	null,	'U',	null,	null],
										 [null,	'E',	null,	null,	'B',	null,	null],
										 [null,	'S',	null,	null,	'E',	null,	null],
										 [null,	null,	null,	null,	'S',	null,	null]],


		            index: 				[[null,	null,	null,	null,	1,		null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	2,		null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	3,		null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [4,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null],
										 [null,	null,	null,	null,	null,	null,	null]],

		         questions_across: [	"2. Womb",
				 						"4. Elastic, muscular part of the female genital tract"],

		         questions_down: [		"1. Fallopian Tubes",
				 						"3. Ovaries"]

	};


		cwp_nmsp.activateCWP(document.getElementById("myPuzzle"),true,options);