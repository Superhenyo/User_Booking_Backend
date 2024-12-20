import { Request, Response } from "express";
import { createResource } from "../services/Resources";

export const handleCreateResource = async (req: Request, res: Response) => {
    try {
        const { resourceName, description } = req.body;

        if (!resourceName) {
            console.error("No data at controller")
            res.status(400).json({ message: "No found resource namd or resourceID" })
        }
        const result = await createResource({ resourceName, description })

        res.status(200).json({ result })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Unexpected error occur" })
    }
}