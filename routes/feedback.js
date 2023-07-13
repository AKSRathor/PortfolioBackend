const express = require("express")
const router = express.Router()

const feedbackSection = require("../Models/FeedbackSection")


router.post("/feedsend", async (req, res) => {
    try {
        const { feedback, date} = req.body
                
        const feedMsg = new feedbackSection({
            feedback, date
        })
        const sentFeed = await feedMsg.save()
        res.json(sentFeed)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
})



module.exports = router