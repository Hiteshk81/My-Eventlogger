const fs = require('fs')
const os = require('os')

const eventemmiters = require('events')

class eventlogger extends eventemmiters{
    log(message){
      this.emit('message',{message})
    }
}

const logger = new eventlogger()
const file = './eventlog.txt'

const logtofile = (event) => {
  const logmessage = `${new Date().toISOString()} - ${event.message}\n`;
  fs.appendFileSync(file, logmessage)
}

logger.on('message',logtofile);

setInterval (() => {
  const memusage = (os.freemem() / os.totalmem())*100;
  logger.log(`Current Memory Usage : ${memusage.toFixed(2)}`) 
},3000)

logger.log('Application started')
logger.log('Application event occured')