const router = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dasboard-routes.js');

// gets all the routers for the API, homepage, and dashboard 
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

// route for any resource that does not exist 
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router; 
