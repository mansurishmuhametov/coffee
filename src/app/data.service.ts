import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
    private goals = new BehaviorSubject<any>(['Elleonora', 'Patricia', 'Mariya']);
    goal = this.goals.asObservable();
    id: 1;

    constructor() {    }

    changeGoal(goal) {
        this.goals.next(goal);
    }
}
