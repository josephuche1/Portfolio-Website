import { InferSchemaType, Schema, model } from "mongoose";

// Define the schema for the project collection
const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    technologies: {
        type: [String],
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    link: {
        type: String,
        required: true
    }
});

export type TProject = InferSchemaType<typeof projectSchema>;

export default model<TProject>('Project', projectSchema); // Export the model for the project collection