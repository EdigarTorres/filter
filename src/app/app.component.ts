import { UsersList } from 'src/app/data/users-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = UsersList;
    }, 1000);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOptions) {
    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }
  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);
    ('');

    filteredList = this.filterUsersListByStatus(
      filterOptions.status,
      filteredList
    );

    return filteredList;
  }

  filterUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined || name === '';

    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) =>
      user.nome.toLowerCase().includes(name.toLowerCase())
    );

    return filteredList;
  }

  filterUsersListByStatus(
    status: boolean | undefined,
    usersList: IUser[]
  ): IUser[] {
    const STAUS_NOT_SET = status === undefined;

    if (STAUS_NOT_SET) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
  }
}
