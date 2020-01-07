import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

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
    emailjs.sendForm('contact_service', 'template_xFK9BlZQ', e.target as HTMLFormElement, 'user_XK5jxSG3P3tlkv4kRdji2')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.toastr.success("Mail was successfully sent.");
        $("#myform")[0].reset();
      }, (error) => {
        console.log(error.text);
      });
  }
}
