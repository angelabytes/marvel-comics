# Marvel Characters and Comics Viewer

This application is a web app built with Vite that fetches Marvel character and comic from the Marvel API. 
Users can explore list of Marvel characters and comics.

---

## Features
- Fetch characters and comic data from the Marvel API
- Dynamic content loading 
- Responsive design

---

## Getting Started
### Requirements
- Node.js (v14 or higher)
- npm
- Vite


### Installation

1. Clone this repository.

```bash
    git clone https://github.com/angelabytes/marvel-comics.git
    cd marvel-comics
```

2. Install the dependencies
```bash
    npm install
```

3. Set up enviornment variables. Create a .env file in the root of the project and add the following:

```env
    VITE_PUBLIC_KEY = your_public_key
    VITE_PRIVATE_KEY = your_private_key
```
*API keys can be generated from the Marvel Developer Portal*

### Running the Application 
Run the application on the development server.

```bash
    npm run dev
```
---
## Tech stack

* Vite
* JavaScript
* HTML/CSS
* Fetch API
* Marvel API
* SparkMD5
