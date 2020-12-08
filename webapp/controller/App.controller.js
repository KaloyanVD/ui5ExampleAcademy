sap.ui.define(
	[
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function (Controller, MessageToast, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("SecondUI5.SecondUI5.controller.App", {
onInit: function () {
				// set data model on view
				var data = {
					recipient: {
						name: "World"
					}
				};
				var model = new JSONModel(data);
				this.getView().setModel(model);
				var productsModel = this.getView().getModel('productsModel');
			},
			
		onShowHello : function () {
         MessageToast.show("Hello World");
      },
		onOpenDialog : function () {
			var oView = this.getView();

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = Fragment.load({
					id: oView.getId(),
					name: "SecondUI5.SecondUI5.view.HelloDialog"
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					return oDialog;
				});
			} 
			this.pDialog.then(function(oDialog) {
				oDialog.open();
			});
		}
	});
});