import Resources from "../models/Resources";

export const createResource = async (resourceData: { resourceName: string, description: Text }) => {
    try {
        const { description, resourceName } = resourceData;

        const newResource = new Resources({
            resourceName,
            description
        })

        await newResource.save()
        return "Successful"
    } catch (error) {
        console.error(error)
        return "Unsuccessful"

    }
}