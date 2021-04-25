const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  updatePersonWithId,
  deletePersonWithId,
} = require("../controllers/people");

// 1st Way---

// READ | CREATE | UPDATE | DELETE
// router.get("/", getPeople);
// router.post("/", createPerson);
// router.put("/:id", updatePersonWithId);
// router.delete("/:id", deletePersonWithId);

// 2nd Way---
router.route("/").get(getPeople).post(createPerson);
router.route("/:id").put(updatePersonWithId).delete(deletePersonWithId);

module.exports = router;
