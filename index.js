const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const expressSession = require('express-session')
const flash = require('connect-flash')

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:1234@cluster0.fdip7yu.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

global.loggedIn = null

// Controllers
const indexController = require('./controllers/indexController')
const aboutController = require('./controllers/aboutController')
const loginController = require('./controllers/loginController')
const registerController = require('./controllers/registerController')
const storeUserController = require('./controllers/storeUserController')
const loginUserController = require('./controllers/loginUserController')
const logoutController = require('./controllers/logoutController')
const roomsController = require('./controllers/roomsController')
const paymentController = require('./controllers/paymentController')
const bookingController = require('./controllers/bookingController')
const confirmPaymentController = require('./controllers/confirmPaymentController')
const accountController = require('./controllers/accountController')
const updateUserDataController = require('./controllers/updateUserDataController')

// Controllers as Admin
const indexAdminController = require('./controllers/indexAdminController')
const aboutAdminController = require('./controllers/aboutAdminController')
const roomsAdminController = require('./controllers/roomsAdminController')
const paymentAdminController = require('./controllers/paymentAdminController')
const addroomController = require('./controllers/addroomController')
const deleteroomController = require('./controllers/deleteroomController')
const storeRoomsController = require('./controllers/storeRoomsController')
const changeStatusController = require('./controllers/changeStatusController')

// Middlewares
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')
const isAdmin = require('./middleware/isAdmin')
const editroomController = require('./controllers/editroomController')
const updateController = require('./controllers/updateController')
const reservationManageController = require('./controllers/reservationManageController')


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(flash())
app.use(expressSession({ secret: "node secret" }))
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})
app.set('view engine', 'ejs')


app.get('/', indexController)
app.get('/about', aboutController)
app.get('/login', redirectIfAuth, loginController)
app.get('/register', redirectIfAuth, registerController)
app.post('/user/register', redirectIfAuth, storeUserController)
app.post('/user/login', redirectIfAuth, loginUserController)
app.get('/logout', logoutController)
app.get('/rooms', authMiddleware, roomsController)
app.get('/payment/:id', authMiddleware, paymentController)
app.post('/payment/confirm', authMiddleware, confirmPaymentController)
app.get('/booking/:id', authMiddleware, bookingController)
app.get('/account', authMiddleware, accountController)
app.post('/account/:id', authMiddleware, updateUserDataController)


app.get('/admin', authMiddleware, isAdmin, indexAdminController)
app.get('/admin/about', authMiddleware, isAdmin, aboutAdminController)
app.get('/admin/rooms', authMiddleware, isAdmin, roomsAdminController)
app.get('/addroom', authMiddleware, isAdmin, addroomController)
app.post('/room/add', authMiddleware, isAdmin, storeRoomsController)
app.get('/room/update/:id', authMiddleware, isAdmin, editroomController)
app.post('/room/update/:id', authMiddleware, isAdmin, updateController)
app.get('/room/delete/:id', authMiddleware, isAdmin, deleteroomController)
app.get('/admin/payment', authMiddleware, isAdmin, paymentAdminController)
app.get('/admin/reservation', authMiddleware, isAdmin, reservationManageController)
app.post('/admin/reservation/status/:id', authMiddleware, isAdmin, changeStatusController)


app.listen(4000, () => {
    console.log("App listening on port 4000")
})