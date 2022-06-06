export interface UserClass{
    user_id: {type: String, required: true, unique: true},
    username: string,
    age: Number,
    email: String,
    phone: String,
    user_items: [{
        item_id:number,
    }]
}