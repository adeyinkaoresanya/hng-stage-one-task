const express = require('express');
const server = require('./app');


const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})