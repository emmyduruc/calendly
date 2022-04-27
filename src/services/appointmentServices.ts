import { AppointmentDocument} from "../models/appointments";


const createAppointment = async (appointmentDocument: AppointmentDocument) => {
  const createdAppointment = await appointmentDocument.save();
  return createdAppointment;
}

export default {
    createAppointment,
}