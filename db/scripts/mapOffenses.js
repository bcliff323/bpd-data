export default function (row) {
	return {
		incident_number: row.incident_number,
		offense_name: row.name,
		call_time: row.call_time,
		offense_cat: row.offenseCat,
		offense_sub_cat: row.OffenseSubCat,
		vic_race: row.vic_race,
		vic_gender: row.vic_gender,
		suspect_race: row.suspect_race,
		suspect_gender: row.suspect_gender,
		bias: row.bias,
		weapon_type: row.weapon_type,
		violent: row.violent,
	};
}
