const express=require('express');
const activitiescontroller = require('../controllers/activitiescontroller');

const router=express.Router();

router.route('/activity/:itinerary_id')
    .get(activitiescontroller.listActivities)
    .post(activitiescontroller.loadActivity);

router.route('/activity/:id')
    .delete(activitiescontroller.deleteActivity)
    .put(activitiescontroller.updateActivity);

module.exports=router;