import { tags } from "typia";

interface MyType {
  email: string & tags.Format<"email">
  date: string & tags.Format<"date">;
  uri: string & tags.Format<"uri">;
  int: number & tags.Type<"int32">;
  double: number & tags.Type<"double">;
}

export type {MyType};
