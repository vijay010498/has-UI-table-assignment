import express, { Request, Response} from 'express';
import { Student } from "../models/students";

const router  = express.Router();

router.get('/api/service/students',
    async (req: Request,res:Response) =>{
   const students = await Student.find({});

 //  console.log(students[0]);
   res.send(students);
});


export { router as serviceRouter }
