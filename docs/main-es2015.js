(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-container d-flex w-100 mx-auto flex-column mb-3\" id=\"about\">\r\n    <div class=\"middle-content\">\r\n        <h1>Eric Matamoros</h1>\r\n    </div>\r\n    <div class=\"description\">\r\n        <p i18n>\r\n            Since I was young I had ever been the most popular guy in the class neither the smartest or the fittest. Indeed, during my school I suffered from bullying as I was a fat guy with classes who was studying all day. Or that is what they thing. I was not\r\n            just a hard-working guy, I was also getting enough information in order to transform the world.\r\n        </p>\r\n        <p i18n>\r\n            All my childhood has been influenced by my aunt. She had suffered twice from breast cancer, once from tyroid cancer and right now, in 2020, she is undergoing stage IV metastatic lung cancer. Her lungs look like a cake full of small and destructive chocolate\r\n            bombs. She is my superhero is only one of the more than 8 million superheroes that struggle against cancer every year. I was more focused on what I could do to save her rather than taking care of myself.\r\n        </p>\r\n        <p i18n>\r\n            For that reason, when I was 15 I started my first project at the same time I got tired of my 9-2 school journey without having a real impact on her life and the life of others. At that same time Google released Tensorflow libraries and I decided to make\r\n            use of my gained expertised in cancer and my understanding on programming in order to make something big. This initial project lately became Biop AI after 3 years. Biop AI is a UK-based company which makes usage of artificial intelligence\r\n            for the early-stage cancer diagnosis. Our first product focuses on suspicious bad-moles diagnosis versus the healthy ones and is currently under clinical trials.\r\n        </p>\r\n        <p i18n>\r\n            Furthermore, I also co-founded another company in Spain called Nutrilieve for developing personalized diets to oncologic patients undergoing chemotherapy and radiotherapy. The idea with it is to palliate side-effects through the diet.\r\n        </p>\r\n        <p i18n>\r\n            Looks cool right? Definitely. It is not cool just because I am fulfilling an inner passion but because it allows me to be HAPPY. Exactly, how many millions do you want in your bank account if you are not happy? Trading? Dropshipping?\r\n        </p>\r\n        <p i18n>\r\n            What if I told you that you will be rich if you pursue your dreams instead of pursuing society dreams?\r\n        </p>\r\n        <p i18n>\r\n            I have been in Sherm El-Sheik (Africa), Silicon Valley (US), Shenzhen (China), Shangzhuo (China), London (EU), Amsterdam (EU), and many other places without spending a single penny. Guess what? Your knowledge and what you DO is more important than anything\r\n            else and that is what corporations and associations value on you. Here you have some pictures 😊\r\n        </p>\r\n\r\n        <div class=\"row mt-5\">\r\n            <div class=\"col-12 col-lg-6\">\r\n                <img src=\"../../assets/image/Picture11.jpg\" alt=\"Awesome-Pic\" />\r\n                <p class=\"mt-3 text-center\" i18n>Me at Shenzhen for the<br>International AI and Medicine Conference</p>\r\n            </div>\r\n            <div class=\"col-12 col-lg-6\">\r\n                <img src=\"../../assets/image/Picture12.jpg\" alt=\"Awesome-Pic\" />\r\n                <p class=\"mt-3 text-center\" i18n>Me at Silicon Valley<br>Pitching at SharkTank Event</p>\r\n            </div>\r\n            <div class=\"col-12 col-lg-6 mt-3\">\r\n                <img src=\"../../assets/image/Picture13.jpg\" alt=\"Awesome-Pic\" />\r\n                <p class=\"mt-3 text-center\" i18n>Me at Sherm El-Sheik<br>for the World Youth Forum</p>\r\n            </div>\r\n            <div class=\"col-12 col-lg-6 mt-3\">\r\n                <img src=\"../../assets/image/Picture14.jpg\" alt=\"Awesome-Pic\" />\r\n                <p class=\"mt-3 text-center\" i18n>Me awarded by<br>Mr. Abdel Fattah El-Sis</p>\r\n            </div>\r\n            <div class=\"col-12 col-lg-12 text-center\">\r\n                <a class=\"btn btn-green\" (click)=\"redirectBookMe()\" i18n>Book Me</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"masthead mb-auto\">\r\n    <div class=\"inner\">\r\n        <h3 class=\"masthead-brand\">\r\n            <svg preserveAspectRatio=\"xMidYMid meet\" data-bbox=\"0 0 125 264\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125 264\" height=\"44\" width=\"20\" data-type=\"color\" role=\"img\">\r\n                <g><path fill=\"#9bcb6c\" d=\"M104.167 0H125L20.833 264H0L104.167 0z\" fill-rule=\"evenodd\" data-color=\"1\"></path></g>\r\n            </svg>\r\n            <a href=\"\" [routerLink]=\"['/']\" target=\"_self\" i18n>Eric<br/>Matamoros</a>\r\n            <span i18n>Speaker,<br/>Scientist & Writer</span>\r\n        </h3>\r\n        <ul class=\"nav nav-masthead list-social ml-5\">\r\n            <li><a href=\"https://www.linkedin.com/in/ericmatamoros/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></li>\r\n            <li><a href=\"https://www.facebook.com/eric.matamorosmorales\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n            <li><a href=\"https://twitter.com/ericmatamoros99\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\r\n            <li><a href=\"https://www.instagram.com/ericmatamoros/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li>\r\n            <li class=\"dropdown mr-0\">\r\n                <button class=\"btn btn-secondary btn-sm dropdown-toggle ml-3\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                    {{ languageName }}\r\n                </button>\r\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\r\n                    <a class=\"dropdown-item\" href=\"/en/\">English</a>\r\n                    <a class=\"dropdown-item\" href=\"/es/\">Spanish</a>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <nav class=\"nav nav-masthead justify-content-center\">\r\n            <a class=\"nav-link active\" [routerLink]=\"['/']\">Home</a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\" [fragment]=\"'story'\" i18n>My Story</a>\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\" [fragment]=\"'speaking'\" i18n>Speaking</a>\r\n            <a class=\"nav-link\" (click)=\"redirectBookMe()\" i18n>Testimonial</a>\r\n        </nav>\r\n    </div>\r\n</header>\r\n<router-outlet></router-outlet>\r\n<!-- Footer Section -->\r\n<footer class=\"section-footer\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12 col-lg-6\">\r\n            <div class=\"footer-mail\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125 264\" height=\"138\" width=\"65\" role=\"img\">\r\n                    <g><path fill=\"#9bcb6c\" d=\"M104.167 0H125L20.833 264H0L104.167 0z\" fill-rule=\"evenodd\" data-color=\"1\"></path></g>\r\n                </svg>\r\n                <div class=\"d-inline-block align-bottom\">\r\n                    <a href=\"mailto:booking.ematam@gmail.com\">booking.ematam@gmail.com</a>\r\n                    <ul class=\"footer-social\">\r\n                        <li><a href=\"https://www.linkedin.com/in/ericmatamoros/\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a></li>\r\n                        <li><a href=\"https://www.facebook.com/eric.matamorosmorales\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li>\r\n                        <li><a href=\"https://twitter.com/ericmatamoros99\" target=\"_blank\"><i class=\"fab fa-twitter\"></i></a></li>\r\n                        <li><a href=\"https://www.instagram.com/ericmatamoros/\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <p class=\"footer-bottom\">&copy; 2019 by Eric Matamoros.</p>\r\n        </div>\r\n        <div class=\"col-12 col-lg-6\">\r\n            <h2 class=\"footer-right-text\" i18n>\"Are you tired of living the same day for all your life? Just contact me\"</h2>\r\n\r\n            <p class=\"footer-bottom mobile-ui\">&copy; 2019 by Eric Matamoros.</p>\r\n        </div>\r\n    </div>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-container d-flex w-100 mx-auto flex-column\" id=\"booking\">\r\n    <div class=\"middle-content\">\r\n        <h1 i18n>Book Eric Matamoros for<br>Your Next Event</h1>\r\n    </div>\r\n</div>\r\n\r\n<!-- Contact Section -->\r\n<div class=\"contact-section\" id=\"contact\">\r\n    <div class=\"section-heading\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 col-lg-4\">\r\n                <h3 i18n>CONTACT</h3>\r\n            </div>\r\n            <div class=\"col-sm-12 col-lg-6 mt-3 mt-lg-0\">\r\n                <form id=\"myform\" (submit)=\"sendEmail($event)\" class=\"p-2\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" name=\"from_name\" class=\"form-control\" placeholder=\"Full Name\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" name=\"from_email\" class=\"form-control\" placeholder=\"Email\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" name=\"subject\" class=\"form-control\" placeholder=\"Subject\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <textarea name=\"message_html\" id=\"msg\" class=\"form-control\" placeholder=\"Message\" cols=\"30\" rows=\"3\" required></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <button type=\"submit\" name=\"submit\" class=\"btn btn-primary btn-green\" i18n>Send</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section-testimonial\" id=\"testimonials\">\r\n        <div class=\"section-heading\">\r\n            <h2 i18n>TESTIMONIALS</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-12 col-md-12 mb-4\">\r\n                <section class=\"quotes testimonial-slick\">\r\n                    <div class=\"bubble\">\r\n                        <blockquote>\r\n                            Awesome work friend, thank you for what you do for all of us. It was a huge joy to meet you. We'll do a lot of things together.\r\n                        </blockquote>\r\n                        <div></div>\r\n                        <cite>Carols Sentis - World Impact Alliance Founder / Henkuai</cite>\r\n                    </div>\r\n                    <div class=\"bubble\">\r\n                        <blockquote>\r\n                            So proude of you Eric!. So glad that our paths have crossed.\r\n                        </blockquote>\r\n                        <div></div>\r\n                        <cite>Maria Castro Zuzuarregui - Emprendedora, Ticnificadoray PM</cite>\r\n                    </div>\r\n                    <div class=\"bubble\">\r\n                        <blockquote>\r\n                            T'ho deuen dir molt, però t'had'agradar. Tens un xiquet extraordinari. Ojalà consegueixi tot elque es proposi en aquesta vida. Sapescoltar, no tothom ho sap fer. Quanho fa, se li senten les rodes del cervell com li giren i com va absorvint tot el que\r\n                            sent i com ho ha d'utilitzar. És dificil explcar-te la sensació quem'ha donat. Però és una molt bona sensació. Enhorabona.\r\n                        </blockquote>\r\n                        <div></div>\r\n                        <cite>MAMA</cite>\r\n                    </div>\r\n                    <div class=\"bubble\">\r\n                        <blockquote>\r\n                            Dear Eric, Thank you for your response. This is helpful. I hope we will get there! Congratulations on your achievements.\r\n                        </blockquote>\r\n                        <div></div>\r\n                        <cite>Emna Harigua</cite>\r\n                    </div>\r\n                    <div class=\"bubble\">\r\n                        <blockquote>\r\n                            It was a pleasure meeting you yesterday. You are amazing, keep going on that. This is my what's app NO and for sure we'll keep in touch from time to time.\r\n                        </blockquote>\r\n                        <div></div>\r\n                        <cite>Mohamed Elashaal - Egyptian, Electrical power & control engineer</cite>\r\n                    </div>\r\n                </section>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover-container d-flex w-100 mx-auto flex-column\" id=\"welcome\">\r\n    <div class=\"middle-content\">\r\n        <h1 i18n>There is only one life<br>You decide what you want to do<br>Act now<br>Help others<br>Change the world</h1>\r\n        <a class=\"btn btn-bookme\" (click)=\"redirectBookMe()\" i18n>Book Me</a>\r\n    </div>\r\n</div>\r\n\r\n<!-- Section 1 -->\r\n<div class=\"about-story my-3\" id=\"story\">\r\n    <div class=\"story-about\">\r\n        <div class=\"story-title text-left\">\r\n            <h4 i18n>MY STORY</h4>\r\n        </div>\r\n        <img src=\"../assets/image/Picture2.jpg\" width=\"100%\" alt=\"ericmatamoros\" />\r\n    </div>\r\n    <div class=\"story-description\">\r\n        <svg preserveAspectRatio=\"xMidYMid meet\" data-bbox=\"0 0 125 264\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125 264\" height=\"492\" width=\"232\" data-type=\"color\" role=\"img\">\r\n            <g><path fill=\"#9bcb6c\" d=\"M104.167 0H125L20.833 264H0L104.167 0z\" fill-rule=\"evenodd\" data-color=\"1\"></path></g>\r\n        </svg>\r\n        <h3 class=\"text-justify\" i18n>“Eric and his project Biop AI Ltd. have changed the way cancer is diagnosed towards a better society.”</h3>\r\n        <p i18n>President of Egypt – Abdel Fattah el-Sisi</p>\r\n        <h3 class=\"text-justify\" i18n>“Eric empowers others to change the world through his uniqueness and wise words. He transmits the passion on what he does and has helped many youngsters to find their way. As he says, there is only one life. You decide to die in a 9-5 full-time\r\n            job or live doing what you love.”</h3>\r\n        <p i18n>Xavier Testar – Teacher at University of Barcelona</p>\r\n    </div>\r\n</div>\r\n<div class=\"about-story story_desc my-3\">\r\n    <div class=\"story-description pt-3\">\r\n        <svg preserveAspectRatio=\"xMidYMid meet\" data-bbox=\"0 0 125 264\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 125 264\" height=\"492\" width=\"232\" data-type=\"color\" role=\"img\">\r\n            <g><path fill=\"#9bcb6c\" d=\"M104.167 0H125L20.833 264H0L104.167 0z\" fill-rule=\"evenodd\" data-color=\"1\"></path></g>\r\n        </svg>\r\n        <p class=\"text-justify\" i18n>I suffered from bullying at high school because I was overweight. Depression and video games were my only way of exit of the real world. I started Biop AI Ltd. as a way to fulfil one of my main dreams, save my aunt who is suffering from Stage\r\n            IV Metastatic Lung Cancer. During this 5-year journey I understood that there is only 1 life to spend such amount of time on getting prepared to be ready for a 9-5 job that won´t fill any little of your happiness. Live or die. Now I am the\r\n            co-founder of Biop AI and Nutrilieve as well as an international speaker with the aim to change the rules, to help the youngsters and corporates to step outside of the routine and take action by doing things that motivate them and fill the\r\n            happiness tank.\r\n        </p>\r\n        <a (click)=\"redirectAboutMe()\" class=\"btn btn-green\" i18n>Read More</a>\r\n    </div>\r\n    <div class=\"story-about\">\r\n        <img src=\"../assets/image/Picture3.jpg\" width=\"100%\" alt=\"ericmatamoros\" />\r\n    </div>\r\n</div>\r\n\r\n<!-- Section 2 -->\r\n<div class=\"join-team mt-2\"></div>\r\n<div class=\"subscription-email\">\r\n    <h2 class=\"text-center\" i18n>Join the mailing list for further news on projects and life time accelerations with Eric.</h2>\r\n    <div class=\"text-center\">\r\n        <form id=\"myform\" (submit)=\"sendEmail($event)\">\r\n            <div class=\"input-group\">\r\n                <input type=\"email\" class=\"form-control\" placeholder=\"Enter your email here*\" aria-describedby=\"button-addon2\">\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-green\" type=\"submit\" id=\"button-addon2\" i18n>Join</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- Section 3 -->\r\n<div class=\"speaking-section\" id=\"speaking\">\r\n    <div class=\"section-heading\">\r\n        <h3 i18n>SPEAKING</h3>\r\n        <p i18n>I simply did too many mistakes. We will all live around 80 years, you decide whether you want to spend your time working for living or you want to live and have an impact on the world. People will remember you for your achievements, not for the\r\n            money you have on the pocket.</p>\r\n        <div class=\"row mt-4\">\r\n            <div class=\"col-md-4\">\r\n                <iframe width=\"100%\" height=\"225\" src=\"https://www.youtube.com/embed/gCMkzsfxOvU\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                <p class=\"mt-3 text-video\">Unleash 2019 Keynote Speaker</p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <iframe width=\"100%\" height=\"225\" src=\"https://www.youtube.com/embed/0g87cImGs9s\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                <p class=\"mt-3 text-video\">Interview for The Objective</p>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <iframe width=\"100%\" height=\"225\" src=\"https://www.youtube.com/embed/uGtmbt8oW6A\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                <p class=\"mt-3 text-video\">Interview for Fundació Rafael ElPino</p>\r\n            </div>\r\n            <div class=\"col-md-4 mt-3\">\r\n                <iframe width=\"100%\" height=\"225\" src=\"https://www.youtube.com/embed/ah9eGhNUfj0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                <p class=\"mt-3 text-video\">World Youth Forum - Spanish Ambassador</p>\r\n            </div>\r\n            <div class=\"col-12 text-center\">\r\n                <a class=\"btn btn-green mt-3\" (click)=\"redirectBookMe()\" i18n>Book Me</a>\r\n            </div>\r\n        </div>\r\n        <div class=\"featured-section\">\r\n            <h2>AS FEATURED IN</h2>\r\n            <div class=\"carousel\">\r\n                <div class=\"slide px-3\">\r\n                    <img src=\"../assets/image/huawei.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"slide px-3\">\r\n                    <img src=\"../assets/image/lavanguardia.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"slide px-3\">\r\n                    <img src=\"../assets/image/world-youth-form.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"slide px-3\">\r\n                    <img src=\"../assets/image/ara.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n                <div class=\"slide px-3\">\r\n                    <img src=\"../assets/image/tedx.png\" alt=\"\" width=\"100%\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * About\r\n */\r\n\r\n.cover-container {\r\n    background-image: url('footer.jpg');\r\n    background-color: rgba(0, 0, 0, .7);\r\n    background-blend-mode: overlay;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    padding-top: 10rem;\r\n    padding: 10rem 48px 3rem;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.cover-container h1 {\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #fff;\r\n    text-transform: none;\r\n}\r\n\r\n.cover-container .description {\r\n    border: 2px solid #fff;\r\n    padding: 3rem 5rem;\r\n    margin-top: 5rem;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.cover-container .description p {\r\n    font-size: 1.25rem;\r\n    font-weight: 600;\r\n    color: #fff;\r\n    line-height: 1.4;\r\n    text-align: justify;\r\n}\r\n\r\n.cover-container .description .btn-green {\r\n    background-color: rgba(0, 0, 0, 0.51);\r\n    border: 2px solid #9BCB6C;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    font-weight: 800;\r\n    color: #9BCB6C;\r\n    margin-top: 40px;\r\n    border-radius: 0;\r\n    width: 270px;\r\n    height: 52px;\r\n    box-shadow: none;\r\n    line-height: 40px;\r\n}\r\n\r\n.cover-container .description img {\r\n    width: 100%;\r\n    height: 400px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    -o-object-position: center;\r\n       object-position: center;\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n    .cover-container .description {\r\n        padding: 1rem;\r\n        margin-top: 3rem;\r\n    }\r\n    .cover-container .description img {\r\n        height: auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .cover-container {\r\n        padding: 15rem 20px 3rem;\r\n    }\r\n    .cover-container h1 {\r\n        font-size: 40px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTs7QUFFRjtJQUNJLG1DQUFvRDtJQUNwRCxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLDBCQUF1QjtPQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQWJvdXRcclxuICovXHJcblxyXG4uY292ZXItY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvZm9vdGVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC43KTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMTByZW0gNDhweCAzcmVtO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvdmVyLWNvbnRhaW5lciBoMSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uY292ZXItY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgcGFkZGluZzogM3JlbSA1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb3Zlci1jb250YWluZXIgLmRlc2NyaXB0aW9uIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5jb3Zlci1jb250YWluZXIgLmRlc2NyaXB0aW9uIC5idG4tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5QkNCNkM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICM5QkNCNkM7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNvdmVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb24gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuY292ZXItY29udGFpbmVyIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvdmVyLWNvbnRhaW5lciAuZGVzY3JpcHRpb24gaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY292ZXItY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXJlbSAyMHB4IDNyZW07XHJcbiAgICB9XHJcbiAgICAuY292ZXItY29udGFpbmVyIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AboutComponent = class AboutComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectBookMe() {
        this.router.navigate(['/booking']);
    }
};
AboutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");






