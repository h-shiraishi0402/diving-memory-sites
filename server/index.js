const express = require('express')

const app = express()

//将来的にAWSなどに対応させたいために
const PORT = process.env.PORT || '3001'

app.get('/products'),
    function(req, res) {
        res.json({ 'success': false })
    }

app.listen(PORT, function() {
    console.log('I am running')

})