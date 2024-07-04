import pg from "pg";
import { GET_DOG_BY_ID, GET_DOG_STATUS_BY_ID } from "./constants";
import { Dog, DogResponse, DogStatus, DogStatusResponse } from "./types";

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
    console.log("[getDogByID] error: ", error);
  } finally {
    client.release();
    return {
      dog,
      err,
    };
  }
};

export const getDogStatusById = async (
  id: number,
  client: pg.PoolClient
): Promise<DogStatusResponse> => {
  let dog_status = null;
  let err = null;
  try {
    const queryRes = await client.query(GET_DOG_STATUS_BY_ID, [id]);
    if (queryRes.rows && queryRes.rows.length > 0) {
      dog_status = queryRes.rows[0] as DogStatus;
    }
  } catch (error) {
    err = error;
    console.log("[getDogStatusById] error: ", error);
  } finally {
    client.release();
    return {
      dog_status,
      err,
    };
  }
};
