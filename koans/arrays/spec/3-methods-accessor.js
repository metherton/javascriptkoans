/*global describe, expect, it, __*/
describe('Arrays - accessor methods', function () {
	it('1 - should understand concat', function () {
		var first = [1, 2, 3], second = [4, 5, 6];
		expect(first.concat(second)).toEqual([1,2,3,4,5,6]);
		expect(first).toEqual([1,2,3]);
		expect(second).toEqual([4,5,6]);
	});

	xit('2 - should understand string join', function () {
		var array = '12345';
		expect(array.join()).toBe('1,2,3,4,5');
	});

	it('2 - should understand join', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.join('-')).toBe('1-2-3-4-5');
	});
	it('3 - should understand join', function () {
		var array = new Array(10);
		expect(array.join('.-')).toBe('.-.-.-.-.-.-.-.-.-');
	});
	it('4 - should understand split', function () {
		expect('1-2-3-4-5-6-7-8-9-10'.split('-')).toEqual(['1','2','3','4','5','6','7','8','9','10']);
	});
	it('5 - should understand split', function () {
		expect('.-.-.-.-.-.-.-.-.-.'.split('-')).toEqual(['.','.','.','.','.','.','.','.','.','.']);
	});
	it('6 - should understand join and split', function () {
		expect(new Array(10).join('._').split('-')).toEqual(['._._._._._._._._._']);
	});
	it('7 - should understand slice', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.slice(1, 4)).toEqual([2,3,4]);
		expect(array).toEqual([1,2,3,4,5]);
		expect(array.slice(1)).toEqual([2,3,4,5]);
		expect(array.slice(1, -1)).toEqual([2,3,4]);
		expect(array.slice(-3, -1)).toEqual([3,4]);
	});
	it('8 - should understand toString', function () {
		var array = [1, 3, 5, 'hello', 9];
		expect(array.toString()).toBe('1,3,5,hello,9');
	});
	it('9 - should understand indexOf', function () {
		var array = [1, 1, 3, 3, 5, 5, 7, 7];
		expect(array.indexOf(3)).toBe(2);
		expect(array.indexOf(2)).toBe(-1);
	});
	it('10 - should understand lastIndexOf', function () {
		var array = [1, 1, 3, 3, 5, 5, 7, 7];
		expect(array.lastIndexOf(3)).toBe(3);
		expect(array.lastIndexOf(2)).toBe(-1);
	});
});
