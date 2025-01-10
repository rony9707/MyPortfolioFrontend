import { Component, Input, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialLinksComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChildren('socials') socialIcons: QueryList<ElementRef> | undefined;
  @ViewChild('socialsMain') SocialMainDiv : ElementRef | undefined
  @Input() noMargin: boolean = true;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.noMargin == false) {
      if (this.socialIcons) {
        this.socialIcons.forEach((icon: ElementRef) => {
          const nativeElement = icon.nativeElement;
          nativeElement.style.width = '30px';
          nativeElement.style.height = '30px';
        });
      }

      if(this.SocialMainDiv){
        this.SocialMainDiv.nativeElement.style.marginBottom = '0'; 
      }
    }
  }



}
