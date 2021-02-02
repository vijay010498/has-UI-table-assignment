import request from "supertest";
import { app } from "../../app";
import { Student } from "../../models/students";


const createStudent = async () =>{
    const name = "vijay";
    const scores = [{
        "score":1.44545454,
        "type":"exam"
    }];
    const student = Student.build({
        name: name, scores: [scores]
    });

    await student.save();

};

it('fetch all list of students', async () =>{
    await createStudent();
    await createStudent();

    const response = await request(app)
        .get('/api/service/students')
        .send()
        .expect(200);
    expect(response.body.length).toEqual(2);

});
