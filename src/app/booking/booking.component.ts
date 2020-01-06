import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

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

}
