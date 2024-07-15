# Magic Transporters

    Welcome to Magic Transporters, the future of moving things easily. These super cool transporters, powered by virtual magic, are here to make shipping stuff a breeze.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Overview

    In the world of Magic Transporters, there are special people known as Magic Movers. They use nifty gadgets to move important things. Fueled by virtual magic, these Movers go on quick missions to carry items around.

    A Magic Mover has:
    - Weight limit (the most they can carry);
    - Quest state (what they're currently doing: resting, loading, or on-mission).

    Each Magic Item they carry has:
    - Name (what it's called);
    - Weight (how much magic power it needs).

## Getting Started

### Prerequisites

    - Node.js
    - MongoDB

### Installation

1. Open the magic-transporters folder:

2. Install dependencies:

    npm install


3. Start the MongoDB server if it's not already running.


4. Start the application:

    npm start

5. Open Swagger:

    http://localhost:3000/api-docs/

## API Endpoints

### Magic Movers

- **Add a Magic Mover**
    POST /magic-movers
    {
    "name": "Mover Name",
    "weightLimit": 100
    }


### Magic Items

- **Add a Magic Item**
    POST /magic-items
    {
    "name": "Item Name",
    "weight": 10
    }


### Missions

- **Load a Magic Mover with Items**
    POST /missions/
    /load
    {
    "itemIds": ["itemId1", "itemId2"]
    }


- **Start a Mission**
    POST /missions/
    /start


- **End a Mission**
    POST /missions/
    /end


- **List Completed Missions**
    GET /missions/completed


## Technologies Used

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose

## Contributing

    Contributions are welcome! Please open an issue or submit a pull request.
