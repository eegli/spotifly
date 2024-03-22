export type Result<T> = Ok<T> | Err;

export type Ok<T> = {
  success: true;
  value: T;
};

export type Err = {
  success: false;
  error: string;
};
