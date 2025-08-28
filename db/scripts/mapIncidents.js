export default function (row) {
	return {
		incident_number: row.incident_number,
		call_type: row.call_type,
		call_type_group: row.call_type_group,
		call_time: row.call_time,
		street: row.Street,
		call_origin: row.call_origin,
		mental_health: row.mental_health,
		drug_related: row.drug_related,
		dv_related: row.dv_related,
		alcohol_related: row.alcohol_related,
		area: row.Area,
		area_name: row.AreaName,
		latitude: row.Latitude,
		longitude: row.Longitude,
		day_of_week: row.DayOfWeek,
		incident_hour: row.Hour,
		incident_priority: row.priority,
		incident_month: row.Month,
	};
}