const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "booking", component: _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"] },
    { path: "about", component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: "**", redirectTo: "" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                anchorScrolling: 'enabled',
                scrollPositionRestoration: 'enabled'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(localeId, router) {
        this.localeId = localeId;
        this.router = router;
        this.title = 'Eric Matamoros';
        this.languageName = '';
        this.languageList = [
            { code: 'en', label: 'English' },
            { code: 'es', label: 'Spanish' }
        ];
    }
    ngOnInit() {
        if (this.localeId == 'en') {
            this.languageName = 'English';
        }
        else {
            this.languageName = 'Spanish';
        }
        $(document).ready(function () {
            $(".carousel").slick({
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                dots: false,
                pauseOnHover: false
            });
            $(".testimonial-slick").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                arrows: true,
                dots: true,
                pauseOnHover: false
            });
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    $(".masthead").addClass("masthead-hide");
                }
                else {
                    $(".masthead").removeClass("masthead-hide");
                }
            });
        });
    }
    scrollToElement(element) {
        element.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
    redirectBookMe() {
        this.router.navigateByUrl('/booking#testimonials');
    }
};
AppComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]))
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _booking_booking_component__WEBPACK_IMPORTED_MODULE_5__["BookingComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * Booking\r\n */\r\n\r\n.cover-container {\r\n    background-image: url('footer.jpg');\r\n    background-color: rgba(0, 0, 0, .7);\r\n    background-blend-mode: overlay;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 23rem;\r\n    padding-top: 10rem;\r\n    padding: 10rem 48px 3rem;\r\n}\r\n\r\n.cover-container h1 {\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #fff;\r\n    text-transform: none;\r\n}\r\n\r\n/*\r\n * Contact\r\n */\r\n\r\n.contact-section {\r\n    background-color: #f3f3f3;\r\n    float: left;\r\n    width: 100%;\r\n    padding: 1.5rem 0;\r\n}\r\n\r\n.contact-section .section-heading {\r\n    padding: 48px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.contact-section .section-heading h3 {\r\n    letter-spacing: 0.5em;\r\n    color: #8C8C8C;\r\n    font-size: 1.25rem;\r\n    margin: 0;\r\n    font-weight: 800;\r\n}\r\n\r\n.contact-section .section-heading .form-control {\r\n    border-radius: 0;\r\n    background-color: #f3f3f3;\r\n    color: #000;\r\n    border: 0;\r\n    border-bottom: 4px solid #bada55;\r\n    padding: 3px;\r\n    margin: 0;\r\n    text-overflow: ellipsis;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    box-shadow: none;\r\n    margin-bottom: 1.25rem;\r\n    font-size: 1.5rem;\r\n    font-weight: 800;\r\n    resize: none;\r\n}\r\n\r\n.contact-section .section-heading .btn-green {\r\n    background-color: #9bcb6c;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #000;\r\n    font-size: 1.5rem;\r\n    border-radius: 0;\r\n    font-weight: 800;\r\n    padding: 6px 20px;\r\n    height: 50px;\r\n    line-height: 40px;\r\n    width: 240px;\r\n    box-shadow: none;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.section-testimonial {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 0 48px;\r\n}\r\n\r\n.section-testimonial .section-heading {\r\n    border-top: 4px solid #ccc;\r\n    padding: 4rem 0;\r\n}\r\n\r\n.section-testimonial .section-heading h2 {\r\n    letter-spacing: 0.5em;\r\n    color: #8C8C8C;\r\n    font-size: 1.25rem;\r\n    margin: 0;\r\n    font-weight: 800;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n/* Bubble Slider */\r\n\r\n.bubble blockquote {\r\n    margin: 10px 10px 0;\r\n    background: #fff;\r\n    padding: 60px;\r\n    position: relative;\r\n    border: none;\r\n    border-radius: 8px;\r\n    font-size: 1.25em;\r\n    color: #000;\r\n}\r\n\r\n.bubble blockquote:before,\r\n.bubble blockquote:after {\r\n    content: \"\\201C\";\r\n    position: absolute;\r\n    font-size: 80px;\r\n    padding: 10px;\r\n    line-height: 1;\r\n    color: #000;\r\n}\r\n\r\n.bubble blockquote:before {\r\n    top: 0;\r\n    left: 10px;\r\n}\r\n\r\n.bubble blockquote:after {\r\n    content: \"\\201D\";\r\n    right: 10px;\r\n    bottom: -.5em;\r\n}\r\n\r\n.bubble div {\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 0 solid transparent;\r\n    border-right: 20px solid transparent;\r\n    border-top: 20px solid #fff;\r\n    margin: 0 0 0 60px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.bubble cite {\r\n    padding-left: 20px;\r\n    font-size: 1.25em;\r\n    color: #000;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .cover-container {\r\n        height: auto;\r\n        padding: 15rem 18px 3rem;\r\n    }\r\n    .cover-container h1 {\r\n        font-size: 33px;\r\n    }\r\n    .section-testimonial {\r\n        padding: 0 1.5rem;\r\n    }\r\n    .contact-section .section-heading {\r\n        padding: 4rem 1.5rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7SUFDSSxtQ0FBb0Q7SUFDcEQsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBR0E7O0VBRUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFHQSxrQkFBa0I7O0FBRWxCO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxvQ0FBb0M7SUFDcEMsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQm9va2luZ1xyXG4gKi9cclxuXHJcbi5jb3Zlci1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9mb290ZXIuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjcpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDIzcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xyXG4gICAgcGFkZGluZzogMTByZW0gNDhweCAzcmVtO1xyXG59XHJcblxyXG4uY292ZXItY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBDb250YWN0XHJcbiAqL1xyXG5cclxuLmNvbnRhY3Qtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LXNlY3Rpb24gLnNlY3Rpb24taGVhZGluZyBoMyB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41ZW07XHJcbiAgICBjb2xvcjogIzhDOEM4QztcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5jb250YWN0LXNlY3Rpb24gLnNlY3Rpb24taGVhZGluZyAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2JhZGE1NTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1zZWN0aW9uIC5zZWN0aW9uLWhlYWRpbmcgLmJ0bi1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJjYjZjO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZXN0aW1vbmlhbCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCA0OHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZXN0aW1vbmlhbCAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNHJlbSAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi10ZXN0aW1vbmlhbCAuc2VjdGlvbi1oZWFkaW5nIGgyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcclxuICAgIGNvbG9yOiAjOEM4QzhDO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG4vKiBCdWJibGUgU2xpZGVyICovXHJcblxyXG4uYnViYmxlIGJsb2NrcXVvdGUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmJ1YmJsZSBibG9ja3F1b3RlOmJlZm9yZSxcclxuLmJ1YmJsZSBibG9ja3F1b3RlOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDFDXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLmJ1YmJsZSBibG9ja3F1b3RlOmJlZm9yZSB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uYnViYmxlIGJsb2NrcXVvdGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcXDIwMURcIjtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAtLjVlbTtcclxufVxyXG5cclxuLmJ1YmJsZSBkaXYge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgI2ZmZjtcclxuICAgIG1hcmdpbjogMCAwIDAgNjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idWJibGUgY2l0ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuMjVlbTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvdmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cmVtIDE4cHggM3JlbTtcclxuICAgIH1cclxuICAgIC5jb3Zlci1jb250YWluZXIgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXRlc3RpbW9uaWFsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXNlY3Rpb24gLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbSAxLjVyZW07XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);



let BookingComponent = class BookingComponent {
    constructor() { }
    ngOnInit() {
        $(".testimonial-slick").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            dots: true,
            pauseOnHover: false
        });
    }
    sendEmail(e) {
        e.preventDefault();
        emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.sendForm('contact_service', 'template_xFK9BlZQ', e.target, 'user_XK5jxSG3P3tlkv4kRdji2')
            .then((result) => {
            console.log(result.text);
            $("#myform")[0].reset();
        }, (error) => {
            console.log(error.text);
        });
    }
};
BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/booking/booking.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")).default]
    })
], BookingComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n * Cover\r\n */\r\n\r\n.cover-container {\r\n    background-image: url('Picture1.png');\r\n    background-color: rgba(0, 0, 0, .5);\r\n    background-blend-mode: overlay;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;\r\n    padding: 10rem 48px 3rem;\r\n}\r\n\r\n.cover-container .middle-content {\r\n    width: 100%;\r\n}\r\n\r\n.cover-container h1 {\r\n    font-size: 45px;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #fff;\r\n    text-transform: none;\r\n}\r\n\r\n.cover-container .btn-bookme {\r\n    background-color: rgba(0, 0, 0, 0.51);\r\n    border: 2px solid #9BCB6C;\r\n    cursor: pointer;\r\n    font-size: 1.25rem;\r\n    font-weight: 800;\r\n    color: #9BCB6C;\r\n    margin-top: 40px;\r\n    border-radius: 0;\r\n    width: 270px;\r\n    height: 52px;\r\n    box-shadow: none;\r\n    line-height: 40px;\r\n}\r\n\r\n/*\r\n * About Story\r\n */\r\n\r\n.about-story {\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.about-story .story-title {\r\n    float: left;\r\n    width: 100%;\r\n    padding: 80px 48px;\r\n}\r\n\r\n.about-story .story-title h4 {\r\n    letter-spacing: 0.5em;\r\n    line-height: 1.2em;\r\n    color: #8C8C8C;\r\n    font-size: 1.5rem;\r\n    margin: 0;\r\n    font-weight: 800;\r\n}\r\n\r\n.about-story .story-about,\r\n.about-story .story-description {\r\n    float: left;\r\n    width: 50%;\r\n    position: relative;\r\n}\r\n\r\n.about-story .story-description {\r\n    padding: 14rem 2.5rem 0;\r\n}\r\n\r\n.about-story .story-description svg {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    margin: auto;\r\n    opacity: 0.13;\r\n}\r\n\r\n.about-story .story-description h3 {\r\n    font-size: 2.125rem;\r\n    font-weight: bold;\r\n    color: #000;\r\n}\r\n\r\n.about-story .story-description p {\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    color: #000;\r\n    text-align: right;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.about-story.story_desc .story-description p {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.about-story.story_desc .story-description .btn-green {\r\n    background-color: #9bcb6c;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #000;\r\n    font-size: 1.25rem;\r\n    border-radius: 0;\r\n    font-weight: 800;\r\n    padding: 6px 20px;\r\n    height: 50px;\r\n    line-height: 40px;\r\n    width: 240px;\r\n    box-shadow: none;\r\n}\r\n\r\n/*\r\n * Join Team\r\n */\r\n\r\n.join-team {\r\n    background-image: url('Picture4.jpg');\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 490px;\r\n    float: left;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.subscription-email {\r\n    background-image: url('footer.jpg');\r\n    background-color: rgba(0, 0, 0, .5);\r\n    background-blend-mode: overlay;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    padding: 4rem 5rem;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.subscription-email h2 {\r\n    font-size: 1.5rem;\r\n    padding: 0;\r\n    margin-bottom: 1.2rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.subscription-email .input-group {\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.subscription-email .input-group .form-control {\r\n    height: 50px;\r\n    border-radius: 0;\r\n    border: 0;\r\n    font-weight: bold;\r\n    box-shadow: none;\r\n    z-index: 0;\r\n}\r\n\r\n.subscription-email .input-group .btn-green {\r\n    background-color: #9bcb6c;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #000;\r\n    font-size: 1.25rem;\r\n    border-radius: 0;\r\n    font-weight: 800;\r\n    padding: 6px 20px;\r\n    box-shadow: none;\r\n    z-index: 0;\r\n}\r\n\r\n/*\r\n * Speaking\r\n */\r\n\r\n.speaking-section {\r\n    background-color: #f3f3f3;\r\n    float: left;\r\n    width: 100%;\r\n    padding: 1.5rem 0;\r\n}\r\n\r\n.speaking-section .section-heading {\r\n    padding: 48px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.speaking-section .section-heading h3 {\r\n    letter-spacing: 0.5em;\r\n    color: #8C8C8C;\r\n    font-size: 1.25rem;\r\n    margin: 0;\r\n    font-weight: 800;\r\n}\r\n\r\n.speaking-section .section-heading p {\r\n    color: #000;\r\n    font-size: 1.5rem;\r\n    font-weight: 400;\r\n    margin: 40px 0 0;\r\n    text-align: justify;\r\n}\r\n\r\n.speaking-section .section-heading .text-video {\r\n    color: #000;\r\n    font-size: 1.25rem;\r\n    font-weight: 700;\r\n    margin: 0 0 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.speaking-section .section-heading .btn-green {\r\n    background-color: #9bcb6c;\r\n    border: 0;\r\n    cursor: pointer;\r\n    color: #000;\r\n    font-size: 1.25rem;\r\n    border-radius: 0;\r\n    font-weight: 800;\r\n    padding: 6px 20px;\r\n    height: 50px;\r\n    line-height: 40px;\r\n    width: 240px;\r\n    box-shadow: none;\r\n}\r\n\r\n.featured-section {\r\n    border-top: 4px solid #ccc;\r\n    margin-top: 3rem;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.featured-section h2 {\r\n    letter-spacing: 0.5em;\r\n    color: #8C8C8C;\r\n    font-size: 1.25rem;\r\n    margin: 0;\r\n    font-weight: 800;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n/* Resposnive */\r\n\r\n@media screen and (max-width: 991px) {\r\n    .cover-container {\r\n        padding-top: 34rem;\r\n    }\r\n    .about-story .story-title {\r\n        padding: 30px 16px 50px;\r\n    }\r\n    .about-story .story-about,\r\n    .about-story .story-description {\r\n        width: 100%;\r\n        padding: 1.25rem 1rem;\r\n    }\r\n    .about-story .story-title h4 {\r\n        text-align: center;\r\n    }\r\n    .about-story.story_desc {\r\n        margin-bottom: 0 !important;\r\n        display: flex;\r\n        flex-flow: column;\r\n        flex-direction: column-reverse;\r\n    }\r\n    .about-story .story-description svg {\r\n        height: 300px;\r\n    }\r\n    .about-story.story_desc .story-description p {\r\n        font-size: 1.5rem;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .masthead {\r\n        padding: 1rem;\r\n    }\r\n    .cover-container {\r\n        padding: 11rem 16px 3rem;\r\n    }\r\n    .cover-container h1 {\r\n        font-size: 20px;\r\n        margin-top: 190px;\r\n    }\r\n    .about-story .story-about,\r\n    .about-story .story-description {\r\n        width: 100%;\r\n        padding: 1.25rem 1rem;\r\n    }\r\n    .about-story .story-title {\r\n        padding: 0 16px 30px;\r\n    }\r\n    .about-story .story-description h3 {\r\n        font-size: 1.5rem;\r\n    }\r\n    .about-story .story-description p:last-child {\r\n        margin-bottom: 0;\r\n    }\r\n    .about-story .story-title h4 {\r\n        text-align: center;\r\n    }\r\n    .speaking-section {\r\n        padding-bottom: 0;\r\n    }\r\n    .speaking-section .section-heading {\r\n        padding: 1rem;\r\n    }\r\n    .join-team {\r\n        background-size: contain;\r\n        background-attachment: unset;\r\n        height: 310px;\r\n    }\r\n    .subscription-email {\r\n        padding: 4rem 2rem;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7SUFDSSxxQ0FBc0Q7SUFDdEQsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFHQTs7RUFFRTs7QUFFRjtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUdBOztFQUVFOztBQUVGO0lBQ0kscUNBQXNEO0lBQ3RELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQ0FBb0Q7SUFDcEQsbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsU0FBUztJQUNULGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBR0E7O0VBRUU7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFHQSxlQUFlOztBQUVmO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBOztRQUVJLFdBQVc7UUFDWCxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksMkJBQTJCO1FBQzNCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7O1FBRUksV0FBVztRQUNYLHFCQUFxQjtJQUN6QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvdmVyXHJcbiAqL1xyXG5cclxuLmNvdmVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlL1BpY3R1cmUxLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAxMHJlbSA0OHB4IDNyZW07XHJcbn1cclxuXHJcbi5jb3Zlci1jb250YWluZXIgLm1pZGRsZS1jb250ZW50IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY292ZXItY29udGFpbmVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5jb3Zlci1jb250YWluZXIgLmJ0bi1ib29rbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUxKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5QkNCNkM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6ICM5QkNCNkM7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuXHJcbi8qXHJcbiAqIEFib3V0IFN0b3J5XHJcbiAqL1xyXG5cclxuLmFib3V0LXN0b3J5IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeSAuc3RvcnktdGl0bGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDgwcHggNDhweDtcclxufVxyXG5cclxuLmFib3V0LXN0b3J5IC5zdG9yeS10aXRsZSBoNCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41ZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICBjb2xvcjogIzhDOEM4QztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmFib3V0LXN0b3J5IC5zdG9yeS1hYm91dCxcclxuLmFib3V0LXN0b3J5IC5zdG9yeS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZzogMTRyZW0gMi41cmVtIDA7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24gc3ZnIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG9wYWNpdHk6IDAuMTM7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24gaDMge1xyXG4gICAgZm9udC1zaXplOiAyLjEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1zdG9yeS5zdG9yeV9kZXNjIC5zdG9yeS1kZXNjcmlwdGlvbiBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLmFib3V0LXN0b3J5LnN0b3J5X2Rlc2MgLnN0b3J5LWRlc2NyaXB0aW9uIC5idG4tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliY2I2YztcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qXHJcbiAqIEpvaW4gVGVhbVxyXG4gKi9cclxuXHJcbi5qb2luLXRlYW0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9QaWN0dXJlNC5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA0OTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24tZW1haWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9mb290ZXIuanBnKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBvdmVybGF5O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDVyZW07XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3Vic2NyaXB0aW9uLWVtYWlsIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24tZW1haWwgLmlucHV0LWdyb3VwIHtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN1YnNjcmlwdGlvbi1lbWFpbCAuaW5wdXQtZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLnN1YnNjcmlwdGlvbi1lbWFpbCAuaW5wdXQtZ3JvdXAgLmJ0bi1ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJjYjZjO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDZweCAyMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gKiBTcGVha2luZ1xyXG4gKi9cclxuXHJcbi5zcGVha2luZy1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMS41cmVtIDA7XHJcbn1cclxuXHJcbi5zcGVha2luZy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZzogNDhweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGVha2luZy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRpbmcgaDMge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xyXG4gICAgY29sb3I6ICM4QzhDOEM7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc3BlYWtpbmctc2VjdGlvbiAuc2VjdGlvbi1oZWFkaW5nIHAge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW46IDQwcHggMCAwO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnNwZWFraW5nLXNlY3Rpb24gLnNlY3Rpb24taGVhZGluZyAudGV4dC12aWRlbyB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3BlYWtpbmctc2VjdGlvbiAuc2VjdGlvbi1oZWFkaW5nIC5idG4tZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliY2I2YztcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmZlYXR1cmVkLXNlY3Rpb24ge1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1zZWN0aW9uIGgyIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVlbTtcclxuICAgIGNvbG9yOiAjOEM4QzhDO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb3NuaXZlICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgLmNvdmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM0cmVtO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5IC5zdG9yeS10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxNnB4IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtc3RvcnkgLnN0b3J5LWFib3V0LFxyXG4gICAgLmFib3V0LXN0b3J5IC5zdG9yeS1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5IC5zdG9yeS10aXRsZSBoNCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5LnN0b3J5X2Rlc2Mge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIH1cclxuICAgIC5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24gc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5LnN0b3J5X2Rlc2MgLnN0b3J5LWRlc2NyaXB0aW9uIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLm1hc3RoZWFkIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvdmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMTFyZW0gMTZweCAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvdmVyLWNvbnRhaW5lciBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE5MHB4O1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5IC5zdG9yeS1hYm91dCxcclxuICAgIC5hYm91dC1zdG9yeSAuc3RvcnktZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcclxuICAgIH1cclxuICAgIC5hYm91dC1zdG9yeSAuc3RvcnktdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXN0b3J5IC5zdG9yeS1kZXNjcmlwdGlvbiBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtc3RvcnkgLnN0b3J5LWRlc2NyaXB0aW9uIHA6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5hYm91dC1zdG9yeSAuc3RvcnktdGl0bGUgaDQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zcGVha2luZy1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5zcGVha2luZy1zZWN0aW9uIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcbiAgICAuam9pbi10ZWFtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiB1bnNldDtcclxuICAgICAgICBoZWlnaHQ6IDMxMHB4O1xyXG4gICAgfVxyXG4gICAgLnN1YnNjcmlwdGlvbi1lbWFpbCB7XHJcbiAgICAgICAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_3__);




let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectBookMe() {
        this.router.navigate(['/booking']);
    }
    redirectAboutMe() {
        this.router.navigate(['/about']);
    }
    sendEmail(e) {
        e.preventDefault();
        emailjs_com__WEBPACK_IMPORTED_MODULE_3___default.a.sendForm('contact_service', 'template_xFK9BlZQ_clone', e.target, 'user_XK5jxSG3P3tlkv4kRdji2')
            .then((result) => {
            console.log(result.text);
            $("#myform")[0].reset();
        }, (error) => {
            console.log(error.text);
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\ericmatamoros.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);