# Lottery API

- sell lottery ticket
- update lottery ticket
- delete lottery ticket
- get all ticket
- get ticket by id
- bulk buy (user can buy multiple ticket at a time);
- raffle draw

# Ticket:

- number (unique)
- username
- price
- date
- timestamp

# Routes

- /tickets/t/:ticketId GET find by id
- /tickets/t/:ticketId PATCH update ticket by id
- /tickets/t/:ticketId DELETE delelte ticket by id

- /tickets/u/:username GET find ticket for a user
- /tickets/u/:username PATCH update tickets for a user
- /tickets/u/:username DELETE delete all ticket for a user

- /tickets/sell - create tickets
- /tickets/bulk - bulk sell ticket
- /tickets/draw - draw

- /tickets - find all tickets
