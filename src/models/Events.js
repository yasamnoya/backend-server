module.exports = (sequelize, DataTypes) => {
	return sequelize.define('Events', {
		name: DataTypes.STRING,
		location: DataTypes.TEXT,
		description: DataTypes.TEXT,
		host: DataTypes.STRING,
		eventImage: DataTypes.TEXT,
		status: DataTypes.STRING,
		date: DataTypes.DATE,
		ownerId: DataTypes.INTEGER,
	});
};
