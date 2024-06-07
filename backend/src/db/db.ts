import pg from "pg";
import { GET_DOG_BY_ID } from "./constants";
import { Dog, DogResponse } from "./types";

export const getDogById = async (
  id: number,
  client: pg.PoolClient
): Promise<DogResponse> => {
  let dog = null;
  let err = null;
  try {
    const queryRes = await client.query(GET_DOG_BY_ID, [id]);
    if (queryRes.rows && queryRes.rows.length > 0) {
      dog = queryRes.rows[0] as Dog;
    }
  } catch (error) {
    err = error;
    console.log("Detect error: ", error);
  } finally {
    client.release();
    return {
      dog,
      err,
    };
  }
};
