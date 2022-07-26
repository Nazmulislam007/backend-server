const router = require("express").Router();
const myDB = require("../db/db");

router
  .route("/t/:ticketId")
  .get((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = myDB.findById(ticketId);
    res.status(200).json(ticket);
  })
  .patch((req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = myDB.updateById(ticketId, req.body);
    res.status(200).json({ message: "Update Successfully", ticket });
  })
  .delete((req, res) => {
    const ticketId = req.params.ticketId;
    myDB.deleteByID(ticketId);
    res.status(203).send("Delete Successfully");
  });

router.route("/u/:username").get((req, res) => {
  const username = req.params.username;
  const ticket = myDB.findByUsername(username);
  res.status(200).json(ticket);
});
//   .patch((req, res) => {})
//   .delete((req, res) => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = myDB.create(username, price);
  res.status(201).json({ message: "Ticket Created Successfully", ticket });
});

router.post("/bulk", (req, res) => {
  const { username, price, quantity } = req.body;
  const tickets = myDB.bulkCreate(username, price, quantity);
  res
    .status(201)
    .json({ message: "Bulk Tickets Created Successfully", tickets });
});

router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = myDB.draw(winnerCount);
  res.status(200).json({ message: "Draw Result", winners });
});

router.get("", (_req, res) => {
  const tickets = myDB.find();
  res.status(200).json(tickets);
});

module.exports = router;
