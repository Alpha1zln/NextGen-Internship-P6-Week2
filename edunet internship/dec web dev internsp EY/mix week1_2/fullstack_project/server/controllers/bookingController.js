// 



import Booking from '../models/Booking.js';
   
// Create a new booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);

  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({ success: true, message: 'Your tour is booked', data: savedBooking });
  } catch (err) {
    console.error('Error creating booking:', err.message);
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};

// Get a single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Booking found',
      data: booking,
    });
  } catch (err) {
    console.error('Error retrieving booking:', err.message);
    res.status(404).json({ success: false, message: 'Booking not found', error: err.message });
  }
};

// Get all bookings
export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find(); // Fixed: Removed undefined "id" reference
    res.status(200).json({
      success: true,
      message: 'Bookings found',
      data: bookings,
    });
  } catch (err) {
    console.error('Error retrieving bookings:', err.message);
    res.status(500).json({ success: false, message: 'Internal server error', error: err.message });
  }
};
