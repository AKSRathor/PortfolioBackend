const express = require("express")
const router = express.Router()

const hireme = require("../Models/HireMe")


router.post("/hiresend", async (req, res) => {
    try {
        const { recName, recPesha, recCompany, jobOffering, anythingElse, recEmail, recPhone, greeting1, greeting2, date} = req.body
                
        const hiringMsg = new hireme({
            recName, recPesha, recCompany, jobOffering, anythingElse, recEmail, recPhone, greeting1, greeting2, date
        })
        const sentHire = await hiringMsg.save()
        res.json(sentHire)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Error")
    }
})



module.exports = router