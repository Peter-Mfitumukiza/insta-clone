import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {
    let resetLink = this.route.snapshot.params.reset_id;
    this.authService.checkResetId(resetLink).subscribe(
      (res:any)=>{
        if(res.status == "success"){

        }else{
          this.router.navigate(['/not-found']);
        }

      },
      erro =>{
        console.log("Error when checking resetid.");
      }
    )
  }

}
