sap.ui.define(["sap/ui/core/mvc/Controller",
			   "sap/ui/model/json/JSONModel",
			   "sap/ui/core/Fragment"], 
	function (Controller, JSONModel, Fragment) {
	"use strict";

	return Controller.extend("com.syonchev.exercise2.controller.MainView", {
		onInit: function () {
				var data = {
					recipient: {
						name: 'World'
					}
				};
				var model = new JSONModel(data);
				this.getView().setModel(model);

				var productsModel = this.getView().getModel("productsModel");
			},
			onOpenDialog: function () {
				var oView = this.getView();
				if (!this.pDialog) {
					this.pDialog = Fragment.load({
						id: oView.getId(),
						name: "com.syonchev.exercise2.view.HelloDialog",
						controller: this
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						return oDialog;
					});
				}
				this.pDialog.then(function (oDialog) {
					oDialog.open();
				});
			},
			onCloseDialog : function () {
			this.byId("helloDialog").close();
		}
		});
	}
);