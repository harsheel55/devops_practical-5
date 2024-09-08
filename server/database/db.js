import mongoose from "mongoose";
const DBConnection = async ()=>{
    try {
       await mongoose.connect('mongodb://localhost:27017',{useNewUrlParser : true})
        console.log('Databse connected');
    } catch (error) {
        console.error('Error while connecting with database',error.message);
    }
}

export default DBConnection;