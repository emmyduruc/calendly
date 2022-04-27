import mongoose, { Document } from "mongoose";

export type AppointmentDocument = Document & {
  appointmentDate: string;
  appointmentTime: string;
  appointmentLocation: string;
  appointmentDescription: string;
  name: string;
  email: string;
};

const AppointmentSchema = new mongoose.Schema(
  {
    appointmentDate: {
      type: String,
    },
    appointmentTime: {
      type: String,
    },
    appointmentLocation: {
      type: String,
    },
    appointmentDescription: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
        type: String,
    }
  },
  { timestamps: true }
);

export default mongoose.model<AppointmentDocument>("Appointments", AppointmentSchema);

