const router = require('express').Router();

const { getHomepage } = require('../controllers/AppController');
const { getAllStudents, getAllStudentsByMajor } = require('../controllers/StudentsController');

router.get('/', (req, res) => {
  getHomepage(req, res);
});

router.get('/students', (req, res) => {
  getAllStudents(req, res);
});

router.get('/students/:major', (req, res) => {
  getAllStudentsByMajor(req, res);
});

module.exports = router;
