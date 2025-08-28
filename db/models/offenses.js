export default function (sequelize, DataTypes) {
	return sequelize.define(
		"offenses",
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
			call_time: {
				type: DataTypes.DATEONLY,
				allowNull: true,
			},
			offense_name: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			offense_cat: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			vic_race: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			vic_gender: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			suspect_race: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			suspect_gender: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			bias: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			weapon_type: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			violent: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "offenses",
			schema: "public",
			timestamps: false,
			indexes: [
				{
					name: "offenses_pkey",
					unique: true,
					fields: [{ name: "id" }],
				},
			],
		}
	);
}
