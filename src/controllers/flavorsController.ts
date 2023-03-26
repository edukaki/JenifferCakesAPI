import flavors from '../models/Flavor';
import { Request, Response } from 'express';

class FlavorsController {
    static getAllFlavors = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await flavors.find({}));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };
    static getFlavorById = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await flavors.findById(req.params._id));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static insertNewFlavor = async (req: Request, res: Response) => {
        try {
            const newFlavor = new flavors(req.body);
            res.status(201).json(await newFlavor.save());
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static updateFlavor = async (req: Request, res: Response) => {
        try {
            res.status(201).json(
                await flavors.findByIdAndUpdate(req.params._id),
            );
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static deleteFlavor = async (req: Request, res: Response) => {
        try {
            res.status(200).json(
                await flavors.findByIdAndDelete(req.params._id),
            );
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };
}
export default FlavorsController;
