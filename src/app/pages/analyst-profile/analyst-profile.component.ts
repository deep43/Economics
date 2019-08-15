import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {filter, takeUntil, startWith, pairwise} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-analyst-profile',
  templateUrl: './analyst-profile.component.html',
  styleUrls: ['./analyst-profile.component.scss']
})
export class AnalystProfileComponent implements OnInit {
  teams = [
    {id: 1, image: '/assets/images/images_1.jpg', name: 'Avery Shenfeld', phone: '(416) 594-7356', email: 'Avery.Shenfeld@cibc.com'},
    {id: 2, image: '/assets/images/images_1.jpg', name: 'Benjamin Tal', phone: '(416) 956-3698', email: 'Benjamin.Tal@cibc.com'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
    {id: 5, image: '/assets/images/images_1.jpg', name: 'Katherine Judge', phone: '(416) 956-6527', email: 'Katherine.Judge@cibc.com'},
    {id: 6, image: '/assets/images/images_1.jpg', name: 'Taylor Rochwerg', phone: '416-594-7355', email: 'taylor.rochwerg@cibc.ca'},
    {id: 3, image: '/assets/images/images_1.jpg', name: 'Andrew Grantham', phone: '(416) 956-3219', email: 'Andrew.Grantham@cibc.com'},
    {id: 4, image: '/assets/images/images_1.jpg', name: 'Royce Mendes', phone: '(416) 594-7354', email: 'Royce.Mendes@cibc.com'},
  ];
  team: any = {
    id: 1,
    image: '/assets/images/images_1.jpg',
    name: 'Avery Shenfeld',
    phone: '(416) 594-7356',
    email: 'Avery.Shenfeld@cibc.com'
  };
  public destroyed = new Subject<any>();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd),
      pairwise(),
      filter((events: RouterEvent[]) => events[0].url === events[1].url),
      startWith('Initial call'),
      takeUntil(this.destroyed)
    ).subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.team = this.router.getCurrentNavigation().extras.state; // should log out 'bar'
      }
    });
    /*if (this.router.getCurrentNavigation().extras.state) {
      this.team = this.router.getCurrentNavigation().extras.state; // should log out 'bar'
    }*/
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
