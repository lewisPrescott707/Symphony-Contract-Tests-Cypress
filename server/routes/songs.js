const express = require('express');
const router = express.Router();

/**
 * @openapi
 * /songs/{artist}:
 *   get:
 *     description: songs by artist.
 *     parameters:
 *       - name: artist
 *         in: path
 *         description: Name of artist
 *         required: true
 *         schema:
 *           type: string
 *           default: ed-sheeran
 *     responses:
 *       200:
 *         description: Returns a list of songs.
 *         headers:
 *           Access-Control-Allow-Origin:
 *             schema:
 *               type: string
 *               default: "*"
 *             description: "*"
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
router.get('/songs/:artist', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const name = req.params.artist;
    if (name === "ed-sheeran" || name === "0" || name === 0) {
        return res.status(200).json([
            "Shape of you",
            "Perfect",
            "Thinking out loud"
        ]);
    } else {
        return res.status(200).json(["Artist not found"]);
    }
});

module.exports = router
