$ Week 2 changes ***

3-
Index.js file changed - 
mongodb connected - 
few user details registered  - added in mongodb compass
connected with server , after making changes in index.js of server folder

2-
Improvement in Tour Booking Logic:
Validate the tour availability (check if slots are open for selected dates).
Return user-friendly error messages if a booking fails.
File needed:
Booking.jsx (for managing booking logic).


3-
Changes in Backend Files: 
Booking Controller (bookingController.js):
Implement a POST route to handle booking data from the frontend.
Validate input data (e.g., bookAt, guestSize).
Check if slots for the tour are available for the selected date.
Save booking data to the database.
Send a response to confirm success or failure.

