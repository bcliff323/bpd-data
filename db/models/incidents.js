export default function (sequelize, DataTypes) {
	return sequelize.define(
		"incidents",
		{
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
			},
			incident_number: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			call_type: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			call_type_group: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			call_time: {
				type: DataTypes.DATEONLY,
				allowNull: true,
			},
			street: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			call_origin: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			mental_health: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			drug_related: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			dv_related: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			alcohol_related: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			area: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			area_name: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			latitude: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			longitude: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			day_of_week: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			incident_hour: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			incident_priority: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			incident_month: {
				type: DataTypes.STRING(15),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "incidents",
			schema: "public",
			timestamps: false,
			indexes: [
				{
					name: "incidents_pkey",
					unique: true,
					fields: [{ name: "id" }],
				},
			],
		}
	);
}
