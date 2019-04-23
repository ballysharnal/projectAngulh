import { Directive, OnInit, Input, TemplateRef, ViewContainerRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appIsMovieOk]'
})
export class IsMovieOkDirective implements OnInit {


  constructor(private tplRef: TemplateRef<any>, private vwRef: ViewContainerRef) { }

  @Input() set appIsMovieOk(verifTrue: boolean){
    
    if (verifTrue != true){

      this.vwRef.createEmbeddedView(this.tplRef) ;
      
    }else{

      this.vwRef.clear() ;

    }
  }   
  ngOnInit() {}

  @Output('verif') verif: EventEmitter<any> = new EventEmitter(true);


}




