import { type Dispatch, type SetStateAction } from "react";

export interface UserData {
  fullName: string;
  age: number;
  jobPosition: string;
}

export interface UserDataContext {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData | undefined>>;
}
// type Dispatch<T> = (value: T) => void; Функция из реакт, которая принимает значение типа T и ничего не возвращает
//  Dispatch -это просто тип, который говорит:"вот как функция setUserData должна выглядеть"
// type SetStateAction<T> = T | ((prevState: T) => T); означает либо значение типа T, либо функция,
//  которая принимает старое значение и возвращает новое. T- просто любое значение (number, string,UserData)
// (prevState: T) => T принимет старое значение и возвращает новое
// то есть: 
// Dispatch — это функция, которая берёт аргумент типа SetStateAction<UserData | undefined>
// SetStateAction говорит, что аргумент может быть: 
// UserData | undefined | ((prev: UserData | undefined) => UserData | undefined)