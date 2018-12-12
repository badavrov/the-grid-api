### Installation

Clone the Project.

Notice the "." (dot) that means - current directory and {user} will have to be changed with your username

```sh
$ git clone https://{user}@bitbucket.org/3web/my-game-collection-api.git .
```


Now install all dependencies

```sh
$ npm install
```


### Start the server

```
$ node index.js
$ nodemon

server starting on localhost:3000
```



# API

***
| Title | Login User |
| --- | --- |
| **URL** | /login|
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
 name: <string>,
 email: <string>,
 password: <string>
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiI1YTY5ZjcyNjRhYjI5ZDA4ZjQ3NTAyM2MiLCJpYXQiOjE1MTcyMzU4MDJ9.dnRgJzlOL4Zzv-ZPf98yUhsS0RLLA9XEkfdwus8esRU",
    "user": {
        "_id": "5a69f7264ab29d08f475023c",
        "userCreated": "2018-01-25 17:26:30",
        "password": "5e086bf38ca29593abcf95ae3a0a4015dec6aca96d034197339d86945a239049b66f8e00410aa4c06443d2d9efe8bda6c92b87ffecf88fa180af01b809143c5d",
        "email": "uvan@he.gei",
        "name": "uvan",
        "__v": 1,
        "userModified": "2018-01-25 17:31:00",
        "deleted": false,
        "platforms": [
            "5a65f4d125e3a105df3c10e5"
        ],
        "games": []
    }
}
```

***
| Title | Register User |
| --- | --- |
| **URL** | /users|
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
 name: <string>,
 email: <string>,
 password: <string>
```



**Success Response**: **Code**: 200


**Response Example:**

```
{
    "__v": 0,
    "userCreated": "2017-10-06 11:57:32",
    "type": "admin",
    "role": [],
    "currency": "euro",
    "password": "e2fe4f085f8e77bdf6736fed2c006e94bf5083ba7f3b196b4daa21c445d381e4ef5e5899536e754042ef2877ea58d08f4637d3de67766aea743e6f180ebf0ffb",
    "userName": "username test",
    "email": "admin@adm.adm",
    "last_name": "last name test",
    "first_name": "first name test",
    "_id": "59d7457ca009ef21ceb6b924",
    "deleted": false
}
```


| Notes |
| --- |
| Password length must be at least **5** symbols, param 'deleted' is auto generated and false by default. **When admin is registerd his type of user will be set to 'admin'** |

###Users

***
| Title | Get all Users |
| --- | --- |
| **URL** | /users|
| **Method** | GET |
| **Autharization** | Bearer User TOKEN |



**Success Response**: **Code**: 200


**Response Example:**

```
[
    {
        "_id": "5a5de56532fe1804bbd70486",
        "userCreated": "2018-01-16 13:43:33",
        "password": "petio",
        "email": "petio@pet.io",
        "name": "petio",
        "__v": 0,
        "deleted": false,
        "platforms": [],
        "games": []
    },
    {
        "_id": "5a5e011622d81106b9735818",
        "userCreated": "2018-01-16 15:41:42",
        "password": "8dfb37207e4b06ca3ef57e5e111ee161716c4328e592a12a445f96215dd1a43e99652d64f33cd956b3d02344b3d1901e645b9e045e98e43e9c860ffb4cbb9d67",
        "country": "turkia",
        "age": 12,
        "email": "cece@oo.bg",
        "name": "vankata",
        "__v": 0,
        "deleted": false,
        "platforms": [],
        "games": []
    }
]
```

***
| Title | Delete User |
| --- | --- |
| **URL** | /users|
| **Method** | POST |
| **URL Params** | none |
| **Autharization** | Needed user token |

**Data Params:**

```
Required:
 id: <string>
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "_id": "5a68902646a99a055bee9c11",
    "userCreated": "2018-01-24 15:54:46",
    "password": "0e2cf2f822755e5cb9ea82c3c78c6a88cfed898a05e8a79fda28674139a97c963728b825008b087edaba37368f7f71d16acd179e1324bc8ed7cfba0c2d5b0507",
    "email": "bdada@he.com",
    "name": "bebada",
    "__v": 0,
    "deleted": true,
    "platforms": [],
    "games": []
}
```

