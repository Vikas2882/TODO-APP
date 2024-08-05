import mongoose from "mongoose"
export const connectDb =async ()=>{
// await mongoose.connect('mongodb+srv://srivastavdivyansh9:Divyansh123@cluster0.lrfi6rt.mongodb.net/ToDoApp')
await mongoose.connect('mongodb+srv://vk2882590:Vk%40MongoDB@cluster0.xlkhvgk.mongodb.net/todo-next_app')
console.log("db is connected");
}
