import { Table, Column, Model, DataType, AllowNull, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: 'Resources',
    timestamps: false
})

class Resources extends Model {

    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare resourceID: number;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(255)
    })
    declare resourceName: string;

    @Column({
        type: DataType.TEXT
    })
    declare description: string
}

export default Resources;