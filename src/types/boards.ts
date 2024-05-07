export interface BoardsType {
  boards?: BoardsEntity[] | null;
}
export interface BoardsEntity {
  id: number;
  name: string;
  createdAt: string;
  bcfs?: BcfsEntity[] | null;
}
export interface BcfsEntity {
  id: number;
  name: string;
  createdAt: string;
  bcfBoards?: BcfBoardsEntity[] | null;
}
export interface BcfBoardsEntity {
  id: number;
  name: string;
  createdAt: string;
}
