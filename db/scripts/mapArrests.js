export default function (row) {
	return {
		incident_number: row.incident_number,
		arrest_date: row.arrest_date,
		gender: row.gender,
		race: row.race,
		age: row.age,
		charge: row.charge,
		most_serious: row.most_serious,
		ethnicity: row.ethnicity,
		felony: row.felon,
		violent: row.violent,
		category: row.category,
		arrest_type: row.arrest_type,
		addl_charge_1: row.addl_charge_1,
		addl_charge_2: row.addl_charge_2,
		addl_charge_3: row.addl_charge_3,
		addl_charge_4: row.addl_charge_4,
		addl_charge_5: row.addl_charge_5,
		addl_charge_6: row.addl_charge_6,
		addl_charge_7: row.addl_charge_7,
		addl_charge_8: row.addl_charge_8,
	};
}
