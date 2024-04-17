import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatTableModule} from '@angular/material/table'
import { MatIconButton } from '@angular/material/button';
import { AuthGuard } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gerenciador de links';

  constructor(private authGuard: AuthGuard){

  }

  logoff(){
    this.authGuard.logoff();
  }

}
