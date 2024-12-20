import express from 'express'
import { handleAllBookingByPage, handleNewBooking } from "../controllers/Bookings";

const BookingRouter = express.Router()

BookingRouter.post("/allBookings", handleAllBookingByPage)

BookingRouter.post("/new", handleNewBooking)


export default BookingRouter;