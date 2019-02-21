# politico-DB

[![Build Status](https://travis-ci.com/tatendamar/politico-DB.svg?branch=develop)](https://travis-ci.com/tatendamar/politico-DB)

[![Coverage Status](https://coveralls.io/repos/github/tatendamar/politico-DB/badge.svg?branch=develop)](https://coveralls.io/github/tatendamar/politico-DB?branch=develop)

[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/tatendamar/politico)

![](https://img.shields.io/david/dev/tatendamar/politico.svg?style=flat)

![](https://img.shields.io/npm/l/express.svg?style=flat)

# a political site

This project will address transparency issues during election periods,
It will allow users to vote for their candidates and allow the electoral body can register/create political parties and allow users to vote for their political candidate who belongs to a political office

## Getting Started

these instruction will get you up and running by on your local machine for development and testing.

### Prerequisites

You will nodejs your local machine to run this project locally also you should be familiar with github.

## Installation

clone this repo [github](https://github.com/tatendamar/politico) and
run `npm install`

Once successfully installed run `npm start`

## Testing

run `npm test` to run test on the endpoints

### Test Coverage

run `npm run coverage` to see the statistics

### API Endpoints

##### The expected endpoints output

###### Parties

[parties](https://blooming-island-55814.herokuapp.com/api/v1/parties)

```
POST /parties
```

```
{
    "status": 200,
    "data": [
        {
            "id": 3,
            "name": "addgggg",
            "email": "tatevf@hfhf.com",
            "address": "no 6 nelson mandela way",
            "city": "Cape Town",
            "logo": "https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png"
        }
    ]
}
```

```
GET /parties
```

```
{
    "party": {
        "status": 200,
        "data": [
            {
                "id": 1,
                "name": "New Poetr",
                "address": "no 6 nelson mandela way",
                "email": "tatevf@hfhf.com",
                "city": "Cape Town",
                "logo": "https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png"
            }
    }
}

```

```
GET /parties/:id
```

```
{
    "status": 200,
    "data": {
        "id": 1,
        "name": "New Poetr",
        "address": "no 6 nelson mandela way",
        "email": "tatevf@hfhf.com",
        "city": "Cape Town",
        "logo": "https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png"
    }
}
```

```
PUT /parties/:id
```

```
{
    "status": 200,
    "data": {
        "id": 1,
        "name": "addgggg",
        "address": "no 6 nelson mandela way",
        "email": "tatevf@hfhf.com",
        "city": "Cape Town",
        "logo": "https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png"
    }
}
```

```
DELETE /parties/:id
```

```
{
    "status": 200,
    "data": {
        "id": 1,
        "name": "addgggg",
        "address": "no 6 nelson mandela way",
        "email": "tatevf@hfhf.com",
        "city": "Cape Town",
        "logo": "https://pixabay.com/get/ea35b2072cf71c22d2524518b7444795ea76e5d004b014459cf1c17aaeebb2_340.png"
    }
}
```

##### Offices

[offices](https://blooming-island-55814.herokuapp.com/api/v1/offices)

```
GET /offices
```

```
{
    "office": {
        "status": 200,
        "data": [
            {
                "id": 1,
                "name": "member of parliament",
                "type": "House of representatives"
            },
            {
                "id": 2,
                "name": "Campaign Manager",
                "type": "Department of information"
            }
        ]
    }
}
```

```
GET /parties/:id
```

```
{
    "status": 200,
    "data": {
        "id": 1,
        "name": "member of parliament",
        "type": "House of representatives"
    }
}
```

```
POST /parties
```

```
{
    "status": 200,
    "data": [
        {
            "id": 3,
            "name": "no 6 nelson mandela way",
            "type": "tatevf@hfhf.com"
        }
    ]
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
