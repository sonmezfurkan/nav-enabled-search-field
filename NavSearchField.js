sap.ui.define([
	"sap/m/SearchField"
], function(SearchField) {
	"use strict";

	const NavSearchField = SearchField.extend("kia_work_order.custom.NavSearchField", {

		metadata: {
			properties: {
				"navIndex": {
					type: "int",
					defaultValue: null
				}
			}
		},

		renderer: {},

		init = () => {
			SearchField.prototype.init.apply(this, arguments);
		},

		onkeydown = event => {

			SearchField.prototype.onkeydown(event);

			let pathNumbers = event.target.id.match(/\d+/g).map(n => parseInt(n));
			let oldIndex = pathNumbers && pathNumbers.length ? pathNumbers[1] : null;
			let newIndex = -1;
			let newTargetId = "";
      
      if (!oldIndex) return;

			switch (event.keyCode) {
				case 38:
					window.console.log("up");
					newIndex = oldIndex - this.getNavIndex();
					if (!isNaN(newIndex) && newIndex > 0) {
						newTargetId = event.target.id.replace(oldIndex.toString(), newIndex.toString());
						if ($('#' + newTargetId)) $('#' + newTargetId).focus();
					}
					break;
				case 40:
					window.console.log("down");
					newIndex = oldIndex + this.getNavIndex();
					if (!isNaN(newIndex) && newIndex > 0) {
						newTargetId = event.target.id.replace(oldIndex.toString(), newIndex.toString());
						if ($('#' + newTargetId)) $('#' + newTargetId).focus();
					}
					break;
				default:
			};
		}

	});

	return NavSearchField;

});
