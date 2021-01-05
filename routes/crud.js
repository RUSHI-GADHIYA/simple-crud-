var express = require('express');
var router = express.Router();

var employee = require('../models/usermodel');

router.get('/:id', (req, res) => {

    var id = req.params.id;
    employee.findById(id, function (err, data) {
        res.json(data)
    });

})

router.post('/login', (req, res) => {

    // res.json(`hello ${req.params.id}`)
    // res.json(req.body.name)
    var { name, department, email, Date } = req.body;
    var newEmp = new employee();
    newEmp.name = name;
    newEmp.department = department;
    newEmp.email = email;
    newEmp.Date = Date;
    newEmp.save().then((result) => {
        res.json('added')
    }).catch((err) => {
        console.log(err)
    });;
    console.log(newEmp);
})

router.put('/update/:id', (req, res) => {
    // var id = req.params.id;
    // employee.findByIdAndUpdate(req.params.id, { name: req.body.name, department: req.body.department, email: req.body.email, date: req.body.date })
    // ,
    //  (err) => { if (!err) { console.log('data updated') } else { console.log(err.message) }})

    // console.log(req.params.id)

    employee.findByIdAndUpdate(req.params.id, req.body,
        function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                res.json('updated')
            }
        });
});

router.delete("/delete/:id", function (req, res) {
    employee.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log(err);

        }
        else {
            res.json('deleted');
        }
    });
});








module.exports = router;