import cakes from '../models/Cake';
import { Request, Response } from 'express';

class CakesController {
    static getAllCakes = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await cakes.find({}));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static getCakeById = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await cakes.findById(req.params._id));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static insertNewCake = async (req: Request, res: Response) => {
        try {
            const newCake = new cakes(req.body);
            res.status(201).json(await newCake.save());
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static updateCake = async (req: Request, res: Response) => {
        try {
            res.status(201).json(await cakes.findByIdAndUpdate(req.params._id));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };

    static deleteCake = async (req: Request, res: Response) => {
        try {
            res.status(200).json(await cakes.findByIdAndDelete(req.params._id));
        } catch (err: any) {
            res.status(500).json({ message: err.message });
        }
    };
}

export default CakesController;
