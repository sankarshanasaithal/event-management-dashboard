const express = require("express");
const router = express.Router();
const attendeeController = require("../controllers/attendeeController");

router.get("/", attendeeController.getAttendees);
router.post("/", attendeeController.addAttendee);
router.delete("/:id", attendeeController.deleteAttendee);
router.put("/:id", attendeeController.updateAttendee);

module.exports = router;