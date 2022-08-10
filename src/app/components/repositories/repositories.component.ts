import { Component, OnInit } from '@angular/core';
import { Page } from 'ngx-pagination';
import repoData from './repoData.json';
interface Repo {
  title: string;
  desc: string;
  stack1: string;
  stack2: string;
  stack3: string;
}

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  constructor() { }

  totalLength: any;
  page: number = 1;

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    this.page = page;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  repos: Repo[] = repoData;

}
