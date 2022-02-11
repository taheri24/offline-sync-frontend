
/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {*} res 
 */
export default function handler(req, res) {    
    const body=req.body;
    res.status(body.success ? 200 :400).json({   message:`Fake Message for UI Testing`})
}
  