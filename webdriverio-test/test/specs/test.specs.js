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
		searchButton.click;
		assert(browser.getTitle(), 'Поиск');
	})
});

describe('Bucket', function() {
	it('device should be added to bucket', function() {
		browser.url('http://xistore.by/');

		browser.setValue('#title-search-input', 'band');
		var device = $('home-tis-list').$$('.home-tis-links')[1].$('a');
		device.click();
		var buyButton = $('.button-link-pay.');
		buyButton.click();
		assert(browser.getText('.top-panel-basket-link .quantity'), '1');
	})
});





