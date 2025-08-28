import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import fs from "fs";
import csv from "csv-parser";
import initModels from "./db/models/init-models.js";
import mapIncidents from "./db/scripts/mapIncidents.js";
import mapArrests from "./db/scripts/mapArrests.js";
import mapOffenses from "./db/scripts/mapOffenses.js";

const sequelize = new Sequelize({
	dialect: PostgresDialect,
	database: process.env.POSTGRES_DB,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	host: process.env.POSTGRES_DB_HOST,
	port: process.env.POSTGRES_PORT,
	clientMinMessages: "notice",
});

const models = initModels(sequelize);
const Incident = models.incidents;
const Arrest = models.arrests;
const Offense = models.offenses;

try {
	await sequelize.authenticate();

	console.log("Connection has been established successfully.");

	const incidents = [];
	fs.createReadStream(process.env.CSV_PATH_INCIDENTS)
		.pipe(csv())
		.on("data", (row) => {
			const formatted = mapIncidents(row);
			incidents.push(formatted);
		})
		.on("end", async () => {
			console.log("Inserting incidents");
			await Incident.bulkCreate(incidents);
			console.log("Incidents created successfully");
		})
		.on("error", (err) => {
			console.error("Error reading CSV:", err.message);
		});

	const arrests = [];
	fs.createReadStream(process.env.CSV_PATH_ARRESTS)
		.pipe(csv())
		.on("data", (row) => {
			const formatted = mapArrests(row);
			arrests.push(formatted);
		})
		.on("end", async () => {
			console.log("Inserting arrests");
			await Arrest.bulkCreate(arrests);
			console.log("Arrests created successfully");
		})
		.on("error", (err) => {
			console.error("Error reading CSV:", err.message);
		});

	const offenses = [];
	fs.createReadStream(process.env.CSV_PATH_OFFENSES)
		.pipe(csv())
		.on("data", (row) => {
			const formatted = mapOffenses(row);
			offenses.push(formatted);
		})
		.on("end", async () => {
			console.log("Inserting offenses");
			await Offense.bulkCreate(offenses);
			console.log("Offenses created successfully");
		})
		.on("error", (err) => {
			console.error("Error reading CSV:", err.message);
		});
} catch (error) {
	console.error("Unable to connect to the database:", error);
}
