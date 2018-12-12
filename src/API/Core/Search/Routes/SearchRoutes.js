
const igdb = require('igdb-api-node').default;
var express = require('express')
var router = express.Router()


const client2 = igdb(process.env.IGDB_API);
const client = igdb('5732eaa882255b5d2da4fb5248795dd1')



router.get('/games/:search', function (req, res) {
    client.games({
        field: 'name',
        limit: 10,
        offset: 0,
        order: 'name:asc',
        search: req.params.search
    }, [
            "name",
            "url",
            "game",
            "id",
            "developers",
            "publishers",
            "total_rating",
            "rating",
            "hypes",
            "popularity",
            "storyline",
            "summary",
            "franchise",
            "category",
            "player_perspectives",
            "game_modes",
            "keywords",
            "themes",
            "first_release_date",
            "alternative_names",
            "screenshots",
            "videos",
            "cover",
            "esrb",
        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });
})

router.get('/companies/:search', function (req, res) {

    client.companies({
        field: 'name',
        limit: 20,
        offset: 0,
        order: 'name:asc',
        search: req.params.search
    }, [
            "name",
            "logo",
            "description",
            "website",
            "developed",
            "published",
            "twitter",
            "start_date",
            "url",
            "id"
        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });

})



router.get("/keywords", function (req, res) {

    client.keywords({

    }, [
            "name",
            "url",
            "games",
            "id"
        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });

})


router.get("/genres", function (req, res) {

    client.genres({

    }, [
            "name",
            "url",
            "games",
            "id"
        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });

})


router.get("/games/byid/:ids", function (req, res) {
    console.log(req.params.ids);
    var ids = JSON.parse(req.params.ids)
    console.log(ids);

    var idArr = ids

    for (var i = 0; i < idArr.length; i++) {
        idArr[i] = parseInt(idArr[i])
    }
    console.log(idArr);

    client.games({
        ids: [ids],
    }, [
            "name",
            "url",
            "game",
            "id",
            "developers",
            "publishers",
            "total_rating",
            "rating",
            "hypes",
            "popularity",
            "storyline",
            "summary",
            "franchise",
            "category",
            "player_perspectives",
            "game_modes",
            "keywords",
            "themes",
            "first_release_date",
            "alternative_names",
            "screenshots",
            "videos",
            "cover",
            "esrb",

        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });

})


router.get("/platform/:search", function (req, res) {

    client.platforms({
        search: req.params.search
    }, [
            "id",
            "name",
            "url",
            "logo",
            "website",
            "summary",
            "alternative_name",
            "generation",
            "games",
            "versions"
        ]).then(function (response) {
            console.log(response);
            res.json(response)
        }).catch(function (error) {
            throw error;
        });

})


module.exports = router