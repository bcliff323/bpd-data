import { DataTypes } from "@sequelize/core";
import _arrests from "./arrests.js";
import _incidents from "./incidents.js";

function initModels(sequelize) {
	var arrests = _arrests(sequelize, DataTypes);
	var incidents = _incidents(sequelize, DataTypes);

	return {
		arrests,
		incidents,
	};
}

export default initModels;