***
| Title | Update User |
| --- | --- |
| **URL** | /users|
| **Method** | PUT |
| **URL Params** | none |
| **Autharization** | Needed user token |

**Data Params:**

```
Required:
	id:"5a69f7264ab29d08f475023c"
```


```
You can only update the user that you are loged in with.
```

**Success Response**: **Code**: 200


**Response Example:**

```
{
    "_id": "5a69f7264ab29d08f475023c",
    "userCreated": "2018-01-25 17:26:30",
    "password": "5e086bf38ca29593abcf95ae3a0a4015dec6aca96d034197339d86945a239049b66f8e00410aa4c06443d2d9efe8bda6c92b87ffecf88fa180af01b809143c5d",
    "email": "uvan@he.com",
    "name": "uvan",
    "__v": 1,
    "userModified": "2018-01-29 16:32:49",
    "deleted": false,
    "platforms": [
        "5a65f4d125e3a105df3c10e5"
    ],
    "games": []
}
```


###Categories
***

| Title | Get Categories |
| --- | --- |
| **URL** | /categories|
| **Method** | GET |
| **URL Params** | none |

**Data Params:**

```
Required:
	None
```


**Success Response**: **Code**: 200


**Response Example:**

```
[
    {
        "_id": "5a69d00b4a66aa0416b8a4db",
        "catCreated": "2018-01-25 14:39:39",
        "name": "Action",
        "__v": 0,
        "deleted": false
    },
    {
        "_id": "5a69f14b5c4d4608734b001b",
        "catCreated": "2018-01-25 17:01:31",
        "name": "RPG22",
        "__v": 0,
        "deleted": false
    }
]
```
***

| Title | ADD Categories |
| --- | --- |
| **URL** | /categories|
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
	name:<string>
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "__v": 0,
    "catCreated": "2018-01-29 16:35:38",
    "name": "Arcade",
    "_id": "5a6f313a9d645b051e77e1ed",
    "deleted": false
}
```

***
| Title | Delete Categories |
| --- | --- |
| **URL** | /categories|
| **Method** | DELETE |
| **URL Params** | none |

**Data Params:**

```
Required:
	id:<_id>
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "_id": "5a69ceed912b5603e568c643",
    "catCreated": "2018-01-25 14:34:53",
    "name": "Action",
    "__v": 0,
    "deleted": true
}
```

### Platforms

***
| Title | Create Platforms |
| --- | --- |
| **URL** | /platforms|
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
	name:<STRING>
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "__v": 0,
    "platformCreated": "2018-01-31 14:23:15",
    "name": "PS1",
    "_id": "5a71b533b2368a033888188c",
    "deleted": false
}
```


***
| Title | Get Platforms |
| --- | --- |
| **URL** | /platforms|
| **Method** | GET |
| **URL Params** | none |

**Data Params:**

```
Required:
```


**Success Response**: **Code**: 200


**Response Example:**

```
[
    {
        "_id": "5a65f4d125e3a105df3c10e5",
        "platformCreated": "2018-01-22 16:27:29",
        "name": "PC",
        "__v": 0,
        "deleted": false
    },
    {
        "_id": "5a65f5b28585c305f08fff83",
        "platformCreated": "2018-01-22 16:31:14",
        "name": "bara",
        "__v": 0,
        "platformModified": "2018-01-25 16:34:55",
        "deleted": false
    }
]
```


***
| Title | DELETE Platforms |
| --- | --- |
| **URL** | /categories|
| **Method** | DELETE |
| **URL Params** | none |

**Data Params:**

```
Required:
	id:<_id>
```


**Success Response**: **Code**: 200


**Response Example:**

```
[
    {
    "_id": "5a65f4486d209805cc63b14d",
    "platformCreated": "2018-01-22 16:25:12",
    "name": "PC",
    "__v": 0,
    "deleted": true
}
]
```


***
| Title | Update Platforms |
| --- | --- |
| **URL** | /categories|
| **Method** | PUT |
| **URL Params** | none |

**Data Params:**

