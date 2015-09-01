/*jslint nomen: true*/
/*global beforeEach, describe, expect, it, __*/
describe('Mutator methods', function () {
	it('1 - should understand push', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.push(6, 7)).toBe(7);
		expect(array).toEqual([1,2,3,4,5,6,7]);
		expect(array.length).toBe(7);
		array.length = 10;
		array.push(8, 9);
		expect(array).toEqual([1,2,3,4,5,6,7,,,,8,9]);
		expect(array.length).toBe(12);
	});
	it('2 - should understand pop', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.pop()).toBe(5);
		expect(array).toEqual([1,2,3,4]);
		array.length = 10;
		expect(array.pop()).toBe(undefined);
		expect(array).toEqual([1,2,3,4,undefined,undefined,undefined,undefined,undefined]);
	});
	it('3 - should understand shift', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.shift()).toBe(1);
		expect(array).toEqual([2,3,4,5]);
		array = [, , , 3, 4, 5];
		expect(array.shift()).toBe(undefined);
		expect(array).toEqual([,,3,4,5]);
	});
	it('4 - should understand unshift', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.unshift(6, 7)).toBe(7);
		expect(array).toEqual([6,7,1,2,3,4,5]);
		array = [, , , 3, 4, 5];
		expect(array.unshift(6, 7)).toBe(8);
		expect(array).toEqual([6,7,,,,3,4,5]);
	});
	it('5 - should understand splice', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.splice(1, 2)).toEqual([2,3]);
		expect(array).toEqual([1,4,5]);
	});
	it('6 - should understand splice', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.splice(1, 2, 21, 31)).toEqual([2,3]);
		expect(array).toEqual([1,21,31,4,5]);
	});
	it('7 - should understand reverse', function () {
		var array = [1, 2, 3, 4, 5];
		expect(array.reverse()).toBe(array);
		expect(array).toEqual([5,4,3,2,1]);
	});
	it('8 - should understand sort', function () {
		var array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16];
		expect(array.sort()).toEqual([1, 10, 11, 12, 13, 14, 15, 16, 2, 3, 4, 5, 6, 7, 8,9]);
	});
	it('9 - should understand sort', function () {
		var array = [1, 3, 5, 7, 9, 11, 13, 15, 2, 4, 6, 8, 10, 12, 14, 16],
			compareFunction = function (first, second) {
				return first - second;
			};
		expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]).toEqual(array.sort(compareFunction));
	});
    it('10 - should understand splice', function () {
        var array = [1, 4, 8];
        expect(array.splice(0 ,1)).toEqual([1]);
        expect(array).toEqual([4,8]);
    });

    it('11 - should understand Array.prototype.push', function() {
       var beginArray = [2, 3, 5];
       var newArray = [];
       expect(Array.prototype.push.apply(newArray, [beginArray.shift()])).toBe(1);
    });

    it('12 - should understand Array.prototype.concat', function() {
        var a1 = [2, 3, 5];
        var a2 = [6,7,8];
        expect(Array.prototype.concat.apply([], [a1, a2])).toEqual([2,3,5,6,7,8]);
    });

    it('13 - should understand splice operation', function() {
        var arr = [8,7,5,6];
        expect((arr.length / 2) - 1).toBe(1);
        expect(arr.length / 2).toBe(2);

    })

    it('14 - should understand concat', function() {
        expect([].concat([1,2], [3,4])).toEqual([1,2,3,4])
    })

});
