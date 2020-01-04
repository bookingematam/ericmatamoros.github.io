import { Component } from '@angular/core';
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Eric Matamoros';

  constructor(
    public router: Router
  ) {}

  ngOnInit() {
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
        } else {
          $(".masthead").removeClass("masthead-hide");
        }
      });
    });
  }

  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }
}

