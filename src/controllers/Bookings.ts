import { Request, Response } from "express";
import { getAllBookingByPage, createBooking } from "../services/Bookings"

export const handleAllBookingByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        // Extract `pageNumber` from `req.body` and default to 1 if it’s missing or invalid
        const pageNumber = Number(req.body.pageNumber) || 1;

        if (pageNumber < 1) {
            res.status(400).json({ message: "Page number must be 1 or greater" });
            return
        }

        const allBookingByPage = await getAllBookingByPage(pageNumber);

        res.status(200).json({ allBookingByPage });
        return;
    } catch (err) {
        console.error("Error at booking controller:", err);
        res.status(500).json({ message: "Error" });
        return;
    }
};
export const handleNewBooking = async (req: Request, res: Response): Promise<void> => {
    const { resourceID, startTime, endTime, userID } = req.body

    if (!resourceID || !startTime || !endTime || !userID) {
        res.status(400).json({ message: "Incomplete data" })
        return;
    }

    try {
        await createBooking({
            resourceID,
            startTime,
            endTime,
            userID
        })

        res.status(200).json({ message: "Booking Successful" });
        
    } catch (err) {
        console.error("Error at controller booking", err)
        res.status(500).json({ message: "Unexpected Error" })
        return;
    }
}
