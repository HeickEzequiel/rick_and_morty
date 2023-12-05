const router = require ("express").Router()
const gerCharById = require ("../controllers/getCharById.js")
const { postFav, deleteFav } = require("../controllers/handleFavorites.js")
const login = require ("../controllers/login.js")

router.get("/character/:id", gerCharById)
router.get("/login", login)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router

