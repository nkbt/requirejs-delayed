define('lib/async-component', [
	'module', 'dom'
], function (module, $) {
	"use strict";

	function init() {
		$('<h3 class="component well">I am ASYNC component!</h3>').appendTo('body');
		return true;
	}

	setTimeout(function () {
		return module.config().ready({
			init: init
		});
	}, 2000);

});