```
Required:
	id:<_id>
    the_field_you_want_to_edit
```


**Success Response**: **Code**: 200


**Response Example:**

```
[
    {
    "_id": "5a65f5b28585c305f08fff83",
    "platformCreated": "2018-01-22 16:31:14",
    "name": "Platforma200",
    "__v": 0,
    "platformModified": "2018-01-31 14:26:20",
    "deleted": false
}
]
```

### GAMES

***
| Title | GET games |
| --- | --- |
| **URL** | /games|
| **Method** | GET |
| **URL Params** | none |


**Success Response**: **Code**: 200


**Response Example:**

```
[
    [
    {
        "_id": "5a65dece8ac261042111ec88",
        "gameCreated": "2018-01-22 14:53:34",
        "summary": "Cok guzel",
        "name": "Super Mario",
        "__v": 3,
        "gameModified": "2018-01-25 16:52:39",
        "deleted": false,
        "platform": [],
        "category": [],
        "keywords": [
            "prince, persia"
        ]
]
```


***
| Title | Create games |
| --- | --- |
| **URL** | /games|
| **Method** | POST |
| **URL Params** | none |

**Data Params:**

```
Required:
	"name":"Prince of persia",
	"summary":"Cok guzel",
	"keywords":["prince","persia"],
	"category":["id"],
	"platform":["id"]
```


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "__v": 0,
    "gameCreated": "2018-01-31 14:33:52",
    "summary": "very good game",
    "name": "Caribean pirates of persia",
    "_id": "5a71b7b0b2368a033888188f",
    "deleted": false,
    "platform": [
        "5a6885054fa774031bb04a77"
    ],
    "category": [
        "5a69d00b4a66aa0416b8a4db"
    ],
    "keywords": [
        "prince",
        "persia"
    ]
}
```

***
| Title | Delete games |
| --- | --- |
| **URL** | /games|
| **Method** | DELETE |
| **URL Params** | none |

**Data Params:**

```
Required:
    id:<id>
```


**Success Response**: **Code**: 200


**Response Example:**

```
    "deleted":"true"
```

***

**SEARCH ENGINE**

```
    getting information by igdb api
