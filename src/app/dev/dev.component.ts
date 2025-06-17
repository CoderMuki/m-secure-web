import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.scss'
})
export class DevComponent implements OnInit{

  noOfDays!: number;

  ngOnInit(): void {
    this.noOfDays = this.getDayDiff()
  }

  getDayDiff() {
    let dayStarted = new Date('2025-03-26');
    let today = new Date();
    const diffinms = Math.abs(today.getTime() - dayStarted.getTime());
    const miliscsDay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(diffinms / miliscsDay);
    return differenceInDays;
  }

}
