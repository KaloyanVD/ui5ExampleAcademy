sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Exercise4.Exercise4.controller.App", {
		onInit: function () {

		},
		onPress: function (oEvent) {
			
			var shopPath = oEvent.getSource().getBindingContext("shopModel").getPath().substr(1);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("detail", {
				Name: window.encodeURIComponent(shopPath)
			});
		}
	});
});