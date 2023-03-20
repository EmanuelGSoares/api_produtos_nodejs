const ProductController = require('./app/controllers/ProductController.js') ;

const Router = require('express');
const router = Router();

router.listen(3000, () => {
    console.log('listening on', 3000);
})


router.get('/produtos',ProductController.index);


router.get('/produtos/:id', (req, res) => {

})

router.post('/produtos', (req, res) => {

})

router.delete('/delete/:id', (req, res) => { 

})

router.put('/produtos/:id', (req, res) => { 

})

module.exports = router;
