export interface Appointment {
    id: bigint;
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
    message: string;
    timestamp: bigint;
}
export interface backendInterface {
    /**
     * Submit a new appointment booking
     */
    bookAppointment(name: string, dateOfBirth: string, timeOfBirth: string, placeOfBirth: string, message: string): Promise<bigint>;
    /**
     * Retrieve all appointment bookings
     */
    getAllAppointments(): Promise<Array<Appointment>>;
}
