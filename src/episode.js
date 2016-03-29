var Episode = {
    create: function (title) {
        var o = Object.create(this);
        o.title = title;
        return o;
    }
};

module.exports = Episode;
