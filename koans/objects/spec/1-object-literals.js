/*jslint nomen: true*/
/*global describe, expect, it, __*/
describe('Object literals', function () {
	it('1 - should make sure that tests are setup correctly', function () {
		expect(1).toBe(1);
	});
	it('2 - should understand object literals', function () {
		var module = (function() {

            console.log(this);

            this.address = function() {
                return 'voorsterweg';
            };

            return {
                name: 'martin'
            }
        })();

        expect(typeof module).toBe('object');
        expect(module.name).toBe('martin');

        var samurai = {
			age: 32,
			isMaster: true,
			name: 'Myamoto',
			'date-of-birth': new Date(),
			address: {
				street: 'Samurai Way 12',
				postcode: 'SW123'
			},
			weapons: ['katana', 'tanto'],
			greet: function () {
				return 'Hello';
			}
		};
		expect(typeof samurai).toBe('object');
	});
});
