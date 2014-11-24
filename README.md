# Coding Project for Move.com: Implement of photo gallery

Although I [implemented][original-implementation] this particular exercise originally in [Backbone.JS], 
I decided it would make a nice little exercise to try to learn a bit of [Angular.JS] as well.

## Setting up

I started off by making a very shallow clone of the [angular-seed] repo, blowing away the `.git` 
directory, and re-initializing git to point to my own working repo. The old readme for that seed
is at <https://github.com/tamouse/move.com-coding-challenge-ng-002/blob/master/README-angular-seed.md>.
I then followed the instructions in that old readme.

At this point, all tests pass, the server works, yay!

## Two Views

In the [original][original-implementation], I made two views for the gallery, one in a film-strip format and one in a side-by-side format. I'll do them here as well. Since the seed starts by giving me two views, I'm already ahead of the game!

The views in angular set up the routes they respond to and the controllers that will drive them. Sort of backwards from my Rails experience, but it certainly makes sense here.

## One Controller

As the controller doesn't care in the least how the views are structured, I'm using the same controller, `GalleryController` to drive both views.

## Test Data

Move.com gave me original test data in a JSON object. This data is intended to be returned from an AJAX API service,
but it is statically assigned in the `GalleryController`.

## Flipping the Image

Each view has the main image, and then a set of thumbnails. Clicking on a thumbnail changes the current large image.

Using angular, this was super easy. Data binding makes the template easily updateable on the fly without doing much of anything. Making each thumbnail respond to a click was also super easy, calling a method in the `GalleryController` object to set the current photo accordingly.

## Conclusions

This went a *whole* lot faster than I expected, even though I had a couple of false starts.

*****

## Contributing

If you have questions and comments, please submit an [Issue][issues].

This is really a learning exercise *por moi* but if you'd like to contribute, please do so!

1. Fork it.
2. Create a branch using good [gitflow] naming.
3. Make your changes in your own branch, including *tests*.
4. Commit and push your branch to your fork.
5. Issue a [Pull Request][pull-requests].

I won't guarantee I'll accept every single PR, but I'll try to respond to PRs and Issues.



<!-- links -->
[original-implementation]: https://github.com/tamouse/move.com-coding-challenge-001 "Backbone implementation of photo gallery"
[Backbone.JS]: http://backbonejs.org/ "Site of the inestimable Backbone.JS library"
[Angular.JS]: http://backbonejs.org/ "Site of the inestimable Angular.JS Web Framework in JavaScript"
[angular-seed]: https://github.com/angular/angular-seed "Seeding a new angular project"
[repo]: https://github.com/tamouse/move.com-coding-challenge-ng-002 "See me on Github!"
[wiki]: https://github.com/tamouse/move.com-coding-challenge-ng-002/wiki "Project Wiki"
[author]: mailto:tamouse@gmail.com "Send me an e-mail"
[issues]: https://github.com/tamouse/move.com-coding-challenge-ng-002/issues "Project Issues"
[pull-requests]: https://github.com/tamouse/move.com-coding-challenge-ng-002/pulls "Project PRs"
