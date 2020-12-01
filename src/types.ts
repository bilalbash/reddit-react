import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";

export type MyContext = {
  // @ts-ignore
  req: Request & { session: Express.Session };
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  res: Response;
};
