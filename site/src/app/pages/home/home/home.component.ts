
import { HttpClient } from '@angular/common/http';
import { LinksService } from './../../../services/links.service';
import { Component } from '@angular/core';
import { Links } from '../model/links';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
  ){

    this.links = this.linksService.list();
  }

  readonly displayedColumns = ['titulo', 'url', 'sufixo', 'dataCriada', 'actions'];


  onAdd(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }

  onEdit(links: Links){
    console.log("id: ", links.id);
    this.router.navigate(['edit', links.id], {relativeTo: this.route})
  }

}
