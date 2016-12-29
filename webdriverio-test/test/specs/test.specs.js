var assert = require('assert');

describe('Main nenu links', function() {
	it('new page should be open', function() {
		browser.url('http://xistore.by/');
		var link = $('.navigation-menu-list').$$('li')[1].$('a');
		link.click();
		browser.waitUntil(function () {
			return browser.getUrl() === 'http://xistore.by/dostavka/'
		}, 5000, 'expected URL to be different after 5s');
	})
});

describe('Search', function() {
	it('user should see search results page', function() {
		browser.setValue('#title-search-input', 'band');
		var searchButton = $('.input-search-button');
		searchButton.click();
		assert(browser.getTitle(), 'Поиск');
	})
});

describe('Bucket', function() {
	it('device should be added to bucket', function() {
		browser.url('http://xistore.by/');

		browser.setValue('#title-search-input', 'band');
		var device = $('.home-tis-list').$$('.home-tis-links')[1].$('a');
		device.click();
		var buyButton = $('.button-link-pay.');
		buyButton.click();
		assert(browser.getText('.top-panel-basket-link .quantity'), '1');
	})
});

describe('Login', function() {
	it('should correctly login', function() {
		browser.url('http://xistore.by/');

		var login_btn = $('.navigation-cabinet-link');
		login_btn.click();

		var login_input = $('#USER_LOGIN');
		login_input.setValue('ale-salej@mail.ru');

		var pass_input = $('#USER_PASSWORD')[1];
		pass_input.setValue('obuhovo');

		assert(browser.getText('.navigation-cabinet-list'), 'ale-salej@mail.ru');
	})
});

describe('Logout', function() {
	it('should correctly logout', function() {
		var logout_btn = $('.navigation-cabinet-list li ul').$$('li')[9];
		logout_btn.click();

		assert(browser.getText('.navigation-cabinet-link'), 'Личный кабинет');
	})
});





