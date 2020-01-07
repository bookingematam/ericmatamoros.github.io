import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'template_hixVfBEB', e.target as HTMLFormElement, 'user_XK5jxSG3P3tlkv4kRdji2')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}
