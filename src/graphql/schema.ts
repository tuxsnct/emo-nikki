import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type GenerateDiaryOutput = {
  __typename?: 'GenerateDiaryOutput';
  date: Scalars['date']['output'];
  text: Scalars['String']['output'];
  uid: Scalars['String']['output'];
  updated_diary?: Maybe<Diaries>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "diaries" */
export type Diaries = {
  __typename?: 'diaries';
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  text: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

/** aggregated selection of "diaries" */
export type Diaries_Aggregate = {
  __typename?: 'diaries_aggregate';
  aggregate?: Maybe<Diaries_Aggregate_Fields>;
  nodes: Array<Diaries>;
};

export type Diaries_Aggregate_Bool_Exp = {
  count?: InputMaybe<Diaries_Aggregate_Bool_Exp_Count>;
};

export type Diaries_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Diaries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Diaries_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "diaries" */
export type Diaries_Aggregate_Fields = {
  __typename?: 'diaries_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Diaries_Max_Fields>;
  min?: Maybe<Diaries_Min_Fields>;
};


/** aggregate fields of "diaries" */
export type Diaries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Diaries_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "diaries" */
export type Diaries_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Diaries_Max_Order_By>;
  min?: InputMaybe<Diaries_Min_Order_By>;
};

/** input type for inserting array relation for remote table "diaries" */
export type Diaries_Arr_Rel_Insert_Input = {
  data: Array<Diaries_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Diaries_On_Conflict>;
};

/** Boolean expression to filter rows from the table "diaries". All fields are combined with a logical 'AND'. */
export type Diaries_Bool_Exp = {
  _and?: InputMaybe<Array<Diaries_Bool_Exp>>;
  _not?: InputMaybe<Diaries_Bool_Exp>;
  _or?: InputMaybe<Array<Diaries_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "diaries" */
export enum Diaries_Constraint {
  /** unique or primary key constraint on columns "id" */
  DiariesPkey = 'diaries_pkey',
  /** unique or primary key constraint on columns "uid", "date" */
  DiariesUidDateKey = 'diaries_uid_date_key'
}

/** input type for inserting data into table "diaries" */
export type Diaries_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Diaries_Max_Fields = {
  __typename?: 'diaries_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "diaries" */
export type Diaries_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Diaries_Min_Fields = {
  __typename?: 'diaries_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "diaries" */
export type Diaries_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "diaries" */
export type Diaries_Mutation_Response = {
  __typename?: 'diaries_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Diaries>;
};

/** on_conflict condition type for table "diaries" */
export type Diaries_On_Conflict = {
  constraint: Diaries_Constraint;
  update_columns?: Array<Diaries_Update_Column>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};

/** Ordering options when selecting data from "diaries". */
export type Diaries_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: diaries */
export type Diaries_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "diaries" */
export enum Diaries_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "diaries" */
export type Diaries_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "diaries" */
export type Diaries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Diaries_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Diaries_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "diaries" */
export enum Diaries_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Uid = 'uid'
}

export type Diaries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Diaries_Set_Input>;
  /** filter the rows which have to be updated */
  where: Diaries_Bool_Exp;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  created_at: Scalars['timestamp']['output'];
  date: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  text: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Messages_Aggregate_Bool_Exp_Count>;
};

export type Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesIdKey = 'messages_id_key',
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Uid = 'uid'
}

export type Messages_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "diaries" */
  delete_diaries?: Maybe<Diaries_Mutation_Response>;
  /** delete single row from the table: "diaries" */
  delete_diaries_by_pk?: Maybe<Diaries>;
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "questions" */
  delete_questions?: Maybe<Questions_Mutation_Response>;
  /** delete single row from the table: "questions" */
  delete_questions_by_pk?: Maybe<Questions>;
  /** delete data from the table: "sentiments" */
  delete_sentiments?: Maybe<Sentiments_Mutation_Response>;
  /** delete single row from the table: "sentiments" */
  delete_sentiments_by_pk?: Maybe<Sentiments>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  generate_diary?: Maybe<GenerateDiaryOutput>;
  /** insert data into the table: "diaries" */
  insert_diaries?: Maybe<Diaries_Mutation_Response>;
  /** insert a single row into the table: "diaries" */
  insert_diaries_one?: Maybe<Diaries>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "questions" */
  insert_questions?: Maybe<Questions_Mutation_Response>;
  /** insert a single row into the table: "questions" */
  insert_questions_one?: Maybe<Questions>;
  /** insert data into the table: "sentiments" */
  insert_sentiments?: Maybe<Sentiments_Mutation_Response>;
  /** insert a single row into the table: "sentiments" */
  insert_sentiments_one?: Maybe<Sentiments>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "diaries" */
  update_diaries?: Maybe<Diaries_Mutation_Response>;
  /** update single row of the table: "diaries" */
  update_diaries_by_pk?: Maybe<Diaries>;
  /** update multiples rows of table: "diaries" */
  update_diaries_many?: Maybe<Array<Maybe<Diaries_Mutation_Response>>>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "questions" */
  update_questions?: Maybe<Questions_Mutation_Response>;
  /** update single row of the table: "questions" */
  update_questions_by_pk?: Maybe<Questions>;
  /** update multiples rows of table: "questions" */
  update_questions_many?: Maybe<Array<Maybe<Questions_Mutation_Response>>>;
  /** update data of the table: "sentiments" */
  update_sentiments?: Maybe<Sentiments_Mutation_Response>;
  /** update single row of the table: "sentiments" */
  update_sentiments_by_pk?: Maybe<Sentiments>;
  /** update multiples rows of table: "sentiments" */
  update_sentiments_many?: Maybe<Array<Maybe<Sentiments_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_DiariesArgs = {
  where: Diaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Diaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_QuestionsArgs = {
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Questions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SentimentsArgs = {
  where: Sentiments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Sentiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootGenerate_DiaryArgs = {
  date?: InputMaybe<Scalars['date']['input']>;
  uid: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_DiariesArgs = {
  objects: Array<Diaries_Insert_Input>;
  on_conflict?: InputMaybe<Diaries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Diaries_OneArgs = {
  object: Diaries_Insert_Input;
  on_conflict?: InputMaybe<Diaries_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuestionsArgs = {
  objects: Array<Questions_Insert_Input>;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Questions_OneArgs = {
  object: Questions_Insert_Input;
  on_conflict?: InputMaybe<Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SentimentsArgs = {
  objects: Array<Sentiments_Insert_Input>;
  on_conflict?: InputMaybe<Sentiments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Sentiments_OneArgs = {
  object: Sentiments_Insert_Input;
  on_conflict?: InputMaybe<Sentiments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_DiariesArgs = {
  _set?: InputMaybe<Diaries_Set_Input>;
  where: Diaries_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Diaries_By_PkArgs = {
  _set?: InputMaybe<Diaries_Set_Input>;
  pk_columns: Diaries_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Diaries_ManyArgs = {
  updates: Array<Diaries_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_QuestionsArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  where: Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_By_PkArgs = {
  _set?: InputMaybe<Questions_Set_Input>;
  pk_columns: Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Questions_ManyArgs = {
  updates: Array<Questions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SentimentsArgs = {
  _inc?: InputMaybe<Sentiments_Inc_Input>;
  _set?: InputMaybe<Sentiments_Set_Input>;
  where: Sentiments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Sentiments_By_PkArgs = {
  _inc?: InputMaybe<Sentiments_Inc_Input>;
  _set?: InputMaybe<Sentiments_Set_Input>;
  pk_columns: Sentiments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Sentiments_ManyArgs = {
  updates: Array<Sentiments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "diaries" */
  diaries: Array<Diaries>;
  /** fetch aggregated fields from the table: "diaries" */
  diaries_aggregate: Diaries_Aggregate;
  /** fetch data from the table: "diaries" using primary key columns */
  diaries_by_pk?: Maybe<Diaries>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table: "sentiments" */
  sentiments: Array<Sentiments>;
  /** fetch aggregated fields from the table: "sentiments" */
  sentiments_aggregate: Sentiments_Aggregate;
  /** fetch data from the table: "sentiments" using primary key columns */
  sentiments_by_pk?: Maybe<Sentiments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootDiariesArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


export type Query_RootDiaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


export type Query_RootDiaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Query_RootQuestions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSentimentsArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


export type Query_RootSentiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


export type Query_RootSentiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "questions" */
export type Questions = {
  __typename?: 'questions';
  answer?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  question: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

/** aggregated selection of "questions" */
export type Questions_Aggregate = {
  __typename?: 'questions_aggregate';
  aggregate?: Maybe<Questions_Aggregate_Fields>;
  nodes: Array<Questions>;
};

/** aggregate fields of "questions" */
export type Questions_Aggregate_Fields = {
  __typename?: 'questions_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Questions_Max_Fields>;
  min?: Maybe<Questions_Min_Fields>;
};


/** aggregate fields of "questions" */
export type Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "questions". All fields are combined with a logical 'AND'. */
export type Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Questions_Bool_Exp>>;
  _not?: InputMaybe<Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Questions_Bool_Exp>>;
  answer?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  question?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "questions" */
export enum Questions_Constraint {
  /** unique or primary key constraint on columns "id" */
  QuestionsPkey = 'questions_pkey'
}

/** input type for inserting data into table "questions" */
export type Questions_Insert_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Questions_Max_Fields = {
  __typename?: 'questions_max_fields';
  answer?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Questions_Min_Fields = {
  __typename?: 'questions_min_fields';
  answer?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "questions" */
export type Questions_Mutation_Response = {
  __typename?: 'questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Questions>;
};

/** on_conflict condition type for table "questions" */
export type Questions_On_Conflict = {
  constraint: Questions_Constraint;
  update_columns?: Array<Questions_Update_Column>;
  where?: InputMaybe<Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "questions". */
export type Questions_Order_By = {
  answer?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  question?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: questions */
export type Questions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "questions" */
export enum Questions_Select_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "questions" */
export type Questions_Set_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "questions" */
export type Questions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Questions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Questions_Stream_Cursor_Value_Input = {
  answer?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "questions" */
export enum Questions_Update_Column {
  /** column name */
  Answer = 'answer',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Question = 'question',
  /** column name */
  Uid = 'uid'
}

export type Questions_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Questions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Questions_Bool_Exp;
};

/** columns and relationships of "sentiments" */
export type Sentiments = {
  __typename?: 'sentiments';
  created_at: Scalars['timestamptz']['output'];
  date: Scalars['date']['output'];
  id: Scalars['uuid']['output'];
  negative: Scalars['Int']['output'];
  positive: Scalars['Int']['output'];
  uid: Scalars['String']['output'];
};

/** aggregated selection of "sentiments" */
export type Sentiments_Aggregate = {
  __typename?: 'sentiments_aggregate';
  aggregate?: Maybe<Sentiments_Aggregate_Fields>;
  nodes: Array<Sentiments>;
};

export type Sentiments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Sentiments_Aggregate_Bool_Exp_Count>;
};

export type Sentiments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Sentiments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Sentiments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "sentiments" */
export type Sentiments_Aggregate_Fields = {
  __typename?: 'sentiments_aggregate_fields';
  avg?: Maybe<Sentiments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Sentiments_Max_Fields>;
  min?: Maybe<Sentiments_Min_Fields>;
  stddev?: Maybe<Sentiments_Stddev_Fields>;
  stddev_pop?: Maybe<Sentiments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Sentiments_Stddev_Samp_Fields>;
  sum?: Maybe<Sentiments_Sum_Fields>;
  var_pop?: Maybe<Sentiments_Var_Pop_Fields>;
  var_samp?: Maybe<Sentiments_Var_Samp_Fields>;
  variance?: Maybe<Sentiments_Variance_Fields>;
};


/** aggregate fields of "sentiments" */
export type Sentiments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Sentiments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sentiments" */
export type Sentiments_Aggregate_Order_By = {
  avg?: InputMaybe<Sentiments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Sentiments_Max_Order_By>;
  min?: InputMaybe<Sentiments_Min_Order_By>;
  stddev?: InputMaybe<Sentiments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Sentiments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Sentiments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Sentiments_Sum_Order_By>;
  var_pop?: InputMaybe<Sentiments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Sentiments_Var_Samp_Order_By>;
  variance?: InputMaybe<Sentiments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "sentiments" */
export type Sentiments_Arr_Rel_Insert_Input = {
  data: Array<Sentiments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Sentiments_On_Conflict>;
};

/** aggregate avg on columns */
export type Sentiments_Avg_Fields = {
  __typename?: 'sentiments_avg_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "sentiments" */
export type Sentiments_Avg_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "sentiments". All fields are combined with a logical 'AND'. */
export type Sentiments_Bool_Exp = {
  _and?: InputMaybe<Array<Sentiments_Bool_Exp>>;
  _not?: InputMaybe<Sentiments_Bool_Exp>;
  _or?: InputMaybe<Array<Sentiments_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  negative?: InputMaybe<Int_Comparison_Exp>;
  positive?: InputMaybe<Int_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "sentiments" */
export enum Sentiments_Constraint {
  /** unique or primary key constraint on columns "id" */
  SentimentsPkey = 'sentiments_pkey',
  /** unique or primary key constraint on columns "uid", "date" */
  SentimentsUidDateKey = 'sentiments_uid_date_key'
}

/** input type for incrementing numeric columns in table "sentiments" */
export type Sentiments_Inc_Input = {
  negative?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "sentiments" */
export type Sentiments_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  negative?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Sentiments_Max_Fields = {
  __typename?: 'sentiments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  negative?: Maybe<Scalars['Int']['output']>;
  positive?: Maybe<Scalars['Int']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "sentiments" */
export type Sentiments_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Sentiments_Min_Fields = {
  __typename?: 'sentiments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  negative?: Maybe<Scalars['Int']['output']>;
  positive?: Maybe<Scalars['Int']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "sentiments" */
export type Sentiments_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "sentiments" */
export type Sentiments_Mutation_Response = {
  __typename?: 'sentiments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sentiments>;
};

/** on_conflict condition type for table "sentiments" */
export type Sentiments_On_Conflict = {
  constraint: Sentiments_Constraint;
  update_columns?: Array<Sentiments_Update_Column>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};

/** Ordering options when selecting data from "sentiments". */
export type Sentiments_Order_By = {
  created_at?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: sentiments */
export type Sentiments_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "sentiments" */
export enum Sentiments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Negative = 'negative',
  /** column name */
  Positive = 'positive',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "sentiments" */
export type Sentiments_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  negative?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Sentiments_Stddev_Fields = {
  __typename?: 'sentiments_stddev_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "sentiments" */
export type Sentiments_Stddev_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Sentiments_Stddev_Pop_Fields = {
  __typename?: 'sentiments_stddev_pop_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "sentiments" */
export type Sentiments_Stddev_Pop_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Sentiments_Stddev_Samp_Fields = {
  __typename?: 'sentiments_stddev_samp_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "sentiments" */
export type Sentiments_Stddev_Samp_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "sentiments" */
export type Sentiments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sentiments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Sentiments_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  negative?: InputMaybe<Scalars['Int']['input']>;
  positive?: InputMaybe<Scalars['Int']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Sentiments_Sum_Fields = {
  __typename?: 'sentiments_sum_fields';
  negative?: Maybe<Scalars['Int']['output']>;
  positive?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "sentiments" */
export type Sentiments_Sum_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** update columns of table "sentiments" */
export enum Sentiments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Negative = 'negative',
  /** column name */
  Positive = 'positive',
  /** column name */
  Uid = 'uid'
}

export type Sentiments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Sentiments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Sentiments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Sentiments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Sentiments_Var_Pop_Fields = {
  __typename?: 'sentiments_var_pop_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "sentiments" */
export type Sentiments_Var_Pop_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Sentiments_Var_Samp_Fields = {
  __typename?: 'sentiments_var_samp_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "sentiments" */
export type Sentiments_Var_Samp_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Sentiments_Variance_Fields = {
  __typename?: 'sentiments_variance_fields';
  negative?: Maybe<Scalars['Float']['output']>;
  positive?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "sentiments" */
export type Sentiments_Variance_Order_By = {
  negative?: InputMaybe<Order_By>;
  positive?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "diaries" */
  diaries: Array<Diaries>;
  /** fetch aggregated fields from the table: "diaries" */
  diaries_aggregate: Diaries_Aggregate;
  /** fetch data from the table: "diaries" using primary key columns */
  diaries_by_pk?: Maybe<Diaries>;
  /** fetch data from the table in a streaming manner: "diaries" */
  diaries_stream: Array<Diaries>;
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "questions" */
  questions: Array<Questions>;
  /** fetch aggregated fields from the table: "questions" */
  questions_aggregate: Questions_Aggregate;
  /** fetch data from the table: "questions" using primary key columns */
  questions_by_pk?: Maybe<Questions>;
  /** fetch data from the table in a streaming manner: "questions" */
  questions_stream: Array<Questions>;
  /** fetch data from the table: "sentiments" */
  sentiments: Array<Sentiments>;
  /** fetch aggregated fields from the table: "sentiments" */
  sentiments_aggregate: Sentiments_Aggregate;
  /** fetch data from the table: "sentiments" using primary key columns */
  sentiments_by_pk?: Maybe<Sentiments>;
  /** fetch data from the table in a streaming manner: "sentiments" */
  sentiments_stream: Array<Sentiments>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootDiariesArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


export type Subscription_RootDiaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


export type Subscription_RootDiaries_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootDiaries_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Diaries_Stream_Cursor_Input>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootQuestionsArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Questions_Order_By>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootQuestions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootQuestions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Questions_Stream_Cursor_Input>>;
  where?: InputMaybe<Questions_Bool_Exp>;
};


export type Subscription_RootSentimentsArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


export type Subscription_RootSentiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


export type Subscription_RootSentiments_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootSentiments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Sentiments_Stream_Cursor_Input>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  /** fetch data from the table: "diaries" */
  diaries: Array<Diaries>;
  /** fetch aggregated fields from the table: "diaries" */
  diaries_aggregate: Diaries_Aggregate;
  id: Scalars['uuid']['output'];
  /** fetch data from the table: "messages" */
  messages: Array<Messages>;
  /** fetch aggregated fields from the table: "messages" */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "sentiments" */
  sentiments: Array<Sentiments>;
  /** fetch aggregated fields from the table: "sentiments" */
  sentiments_aggregate: Sentiments_Aggregate;
  uid: Scalars['String']['output'];
};


/** columns and relationships of "users" */
export type UsersDiariesArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersDiaries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Diaries_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Diaries_Order_By>>;
  where?: InputMaybe<Diaries_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSentimentsArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersSentiments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Sentiments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Sentiments_Order_By>>;
  where?: InputMaybe<Sentiments_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  diaries?: InputMaybe<Diaries_Bool_Exp>;
  diaries_aggregate?: InputMaybe<Diaries_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  sentiments?: InputMaybe<Sentiments_Bool_Exp>;
  sentiments_aggregate?: InputMaybe<Sentiments_Aggregate_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "uid" */
  UsersUidKey = 'users_uid_key'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  diaries?: InputMaybe<Diaries_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  sentiments?: InputMaybe<Sentiments_Arr_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  diaries_aggregate?: InputMaybe<Diaries_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  sentiments_aggregate?: InputMaybe<Sentiments_Aggregate_Order_By>;
  uid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Uid = 'uid'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Uid = 'uid'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AddDiaryTodayMutationVariables = Exact<{
  text: Scalars['String']['input'];
  uid: Scalars['String']['input'];
  date: Scalars['date']['input'];
}>;


export type AddDiaryTodayMutation = { __typename?: 'mutation_root', insert_diaries?: { __typename?: 'diaries_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'diaries', created_at: any, date: any, id: any, text: string, uid: string }> } | null };

export type AddMessageMutationVariables = Exact<{
  text: Scalars['String']['input'];
  date: Scalars['date']['input'];
  uid: Scalars['String']['input'];
  negative: Scalars['Int']['input'];
  positive: Scalars['Int']['input'];
}>;


export type AddMessageMutation = { __typename?: 'mutation_root', insert_messages_one?: { __typename?: 'messages', created_at: any, date: any, id: any, text: string, uid: string } | null, insert_sentiments_one?: { __typename?: 'sentiments', created_at: any, date: any, id: any, negative: number, positive: number, uid: string } | null, update_sentiments?: { __typename?: 'sentiments_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'sentiments', created_at: any, date: any, id: any, negative: number, positive: number, uid: string }> } | null };

export type AddUserMutationVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', created_at: any, id: any, uid: string }> } | null };

export type DeleteUserMutationVariables = Exact<{
  uid: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', delete_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', created_at: any, id: any, uid: string }> } | null };

export type GenerateDiaryMutationVariables = Exact<{
  uid: Scalars['String']['input'];
  date?: InputMaybe<Scalars['date']['input']>;
}>;


export type GenerateDiaryMutation = { __typename?: 'mutation_root', generate_diary?: { __typename?: 'GenerateDiaryOutput', date: any, text: string, uid: string, updated_diary?: { __typename?: 'diaries', created_at: any, date: any, id: any, text: string, uid: string } | null } | null };

export type GetDiaryTodayQueryVariables = Exact<{
  date: Scalars['date']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetDiaryTodayQuery = { __typename?: 'query_root', diaries: Array<{ __typename?: 'diaries', created_at: any, date: any, id: any, text: string, uid: string }> };

export type GetMessagesQueryVariables = Exact<{
  uid: Scalars['String']['input'];
  date: Scalars['date']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'query_root', messages: Array<{ __typename?: 'messages', created_at: any, date: any, id: any, text: string, uid: string }> };

export type GetSentimentAtQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']['input']>;
  date: Scalars['date']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetSentimentAtQuery = { __typename?: 'query_root', sentiments: Array<{ __typename?: 'sentiments', created_at: any, date: any, id: any, negative: number, positive: number, uid: string }> };

export type GetSentimentsBetweenQueryVariables = Exact<{
  count?: InputMaybe<Scalars['Int']['input']>;
  dateFrom: Scalars['date']['input'];
  dateTo: Scalars['date']['input'];
  uid: Scalars['String']['input'];
}>;


export type GetSentimentsBetweenQuery = { __typename?: 'query_root', sentiments: Array<{ __typename?: 'sentiments', created_at: any, date: any, id: any, negative: number, positive: number, uid: string }> };

export type GetUserQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', created_at: any, id: any, uid: string }> };


export const AddDiaryTodayDocument = gql`
    mutation AddDiaryToday($text: String!, $uid: String!, $date: date!) {
  insert_diaries(
    objects: {text: $text, uid: $uid, date: $date}
    on_conflict: {constraint: diaries_uid_date_key}
  ) {
    affected_rows
    returning {
      created_at
      date
      id
      text
      uid
    }
  }
}
    `;
export const AddMessageDocument = gql`
    mutation AddMessage($text: String!, $date: date!, $uid: String!, $negative: Int!, $positive: Int!) {
  insert_messages_one(object: {date: $date, text: $text, uid: $uid}) {
    created_at
    date
    id
    text
    uid
  }
  insert_sentiments_one(
    object: {date: $date, uid: $uid}
    on_conflict: {constraint: sentiments_uid_date_key}
  ) {
    created_at
    date
    id
    negative
    positive
    uid
  }
  update_sentiments(
    where: {date: {_eq: $date}, uid: {_eq: $uid}}
    _inc: {negative: $negative, positive: $positive}
  ) {
    affected_rows
    returning {
      created_at
      date
      id
      negative
      positive
      uid
    }
  }
}
    `;
export const AddUserDocument = gql`
    mutation AddUser($uid: String!) {
  insert_users(objects: {uid: $uid}) {
    returning {
      created_at
      id
      uid
    }
  }
}
    `;
export const DeleteUserDocument = gql`
    mutation DeleteUser($uid: String!) {
  delete_users(where: {uid: {_eq: $uid}}) {
    affected_rows
    returning {
      created_at
      id
      uid
    }
  }
}
    `;
export const GenerateDiaryDocument = gql`
    mutation GenerateDiary($uid: String!, $date: date) {
  generate_diary(uid: $uid, date: $date) {
    date
    text
    uid
    updated_diary {
      created_at
      date
      id
      text
      uid
    }
  }
}
    `;
export const GetDiaryTodayDocument = gql`
    query GetDiaryToday($date: date!, $uid: String!) {
  diaries(where: {date: {_eq: $date}, uid: {_eq: $uid}}) {
    created_at
    date
    id
    text
    uid
  }
}
    `;
export const GetMessagesDocument = gql`
    query GetMessages($uid: String!, $date: date!) {
  messages(
    where: {uid: {_eq: $uid}, date: {_eq: $date}}
    order_by: {created_at: asc}
  ) {
    created_at
    date
    id
    text
    uid
  }
}
    `;
export const GetSentimentAtDocument = gql`
    query GetSentimentAt($count: Int, $date: date!, $uid: String!) {
  sentiments(
    limit: $count
    order_by: {date: asc}
    where: {date: {_eq: $date}, uid: {_eq: $uid}}
  ) {
    created_at
    date
    id
    negative
    positive
    uid
  }
}
    `;
export const GetSentimentsBetweenDocument = gql`
    query GetSentimentsBetween($count: Int, $dateFrom: date!, $dateTo: date!, $uid: String!) {
  sentiments(
    limit: $count
    order_by: {date: asc}
    where: {uid: {_eq: $uid}, _and: {date: {_gte: $dateFrom, _lte: $dateTo}}}
  ) {
    created_at
    date
    id
    negative
    positive
    uid
  }
}
    `;
export const GetUserDocument = gql`
    query GetUser($uid: String) {
  users(where: {uid: {_eq: $uid}}) {
    created_at
    id
    uid
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    AddDiaryToday(variables: AddDiaryTodayMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddDiaryTodayMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddDiaryTodayMutation>(AddDiaryTodayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddDiaryToday', 'mutation', variables);
    },
    AddMessage(variables: AddMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddMessageMutation>(AddMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddMessage', 'mutation', variables);
    },
    AddUser(variables: AddUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<AddUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserMutation>(AddUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AddUser', 'mutation', variables);
    },
    DeleteUser(variables: DeleteUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DeleteUser', 'mutation', variables);
    },
    GenerateDiary(variables: GenerateDiaryMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GenerateDiaryMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GenerateDiaryMutation>(GenerateDiaryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GenerateDiary', 'mutation', variables);
    },
    GetDiaryToday(variables: GetDiaryTodayQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetDiaryTodayQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDiaryTodayQuery>(GetDiaryTodayDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetDiaryToday', 'query', variables);
    },
    GetMessages(variables: GetMessagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMessagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMessagesQuery>(GetMessagesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMessages', 'query', variables);
    },
    GetSentimentAt(variables: GetSentimentAtQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSentimentAtQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSentimentAtQuery>(GetSentimentAtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSentimentAt', 'query', variables);
    },
    GetSentimentsBetween(variables: GetSentimentsBetweenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSentimentsBetweenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSentimentsBetweenQuery>(GetSentimentsBetweenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSentimentsBetween', 'query', variables);
    },
    GetUser(variables?: GetUserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserQuery>(GetUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUser', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;