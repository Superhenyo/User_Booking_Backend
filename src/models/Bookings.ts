import { Table, Column, Model, DataType, AllowNull, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from "sequelize-typescript";
import Users from "./Users";
import Resources from "./Resources";


@Table({
    tableName: 'Bookings',
    timestamps: true
})

class Bookings extends Model {

    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare bookingID: number

    @ForeignKey(() => Resources)
    @AllowNull(false)
    @Column({
        type: DataType.INTEGER
    })
    declare resourceID: number

    @AllowNull(false)
    @Column({
        type: DataType.DATE
    })
    declare startTime: Date

    @AllowNull(false)
    @Column({
        type: DataType.DATE
    })
    declare endTime: Date

    @ForeignKey(() => Users)
    @AllowNull(false)
    @Column({
        type: DataType.STRING(255)
    })
    declare userID: string

    @BelongsTo(() => Resources)
    resource!: Resources;

    @BelongsTo(() => Users)
    user!: Users;
}

export default Bookings