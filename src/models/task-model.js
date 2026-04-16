import mongoose, { Schema } from 'mongoose';
import { MODELS } from './models.js';

// Schema (molde o plantilla)
const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        done: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: MODELS.USER,
        }
    },
    {
        timestamps: true,
    }
);


// Model (contenedor o generador)
export const Task = mongoose.models.Task || mongoose.model(MODELS.TASK, taskSchema);