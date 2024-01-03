const express=require('express');
const newtask = require('../controllers/createtask');
const updatetask = require('../controllers/updatetask');
const deltask = require('../controllers/deletetask');
const getall = require('../controllers/getall');
const getone = require('../controllers/getone');



const router=express.Router();

router.route('/newtask').post(newtask);
router.route('/updatetask/:id').put(updatetask);
router.route('/deletetask/:id').delete(deltask);
router.route('/getall').get(getall)
router.route('/getone/:id').get(getone)

module.exports=router;

