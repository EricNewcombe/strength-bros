module.exports = function(io) {

    io.on('connect', function (socket) {
        
        socket.on('event1', () => {
            console.log(`Event 1`);
        })

    });
    
}