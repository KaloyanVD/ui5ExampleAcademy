sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createProductsModel: function () {
			var path = jQuery.sap.getModulePath(
				'Exercise3.Exercise3',
				'/model/products.json'
			);
			var productsModel = new JSONModel(path);

			// set the model to the view
			return productsModel;
		}
	};
});