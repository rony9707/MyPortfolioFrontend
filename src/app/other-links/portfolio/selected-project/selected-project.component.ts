import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { portfolio } from '../portfolio.interface';
import { ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-selected-project',
  templateUrl: './selected-project.component.html',
  styleUrls: ['./selected-project.component.css']
})
export class SelectedProjectComponent implements OnInit, AfterViewInit {

  @ViewChild('mainContainer') mainContainer!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.renderer.listen(this.el.nativeElement, 'click', (event: Event) => {
      if (!this.mainContainer.nativeElement.contains(event.target)) {
        this.closeSelectedProject();
      }
    });
  }

  @Input() selectedProject: portfolio | undefined;

  @Output() closeProject = new EventEmitter<void>();

  closeSelectedProject() {
    this.closeProject.emit();
  }
}
