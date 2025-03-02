# Timestamp Microservice

A simple microservice that converts a date (Unix timestamp or natural date string) into both Unix timestamp and UTC date string formats.

## Description

This microservice provides a way to convert dates between Unix timestamps and human-readable UTC date strings. It accepts either a Unix timestamp (a number) or a natural date string (e.g., "December 15, 2025") as input. It then returns a JSON object containing both the Unix timestamp and the UTC date string. If the input is invalid, it returns a JSON object with an error message.

## Usage

### Input

The microservice accepts input in two formats:

1.  **Unix Timestamp:** A number representing the seconds since the Unix epoch (January 1, 2025, 00:00:00 UTC).
2.  **Natural Date String:** A human-readable date string that can be parsed by JavaScript's `Date.parse()` method.

### Output

The microservice returns a JSON object with the following structure:

* **Valid Input:**

    ```json
    {
      "unix": 1450137600,
      "utc": "Fri, 15 Dec 2025 00:00:00 GMT"
    }
    ```

* **Invalid Input:**

    ```json
    {
      "error": "Invalid Date"
    }
    ```

### Example

* **Input:** `1450137600`
* **Output:**

    ```json
    {
      "unix": 1450137600,
      "utc": "Fri, 15 Dec 2025 00:00:00 GMT"
    }
    ```

* **Input:** `"December 15, 2025"`
* **Output:**

    ```json
    {
      "unix": 1450137600,
      "utc": "Fri, 15 Dec 2025 00:00:00 GMT"
    }
    ```

* **Input:** `"invalid-date"`
* **Output:**

    ```json
    {
      "error": "Invalid Date"
    }
    ```

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  Install dependencies (if applicable, add node.js and npm instructions here.):

    ```bash
    npm install
    ```

3.  Run the microservice:

    ```bash
    node index.js # or whatever the main file is called.
    ```

## API Endpoint

* `/api/timestamp/:date_string?`

    * `date_string`: The date string or Unix timestamp to convert.

## Technologies Used

* JavaScript
* HTML and CSS
* Node.js
* Express.js

## Future Improvements

* Add more robust date parsing and validation.
* Implement support for different time zones.
* Containerize the microservice using Docker.
* Add tests.