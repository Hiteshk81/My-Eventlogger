### Event Logger using Node.js

This project demonstrates a simple event logging system using Node.js. It uses the events module to create custom event emitters and logs messages to a text file (eventlog.txt). Additionally, it monitors system memory usage at regular intervals.

## Features

Custom event emitter for logging messages.

Logs application events to a file.

Monitors memory usage and logs the data.

Efficient and lightweight using core Node.js modules.

## Prerequisites

Ensure you have the following installed:

Node.js (v16 or higher)

## Usage

Start the application:

node logger.js

The application will log memory usage and other messages to eventlog.txt every 3 seconds.

## Project Structure

repo-name/
├── logger.js
├── eventlog.txt
└── README.md

## Example Output (eventlog.txt)

2025-03-22T12:00:00.000Z - Application started
2025-03-22T12:00:01.000Z - Application event occured
2025-03-22T12:00:04.000Z - Current Memory Usage: 45.23

## Explanation

Event Logger Class: Custom class extending EventEmitter to create and log events.

logtofile Function: Appends messages with timestamps to eventlog.txt.

Memory Monitoring: Logs system memory usage using os.freemem() and os.totalmem().

Error Handling: Automatically handled using built-in fs.appendFileSync.
