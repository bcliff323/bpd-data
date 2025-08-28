export default function (sequelize, DataTypes) {
	return sequelize.define(
		"arrests",
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
			arrest_date: {
				type: DataTypes.DATEONLY,
				allowNull: true,
			},
			gender: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			race: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			age: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			charge: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			most_serious: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			ethnicity: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			felony: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			violent: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			category: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			arrest_type: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_1: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_2: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_3: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_4: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_5: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_6: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_7: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
			addl_charge_8: {
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: "arrests",
			schema: "public",
			timestamps: false,
			indexes: [
				{
					name: "arrests_pkey",
					unique: true,
					fields: [{ name: "id" }],
				},
			],
		}
	);
}
