
import { HttpClient } from '@angular/common/http';
import { LinksService } from './../../../services/links.service';
import { Component } from '@angular/core';
import { Links } from '../model/links';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,} from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatIconModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  links:  Observable<Links[]>;



  constructor(
    private linksService : LinksService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastrService,
    public dialog: MatDialog
  ){

    this.links = this.linksService.list();
  }

  readonly displayedColumns = ['titulo', 'url', 'sufixo', 'dataCriada', 'actions'];


  refresh(){
    this.links = this.linksService.list();
  }

  onAdd(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }

  onEdit(links: Links){
    console.log("id: ", links.id);
    this.router.navigate(['edit', links.id], {relativeTo: this.route})
  }

  openDialog(){
    this.dialog.open(DialogCardComponent, {
      width: '250px'
    });
  }

  onDelete(links: Links){


    this.openDialog()
    this.linksService.delete(links.id).subscribe({
      next:() => {
        this.refresh();
        this.toastService.success("Link excluído com sucesso!");


      },
      error: () => this.toastService.error("Erro ao excluir novo link")
    });
  };

}



@Component({
  selector: 'dialog-card',
  templateUrl: 'dialog-card.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
})
export class DialogCardComponent {
  constructor(public dialogRef: MatDialogRef<DialogCardComponent>) {}

  response = false;

  responseNot(){
    this.response = false;
  }

  responseYes(){
    this.response = true;
  }
}
