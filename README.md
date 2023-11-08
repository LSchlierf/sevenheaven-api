# Seven Heaven API

This is the repository for the contact API for my band's website.

## Live version

This website is hosted through vercel, available at [sevenheaven.band](https://www.sevenheaven.band).

The webiste features seperate mobile and desktop layouts.

## Project structure

In the rpoduction environment, this project only serves the contact API. In the dev environment, this project can also serve a static build of the frontend. For this, the entire [root project](https://www.github.com/lschlierf/sevenheaven) has to be present in order to have the correct relative path for the front end.

Also see the [frontend project page](https://www.github.com/lschlierf/sevenheaven-site#building) for instructions on how to build a production image loally.

## Code

All this backend really does is take POST requests from the frontend, containing an email address and a contact request message. After a few sanity checks, two emails are sent out; one as a notification to us, and one as a confirmation to the given email address.

## Contact

Please do not hesitate to reach out to me.

I can be reached via Email: [LucasSchlierf@gmail.com](mailto:LucasSchlierf@gmail.com), however for questions and suggestions regarding this web page please reach out to us using one of the contact methods given in the [website imprint](https://www.sevenheaven.band/impressum).
