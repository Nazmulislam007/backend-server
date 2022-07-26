const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   *  create new ticket
   * @param {string} username
   * @param {number} price
   * @returns {ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>} array of tickets
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  //   return all tickets
  find() {
    return this.tickets;
  }

  /**
   * find ticket by id
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );
    return ticket;
  }

  /**
   *
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   * update ticket
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }

  /**
   * delte ticket
   * @param {string} ticketId
   */
  deleteByID(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index != -1) {
      this.tickets.splice(index, 1); //splice = index is the position and 1 is the number of remove items. it can be 2, 3
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    // 50 min--
  }
}

const myDB = new MyDB();
module.exports = myDB;
