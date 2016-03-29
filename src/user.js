var User = {
    create: function (name) {
        var o = Object.create(this);
        o.name = name;
        o.podcasts = [];
        return o;
    },

    subscribe: function (podcast) {
        this.podcasts.push(podcast);
    }
};

module.exports = User;
