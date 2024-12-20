import Bookings from "../models/Bookings";

export const getAllBookingByPage = async (page: number = 1) => {

    const pageLimit = 10
    const currentPage = page ?? 1
    const offset = (currentPage - 1) * pageLimit


    const { rows: bookings, count: totalItems } = await Bookings.findAndCountAll({
        limit: pageLimit,
        offset
    })

    const totalPages = Math.ceil(totalItems / pageLimit);

    return { bookings, totalPages }
}

export const createBooking = async (bookingData: {
    resourceID: number,
    startTime: Date,
    endTime: Date,
    userID: string
}) => {
    try {
        const {resourceID, startTime, endTime, userID } =  bookingData
        const newBooking = new Bookings({
            resourceID, 
            startTime,
            endTime,
            userID
        });

        await newBooking.save();
    } catch (err) {
        console.error("Error in service Booking", err)
        throw err
    }

}

// export const createBooking = async ()