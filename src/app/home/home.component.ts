import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  redirectBookMe() {
    this.router.navigate(['/booking'])
  }

  redirectAboutMe() {
    this.router.navigate(['/about'])
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('contact_service', 'template_xFK9BlZQ_clone', e.target as HTMLFormElement, 'user_XK5jxSG3P3tlkv4kRdji2')
      .then((result: EmailJSResponseStatus) => {
        this.toastr.success("Mail was successfully sent.");
        $("#myform")[0].reset();
      }, (error) => {
        console.log(error.text);
      });
  }
}
