define({
	load: function (dependency, req, onload, config) {
		"use strict";
		if (config.isBuild) {
			req([dependency]);
			return onload(null);
		}
		if (!config.config[dependency]) {
			config.config[dependency] = {};
		}
		config.config[dependency].ready = onload;
		return req([dependency]);
	}
});
