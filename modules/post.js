const data = require("../data/posts.json");

const post = {
    all: (request, response) => {
        response.render("home", { data });
    },
    find: (request, response) => {
        const currentId = parseInt(request.params.id);

        const single = data.find((post) => {
            if (post.id === currentId) return true;
        });
        if (single) {
            response.render("single", { single });
        } else {
            response.status(404).send(`Ohhh dommage le post n'existe pas`);
        }
    },
};

module.exports = post;
