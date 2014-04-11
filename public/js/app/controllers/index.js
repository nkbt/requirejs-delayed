define(['dom', 'app/component'], function ($, component) {
	"use strict";

	function init() {
		require(['txt!views/index/index.html', 'css!themeCss/index/index'], function (view) {
			$('#content')
				.html(view);
			setTimeout(component.init, 500);

			require(['lib/delayed!lib/async-component'], function (asyncComponent) {
				console.log(asyncComponent.init());
			});
		});
	}

	return {
		init: init
	};

});
