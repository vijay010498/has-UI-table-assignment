import mongoose from "mongoose";
interface StudentAttrs{
    first_name: string,
    last_name: string,
    company_name: string,
    address: string,
    state: string,
    post: number,
    city: string,
    phone1: string,
    phone2: string,
    email:string,
    web:string
}

interface StudentDoc extends mongoose.Document{
    first_name: string,
    last_name: string,
    company_name: string,
    address: string,
    state: string,
    post: number,
    city: string,
    phone1: string,
    phone2: string,
    email:string,
    web:string
}

interface StudentModel extends mongoose.Model<StudentDoc>{
    build(attrs: StudentAttrs) : StudentDoc;
}

const StudentSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    company_name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    post:{
        type: Number,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phone1:{
        type: String,
        required: true
    },
    phone2:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    web:{
        type: String,
        required: true
    },
},{
   toJSON:{
       transform(doc, ret){
           ret.id = ret._id;
           delete ret._id;
       }
   }
});

StudentSchema.statics.build = (attr: StudentAttrs) =>{
    return new Student(attr);
}

const Student = mongoose.model<StudentDoc, StudentModel>('Student', StudentSchema);

export  { Student };
