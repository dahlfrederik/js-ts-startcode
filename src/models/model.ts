import facade from "../facades/DummyDB-facade";
import { IFriend } from "../interfaces/IFriend";

export const getFriends = async () => {
  const promiseArray: Promise<Array<IFriend>> = facade.getAllFriends();
  const listOfFriends: Array<IFriend> = await promiseArray;
  return listOfFriends;
};
