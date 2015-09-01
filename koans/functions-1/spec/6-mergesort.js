xdescribe('mergesort', function() {

    var tmpArray = [];

//    var mergesort = function(unsortedArray) {
//        console.log('mergsort', unsortedArray);
//
//        if (unsortedArray.length > 1 ) {
//            var middle = parseInt(unsortedArray.length / 2);
//            var left   = unsortedArray.slice(0, middle);
//            var right  = unsortedArray.slice(middle, unsortedArray.length);
//            return merge(mergesort(left), mergesort(right));
//        } else {
//            return unsortedArray;
//        }
//    };
//
//    var merge = function merge(firstArray, secondArray) {
//
//        var element;
//        console.log('merge', firstArray, secondArray);
//
//        if (firstArray === undefined || firstArray.length === 0) {
//            return secondArray;
//        }
//        if (secondArray === undefined || secondArray.length === 0) {
//            return firstArray;
//        }
//
//        if (firstArray[0] <= secondArray[0]) {
//            element = firstArray.shift();
//            return Array.prototype.concat.apply([], [[element], merge(firstArray, secondArray)]);
//
//        } else {
//            element = secondArray.shift();
//
//            return Array.prototype.concat.apply([], [[element], merge(firstArray, secondArray)]);
//        }
//    };

 //   var result = [];

//    var mergesort = function(unsortedArray) {
//  //      console.log('mergsort', unsortedArray);
//
//        if (unsortedArray.length > 1 ) {
//            var middle = parseInt(unsortedArray.length / 2);
//            var left   = unsortedArray.slice(0, middle);
//            var right  = unsortedArray.slice(middle, unsortedArray.length);
//            return merge(mergesort(left), mergesort(right));
//        } else {
//            return unsortedArray;
//        }
//    };
//
//
//
//    var merge = function merge(firstArray, secondArray) {
//
//        var element;
//   //     console.log('merge', firstArray, secondArray);
//
//        if (firstArray === undefined || firstArray.length === 0) {
//            return secondArray;
//        }
//        if (secondArray === undefined || secondArray.length === 0) {
//            return firstArray;
//        }
//
//        if (firstArray[0] <= secondArray[0]) {
//            element = firstArray.shift();
//            return result.concat([element], merge(firstArray, secondArray));
////            return Array.prototype.concat.apply(result, [[element], merge(firstArray, secondArray)]);
//        } else {
//            element = secondArray.shift();
//            return result.concat([element], merge(firstArray, secondArray));
//        }
//    };

//    var result = [];
//
//    function merge(left, right){
//      //  var result = [];
//
//        console.log('left', left, 'right', right);
//
//        if (left.length === 0) {
//            return right;
//        }
//        if (right.length === 0) {
//            return left;
//        }
//
////        while (left.length > 0 && right.length > 0){
//        if (left[0] < right[0]){
//            result.push(left.shift());
//        } else {
//            result.push(right.shift());
//        }
//  //      }
//
//        return result.concat(merge(left,right));
//    }

    function merge(left, right){
        var result = [];

        while (left.length > 0 && right.length > 0){
            if (left[0] < right[0]){
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return result.concat(left).concat(right);
    }

    function mergeSort(items){

        if (items.length == 1) {
            return items;
        }

        var middle = Math.floor(items.length / 2),
            left    = items.slice(0, middle),
            right   = items.slice(middle);

        return merge(mergeSort(left), mergeSort(right));
    }

    function mergeSort1(arr)
    {
//        console.log('mergsort1', arr);

        if (arr.length < 2)
            return arr;

        var middle = parseInt(arr.length / 2);
        var left   = arr.slice(0, middle);
        var right  = arr.slice(middle, arr.length);

        return merge1(mergeSort1(left), mergeSort1(right));
    }

    function merge1(left, right)
    {
        var result = [];
//        console.log('merge1', left, right);
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        while (left.length)
            result.push(left.shift());

        while (right.length)
            result.push(right.shift());

        return result;
    }


//    var merge = function merge(firstArray, secondArray, mergedArray) {
//        console.log('merge', firstArray, secondArray, mergedArray);
//        var element;
//        if (firstArray === undefined || firstArray.length === 0) {
//            return secondArray;
//        }
//        if (secondArray === undefined || secondArray.length === 0) {
//            return firstArray;
//        }
//        if (firstArray[0] <= secondArray[0]) {
//            element = firstArray.shift();
//            return Array.prototype.concat.apply(mergedArray, [[element], merge(firstArray, secondArray, mergedArray)]);
//        } else {
//            element = secondArray.shift();
//            return Array.prototype.concat.apply(mergedArray, [[element], merge(firstArray, secondArray, mergedArray)]);
//        }
//    };

    it('1 - should check setup', function() {
       expect(1 === 1).toBe(true);
    });

    function bigRandomArrayOfIntegers() {
        var arr = [];
        for (var i=0, t=14000; i<t; i++) {
            arr.push(Math.round(Math.random() * t))
        }
        return arr;
    }
    xit('2a - should sort using javascript sort function', function() {
        var unsortedArray = bigRandomArrayOfIntegers();
//        var unsortedArray = [4, 3, 1, 2, 6];
        var d = new Date();
        var n = d.getTime();
        expect(unsortedArray.sort(function(a, b){return a-b})).toEqual([1, 2, 3, 4, 6]);
        var e = new Date();
        var m = e.getTime();
        console.log('sortfunc',m - n);

    });

    xit('2 - should sort and merge given array', function() {
//        var unsortedArray = [4, 3, 1, 2, 6, 7, 5];
        var unsortedArray = bigRandomArrayOfIntegers();
        var d = new Date();
        var n = d.getTime();
        expect(mergeSort(unsortedArray)).toEqual([1, 2, 3, 4, 5,6, 7]);
//        expect(mergesort(unsortedArray)).toEqual([1, 2, 3, 4, 5,6, 7]);
        var e = new Date();
        var m = e.getTime();
        console.log('mymergesort',m - n);

    });

    it('2c - should sort and merge given array', function() {
//          var unsortedArray = [4, 3, 1, 2, ];
        var unsortedArray = bigRandomArrayOfIntegers();
        var d = new Date();
        var n = d.getTime();
        expect(mergeSort1(unsortedArray)).toEqual([1, 2, 3, 4]);
        var e = new Date();
        var m = e.getTime();
        console.log('other merger',m - n);

    });


    it('2b - should sort using javascript sort function', function() {
        var unsortedArray = [1,100, 2, 10];

        expect(unsortedArray.sort(function(a, b){return a-b})).toEqual([1,2, 10, 100]);


    });


    xit('3 - should sort and merge given array', function() {
        var unsortedArray = [8, 7, 5, 6];
        expect(mergesort(unsortedArray)).toEqual([5, 6, 7, 8]);
    });

    xit('4 - should merge two sorted arrays into one sorted array', function() {
        var firstSortedArray = [3,7,9];
        var secondSortedArray = [1, 4, 8];
        expect(merge(firstSortedArray, secondSortedArray, [])).toEqual([1, 3, 4, 7, 8, 9]);
    })

});