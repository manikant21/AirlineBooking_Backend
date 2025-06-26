import winston from "winston";

const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

const myCustomFormat =  printf(({ level, message, timestamp }) => {
  return `${timestamp}: ${level}: ${message}`;
});


const logger = createLogger({
      format: combine(
    timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
    myCustomFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({filename: 'combined.log'})
]

})

export {logger};

