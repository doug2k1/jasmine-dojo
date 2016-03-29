var User = require('../src/user');
var Podcast = require('../src/podcast');

describe('User', function () {
    it('should have a name', function () {
        var u = User.create('Bob');

        expect(u.name).toEqual('Bob');
    });

    it('should subscribe to podcasts', function () {
        var u = User.create('Bob'),
            p = Podcast.create('Dev na Estrada');

        expect(u.podcasts.length).toEqual(0);

        u.subscribe(p);

        expect(u.podcasts.length).toEqual(1);
        expect(u.podcasts).toContain(p);
    });
});
