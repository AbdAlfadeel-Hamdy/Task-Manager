import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    maxLength: [20, 'name can not be more than 20 characters'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default model('Task', schema);
