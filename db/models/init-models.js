import { DataTypes } from "@sequelize/core";
import _arrests from "./arrests.js";
import _incidents from "./incidents.js";
import _offenses from "./offenses.js";

function initModels(sequelize) {
	var arrests = _arrests(sequelize, DataTypes);
	var incidents = _incidents(sequelize, DataTypes);
	var offenses = _offenses(sequelize, DataTypes);

	return {
		arrests,
		incidents,
		offenses,
	};
}

export default initModels;
