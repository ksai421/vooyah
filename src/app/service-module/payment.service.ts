import { ConfigService } from '@app/config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export type CurrencyType = 'INR' | 'USD';

interface PaymentResponse {
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  public async getPaymentUrl(
    orderId: string,
    currency: CurrencyType = 'INR',
    amount: number,
    language: string = 'EN',
    merchant_param1: string = 'custom-travel',
    merchant_param2: string = 'browser'
  ): Promise<string> {
    const { origin } = window.location;
    const responseUrl = `${origin}${this.config.apiUrl.paymentResponse}`;
    const inputParams = `order_id=${orderId}&currency=${currency}&language=${language}&amount=${amount}&merchant_param1=${merchant_param1}&merchant_param2=${merchant_param2}`;
    const body = {
      type: 'Request',
      content: `${inputParams}&redirect_url=${responseUrl}&cancel_url=${responseUrl}`,
    };

    const response = await this.http
      .post<PaymentResponse>(this.config.apiUrl.payments, body)
      .toPromise();

    return response.url;
  }

  public async redirectToPayment(
    orderId: string,
    amount: number,
    currency: CurrencyType = 'INR',
    language: string = 'EN',
    merchant_param1: string = 'custom-travel',
    merchant_param2: string = 'browser'
  ) {
    const url = await this.getPaymentUrl(
      orderId,
      currency,
      amount,
      language,
      merchant_param1,
      merchant_param2
    );
    window.location.href = url;
  }
}
