# WebPulse

**WebPulse** is a website performance analysis tool that allows developers to test the speed of their websites locally. It provides detailed metrics such as **Time to First Byte (TTFB)**, page size, total page load time, and the number of requests made by the page. The tool uses **FastAPI** for the backend and **React with TypeScript** for the frontend.

## Features

- Analyze website performance metrics, including:
  - Time to First Byte (TTFB)
  - Page size
  - Load time
  - Number of requests
- Supports multiple browsers for testing: **Chrome**, **Firefox**, **Safari**, and **Edge**.
- User-friendly interface to input URLs and select browsers.
- Displays historical results for benchmarks.

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [Python 3.8+](https://www.python.org/downloads/) installed
- [Selenium WebDriver](https://www.selenium.dev/documentation/webdriver/getting_started/) for the browsers you want to test (Chrome, Firefox, Safari, Edge)

---

### Backend Setup

1. Create a virtual environment:
   ```bash
   python -m venv env
   
2. Activate the virtual environemnt
  - Windows:
    ```bash
    .\env\Scripts\activate
  - macOS/Linux:
    ```bash
    source env/bin/activate
    
3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt

4. Run the FASTAPI server:
   ```bash
   uvicorn app.main:app --reload
   
The backend server will be running at http://localhost:8000.

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   
2. Install the required npm packages:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

The frontend server will be running at http://localhost:3000.

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Enter the URL of the website you want to analyze.
3. Select the browser for testing.
4. Click on **Analyze Website** to start the analysis.
5. Benchmark the results to compare to later.
6. View the results and historical benchmarks on the dashboard.

---

## Contributing

Contributions are welcome! Here's how you can help:

- **Report Issues:** Open an issue for bugs, feature requests, or suggestions.
- **Submit Pull Requests:** Improve the code, documentation, or fix bugs.

---

Enjoy using **WebPulse** to analyze and optimize your website's performance!





