import mongoose from 'mongoose';

const UserDetailsSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
    packingItems: [String],
    expenseItems: [{
      expenseItem : String, 
      price : Number, 
      date : Date,
    }],
    expenseTotal: Number,
    agendaItems: [{
      agendaItem : String,
      startDate : Date,
      endDate: Date,
    }]
    
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", UserDetailsSchema);

export default UserDetailsSchema;