import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShortUrlService } from 'src/app/services/short-url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styles: [`
    .w-40 {
      width: 40% !important;
    }

    .text-lg {
      font-size: 2rem !important;
    }

    .lg {
      width: 3rem; 
      height: 3rem;
    }

    
  `]
})
export class ShortUrlComponent {

  public url = new FormControl('', [Validators.required]);
  public isLoading = false;
  public shortUrl = '';

  constructor(private _service: ShortUrlService) { }

  onSubmit(){
    this.shortUrl = '';
    this.isLoading = true;
    this._service.getChortUrl(this.url.value)
      .subscribe(res =>{
          this.shortUrl = res.link;
          this.isLoading = false;
      }, err => {
        console.log(err);
        this.url.setErrors({
          noUrl: true
        });
        this.isLoading = false;
      })
  }

  getMsg(control: FormControl): string{
    if(control.errors?.required)
      return 'Field required';
    if(control.errors?.noUrl)
      return 'The value provided is invalid.'
    return '';
  }

}
