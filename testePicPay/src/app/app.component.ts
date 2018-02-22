import { Component, TemplateRef, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'app';
  pessoas: any
  selectedPessoa: any

  public modalRef: BsModalRef; // {1}
  constructor(
    private modalService: BsModalService,
    private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getPessoas()
    .subscribe(dados => {
      this.pessoas = dados
    });
  }

  public onSelectedSubSystem() {
    console.log('pessoa selecionada', this.selectedPessoa);
  }
  

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
}