```

| Title | Search platforms |
| --- | --- |
| **URL** | /platform/:keyword|
| **Method** | GET |
| **URL Params** | keyword |


**Success Response**: **Code**: 200


**Response Example:**

```
    {
    "body": [
        {
            "id": 6,
            "name": "PC (Microsoft Windows)",
            "logo": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/e9w12ei09dljpsiwz7pv.jpg",
                "cloudinary_id": "e9w12ei09dljpsiwz7pv",
                "width": 2000,
                "height": 358
            },
            "url": "https://www.igdb.com/platforms/win",
            "website": "http://windows.microsoft.com/",
            "alternative_name": "mswin",
            "games": [
                1059,.......
```

***
| Title | Search platforms |
| --- | --- |
| **URL** | /genres|
| **Method** | GET |
| **URL Params** | none |


**Success Response**: **Code**: 200


**Response Example:**

```
    {
    "body": [
        {
            "id": 13,
            "name": "Simulator",
            "url": "https://www.igdb.com/genres/simulator",
            "games": [
                27,
                208,
```

***
| Title | Search keywords |
| --- | --- |
| **URL** | /keywords|
| **Method** | GET |
| **URL Params** | none |


**Success Response**: **Code**: 200


**Response Example:**

```{
    "body": [
        {
            "id": 4318,
            "name": "biplane",
            "url": "https://www.igdb.com/categories/biplane",
            "games": [
                56452,
                6961,
                1644,
                61827,
                9765,
                61776,
                11736
            ]
        },.....
``` 

***
| Title | Search games |
| --- | --- |
| **URL** | /games/:keyword|
| **Method** | GET |
| **URL Params** | keywords"example: prince" |


**Success Response**: **Code**: 200


**Response Example:**

```{
    "body": [
        {
            "id": 79840,
            "name": "2 Games In 1: Disney's Brother Bear + Disney Princess",
            "url": "https://www.igdb.com/games/2-games-in-1-disneys-brother-bear-plus-disney-princess",
            "summary": "A compilation of two Disney themed games on a single cartridge.",
            "popularity": 1,
            "category": 0,
            "keywords": [
                960,
                1563,
                4142,
                4239,
                4382
            ],
            "themes": [
                1
            ],
            "cover": {
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/o6owk5ycxqtgr4oxidwi.jpg",
                "cloudinary_id": "o6owk5ycxqtgr4oxidwi",
                "width": 500,
                "height": 500
            }
        },
        {
            "id": 86045,
            "name": "2 Games in 1: Disney Princess + Disney's The Lion King",
            "url": "https://www.igdb.com/games/2-games-in-1-disney-princess-plus-disneys-the-lion-king",
            "popularity": 1,
            "category": 0
        },
``` 

***
| Title | Search games |
| --- | --- |
| **URL** | /games/byid/:ids|
| **Method** | GET |
| **URL Params** | id "example: 1" |


**Success Response**: **Code**: 200


**Response Example:**

```
{
    "body": [
        {
            "id": 1,
            "name": "Thief II: The Metal Age",
            "url": "https://www.igdb.com/games/thief-ii-the-metal-age",
            "summary": "The ultimate thief is back! Tread softly as you make your way through 15 new complex, non-linear levels full of loot to steal and guards to outsmart. Improved enemy AI, new gadgets and a riveting story will draw you into the world of Thief II: The Metal Age, a place of powerful new technologies, fanatical religions and corruption.",
            "storyline": "The game begins as Garrett continues his life as a thief. However, he is betrayed by his fence and ambushed after an early mission, and he determines that Truart, the local sheriff, is hunting him. Keepers take Garrett to hear a prophecy about the \"Metal Age\", which he ignores. As Garrett leaves, one of the Keepers informs him that Truart had been hired to kill him, and he gives Garrett a letter that directs him to eavesdrop on a Mechanist meeting. There, Garrett overhears Truart and Father Karras discussing the conversion of street people into mindless \"Servants\", who wear masks that emit a red vapor capable of reducing themselves and nearby humans to rust. Truart promises to provide Karras with twenty victims for the Servant project, not realizing that Karras is recording his words for use in blackmail. Garrett steals the recording from a safe deposit box, in order to coerce Truart into revealing his employer. \n \nHowever, Garrett finds Truart murdered at his estate. Evidence at the crime scene leads him to spy on the police officer Lt. Mosley. Garrett sees Mosley deliver a suspicious letter, which is carried through a portal by a wounded pagan. Garrett enters the portal and finds himself outside the City, and he follows the pagan's trail of blood to Viktoria, who persuades Garrett to join her against the Mechanists. On a lead from Viktoria, he infiltrates Karras' office to learn about the \"Cetus Project\",[31] and inadvertently discovers that Karras is giving Servants to the City's nobles. Garrett travels to a Mechanist base to find out more about the Cetus Project, which is revealed to be a submarine. In order to locate and kidnap a high-ranking Mechanist named Brother Cavador, Garrett stows away in the vehicle. \n \nAfter delivering Cavador to Viktoria, Garrett steals a Servant mask to learn about a Mechanist technology called a \"Cultivator\". Meanwhile, Karras hides inside the Mechanist cathedral in preparation for his plan. Garrett and Viktoria learn that it is the Cultivators inside Servant masks which emit red vapor, or \"rust gas\". Karras had provided Servants to nobles with gardens in order to set off an apocalyptic chain reaction. Viktoria plans to lure the Servants into the hermetically sealed Mechanist cathedral before Karras activates their masks, but Garrett believes this to be too dangerous and leaves. Viktoria goes to the cathedral alone and dies while filling it with plants, and Garrett completes her plan, killing Karras in the rust gas. Afterward, Garrett is approached by a Keeper who explains that Karras' scheme and Viktoria's death had been prophesied. Garrett demands to know the rest of the Keepers' prophecies as the game ends.",
            "rating": 91.3924233088354,
            "popularity": 5.333333333333333,
            "total_rating": 90.69621165441772,
            "developers": [
                3
            ],
            "publishers": [
                4,
                26
            ],
``` 