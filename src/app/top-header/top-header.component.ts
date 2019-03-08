import { Component, OnInit, OnDestroy } from '@angular/core';
import { AllServiceService } from '../services/all-service.service';
import { Subscription } from 'rxjs';
import { MessageModalComponent } from '../modals/message-modal/message-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {
  public UserIsAuthenticated: boolean = false;
  constructor(private service: AllServiceService,private dialogService:DialogService) { }

  ngOnInit() {
    if (this.service.getAuthStatus()) {
      this.UserIsAuthenticated = true;
    }
    this.service.getIsAuthenticated().subscribe(data => {
      this.UserIsAuthenticated = data;
    });
  }

  onLogout() {
    this.service.logout();
    let disposable = this.dialogService.addDialog(MessageModalComponent, {
      title: 'Logout',
      message: 'User Logged out successfully'
    })
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          // alert('accepted');
        }
        else {
          // alert('declined');
        }
      });
  }
}
