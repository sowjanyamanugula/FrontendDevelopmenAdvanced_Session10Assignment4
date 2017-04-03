import { Component, OnInit ,ElementRef} from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  constructor(private _elRef:ElementRef) { }

  ngOnInit() {
     jQuery(this._elRef.nativeElement).find('button').on('click',function(){
         alert("JQuery works!!!! Button is clicked");
     });
  }

}
