import Sequelize from "sequelize";
import User from '../app/models/User.js';
import File from "../app/models/File.js";
import Appointments from "../app/models/Appointments.js";
import databaseConfig from '../config/database.js';

const models = [User, File, Appointments];

class Database{
    constructor(){
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
        .map( model => model.init(this.connection))
        .map( model => model.associate && model.associate(this.connection.models));
    } 
}

export default new Database();