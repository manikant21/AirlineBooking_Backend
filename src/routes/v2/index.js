import express from 'express';

const router = express.Router();

router.get("/info", (req,res) => {
    return res.json({msg: "response from v2"});
})

export {router};