import {Model, DataTypes} from 'sequelize';
import {sequelize} from '../instances/pg';


export interface ApiUser extends Model {
    id_user: number;
    email: string;
    pass: string;
}

export const User = sequelize.define<ApiUser>('User',{

    id_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING
    },
    pass:{
        type: DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    }
    
},
{
    tableName:'users',
    timestamps: true

});
