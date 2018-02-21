import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { AlertController } from "ionic-angular";
import { QuotesService } from '../../services/quote'


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: { category: String, quotes: Quote[], icon: string }[];

  constructor(public navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController, private quotesService: QuotesService) {
  }

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  //   console.log(this.quoteGroup);
  //   Add elvis operator (?) in template to use this approch 
  // }
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
    console.log(this.quoteGroup);
  }

  onAddFavorites(selectedQuotes: Quote) {
    const alert = this.alertCtrl.create({

      title: 'Add Quote',
      subTitle: 'Are you Sure?',
      message: 'Are you sure you want to add the quote ?',
      buttons: [
        {

          text: 'Yes, Go Ahead',
          handler: () => {
            this.quotesService.addQuoteToFavorites(selectedQuotes);
          }
        },
        {
          text: 'No, I changed my Mind',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        }
      ]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {

    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }
}
