import {Guid} from 'guid-typescript';

export interface Todo {
  name: string,
  date: any | object,
  id: Guid
}
