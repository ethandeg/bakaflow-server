const express = require("express");
const router = new express.Router();

router.get("/", (req: any, res: any ,next: any) => {
   return res.json({hello: 'world'});
})

module.exports = router;