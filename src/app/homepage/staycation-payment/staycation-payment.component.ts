import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateAWSStaycationTransactionModelInput } from '@app/service-module/aws-current-itinerary.service';
import { StaycationService } from '@app/staycation/service-module/staycation.service';
@Component({
  selector: 'app-staycation-payment',
  templateUrl: './staycation-payment.component.html',
  styleUrls: ['./staycation-payment.component.scss'],
})
export class StaycationPaymentComponent implements OnInit {
  params;
  transactionStatus: string;
  transactionId: string;
  polling = true;
  constructor(private staycationService: StaycationService) {}

  ngOnInit() {
    let AWSStaycationTransactionType: CreateAWSStaycationTransactionModelInput = JSON.parse(
      localStorage.getItem('staycationTransaction')
    );
    this.transactionId = AWSStaycationTransactionType.transactionId;
    this.dbPoll();
  }
  dbPoll() {
    try {
      var status = setInterval(async () => {
        await this.staycationService
          .getStaycationWithTransactionId(this.transactionId)
          .then((res) => {
            this.transactionStatus = res.transactionStatus;
            console.log('poll', this.transactionStatus);
            if (
              this.transactionStatus == 'completedFailed' ||
              this.transactionStatus == 'completedSuccess'
            ) {
              this.polling = false;
              clearInterval(status);
            }
          });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }
  async updateTransactionStatus() {
    //   await this.staycationService
    //     .updateStaycationTransactionStatus()
    //     .then((response) => {
    //       console.log('update status', response);
    //     })
    //     .catch((error) => {
    //       console.log('updating error', error);
    //     });
  }
}
