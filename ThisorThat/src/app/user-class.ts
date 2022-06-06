export interface UserClass{
    user_id: {type: String, required: true, unique: true},
    age: Number,
    email: String,
    phone: String
}