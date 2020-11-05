import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export enum Role {
  Root = 'ROOT',
  Admin = 'ADMIN',
  User = 'USER',
  Viewer = 'VIEWER'
}

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  rule: Rule;
  docs: Array<Document>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};


export type UserDocsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DocumentWhereUniqueInput>;
  after?: Maybe<DocumentWhereUniqueInput>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  users: Array<User>;
  tags: Array<Tag>;
  helloworld?: Maybe<Scalars['String']>;
  documents: Array<Document>;
  search?: Maybe<Array<Maybe<Document>>>;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TagWhereUniqueInput>;
  after?: Maybe<TagWhereUniqueInput>;
};


export type QueryDocumentsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DocumentWhereUniqueInput>;
  after?: Maybe<DocumentWhereUniqueInput>;
};


export type QuerySearchArgs = {
  query?: Maybe<Scalars['String']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Int'];
  value: Scalars['String'];
  doc: Array<Document>;
};


export type TagDocArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<DocumentWhereUniqueInput>;
  after?: Maybe<DocumentWhereUniqueInput>;
};

export type Attachment = {
  __typename?: 'Attachment';
  id: Scalars['Int'];
  doc: Document;
  docId: Scalars['Int'];
  file_url?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
};

export type Document = {
  __typename?: 'Document';
  id: Scalars['Int'];
  content: Scalars['String'];
  doc_number: Scalars['String'];
  doc_date: Scalars['String'];
  doc_type: Scalars['String'];
  file_url?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
  tags: Array<Tag>;
  attachment: Array<Attachment>;
};


export type DocumentTagsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<TagWhereUniqueInput>;
  after?: Maybe<TagWhereUniqueInput>;
};


export type DocumentAttachmentArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<AttachmentWhereUniqueInput>;
  after?: Maybe<AttachmentWhereUniqueInput>;
};

export type TagInput = {
  value: Array<Maybe<Scalars['String']>>;
};

export enum Rule {
  Admin = 'ADMIN',
  User = 'USER',
  Viewer = 'VIEWER'
}

export type DocumentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  doc_number?: Maybe<Scalars['String']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type UserCreateInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  fname?: Maybe<Scalars['String']>;
  lname?: Maybe<Scalars['String']>;
  rule?: Maybe<Rule>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  docs?: Maybe<DocumentCreateManyWithoutUserInput>;
};

export type UserUpdateInput = {
  username?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  fname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  lname?: Maybe<NullableStringFieldUpdateOperationsInput>;
  rule?: Maybe<EnumRuleFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  docs?: Maybe<DocumentUpdateManyWithoutUserInput>;
};

export type TagWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
};

export type AttachmentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DocumentCreateManyWithoutUserInput = {
  create?: Maybe<Array<DocumentCreateWithoutUserInput>>;
  connect?: Maybe<Array<DocumentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<DocumentCreateOrConnectWithoutUserInput>>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type EnumRuleFieldUpdateOperationsInput = {
  set?: Maybe<Rule>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DocumentUpdateManyWithoutUserInput = {
  create?: Maybe<Array<DocumentCreateWithoutUserInput>>;
  connect?: Maybe<Array<DocumentWhereUniqueInput>>;
  set?: Maybe<Array<DocumentWhereUniqueInput>>;
  disconnect?: Maybe<Array<DocumentWhereUniqueInput>>;
  delete?: Maybe<Array<DocumentWhereUniqueInput>>;
  update?: Maybe<Array<DocumentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: Maybe<Array<DocumentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<DocumentScalarWhereInput>>;
  upsert?: Maybe<Array<DocumentUpsertWithWhereUniqueWithoutUserInput>>;
  connectOrCreate?: Maybe<Array<DocumentCreateOrConnectWithoutUserInput>>;
};

export type DocumentCreateWithoutUserInput = {
  content: Scalars['String'];
  doc_number: Scalars['String'];
  doc_date: Scalars['String'];
  doc_type: Scalars['String'];
  file_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  tags?: Maybe<TagCreateManyWithoutDocInput>;
  attachment?: Maybe<AttachmentCreateManyWithoutDocInput>;
};

export type DocumentCreateOrConnectWithoutUserInput = {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutUserInput;
};

export type DocumentUpdateWithWhereUniqueWithoutUserInput = {
  where: DocumentWhereUniqueInput;
  data: DocumentUpdateWithoutUserDataInput;
};

export type DocumentUpdateManyWithWhereNestedInput = {
  where: DocumentScalarWhereInput;
  data: DocumentUpdateManyDataInput;
};

export type DocumentScalarWhereInput = {
  AND?: Maybe<Array<DocumentScalarWhereInput>>;
  OR?: Maybe<Array<DocumentScalarWhereInput>>;
  NOT?: Maybe<Array<DocumentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  content?: Maybe<StringFilter>;
  doc_number?: Maybe<StringFilter>;
  doc_date?: Maybe<StringFilter>;
  doc_type?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
  file_url?: Maybe<StringNullableFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type DocumentUpsertWithWhereUniqueWithoutUserInput = {
  where: DocumentWhereUniqueInput;
  update: DocumentUpdateWithoutUserDataInput;
  create: DocumentCreateWithoutUserInput;
};

export type TagCreateManyWithoutDocInput = {
  create?: Maybe<Array<TagCreateWithoutDocInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutDocumentInput>>;
};

export type AttachmentCreateManyWithoutDocInput = {
  create?: Maybe<Array<AttachmentCreateWithoutDocInput>>;
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<AttachmentCreateOrConnectWithoutDocumentInput>>;
};

export type DocumentUpdateWithoutUserDataInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  doc_number?: Maybe<StringFieldUpdateOperationsInput>;
  doc_date?: Maybe<StringFieldUpdateOperationsInput>;
  doc_type?: Maybe<StringFieldUpdateOperationsInput>;
  file_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  tags?: Maybe<TagUpdateManyWithoutDocInput>;
  attachment?: Maybe<AttachmentUpdateManyWithoutDocInput>;
};

export type DocumentUpdateManyDataInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  doc_number?: Maybe<StringFieldUpdateOperationsInput>;
  doc_date?: Maybe<StringFieldUpdateOperationsInput>;
  doc_type?: Maybe<StringFieldUpdateOperationsInput>;
  file_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type TagCreateWithoutDocInput = {
  value: Scalars['String'];
};

export type TagCreateOrConnectWithoutDocumentInput = {
  where: TagWhereUniqueInput;
  create: TagCreateWithoutDocInput;
};

export type AttachmentCreateWithoutDocInput = {
  file_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type AttachmentCreateOrConnectWithoutDocumentInput = {
  where: AttachmentWhereUniqueInput;
  create: AttachmentCreateWithoutDocInput;
};

export type TagUpdateManyWithoutDocInput = {
  create?: Maybe<Array<TagCreateWithoutDocInput>>;
  connect?: Maybe<Array<TagWhereUniqueInput>>;
  set?: Maybe<Array<TagWhereUniqueInput>>;
  disconnect?: Maybe<Array<TagWhereUniqueInput>>;
  delete?: Maybe<Array<TagWhereUniqueInput>>;
  update?: Maybe<Array<TagUpdateWithWhereUniqueWithoutDocInput>>;
  updateMany?: Maybe<Array<TagUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<TagScalarWhereInput>>;
  upsert?: Maybe<Array<TagUpsertWithWhereUniqueWithoutDocInput>>;
  connectOrCreate?: Maybe<Array<TagCreateOrConnectWithoutDocumentInput>>;
};

export type AttachmentUpdateManyWithoutDocInput = {
  create?: Maybe<Array<AttachmentCreateWithoutDocInput>>;
  connect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  set?: Maybe<Array<AttachmentWhereUniqueInput>>;
  disconnect?: Maybe<Array<AttachmentWhereUniqueInput>>;
  delete?: Maybe<Array<AttachmentWhereUniqueInput>>;
  update?: Maybe<Array<AttachmentUpdateWithWhereUniqueWithoutDocInput>>;
  updateMany?: Maybe<Array<AttachmentUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<AttachmentScalarWhereInput>>;
  upsert?: Maybe<Array<AttachmentUpsertWithWhereUniqueWithoutDocInput>>;
  connectOrCreate?: Maybe<Array<AttachmentCreateOrConnectWithoutDocumentInput>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type TagUpdateWithWhereUniqueWithoutDocInput = {
  where: TagWhereUniqueInput;
  data: TagUpdateWithoutDocDataInput;
};

export type TagUpdateManyWithWhereNestedInput = {
  where: TagScalarWhereInput;
  data: TagUpdateManyDataInput;
};

export type TagScalarWhereInput = {
  AND?: Maybe<Array<TagScalarWhereInput>>;
  OR?: Maybe<Array<TagScalarWhereInput>>;
  NOT?: Maybe<Array<TagScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  value?: Maybe<StringFilter>;
};

export type TagUpsertWithWhereUniqueWithoutDocInput = {
  where: TagWhereUniqueInput;
  update: TagUpdateWithoutDocDataInput;
  create: TagCreateWithoutDocInput;
};

export type AttachmentUpdateWithWhereUniqueWithoutDocInput = {
  where: AttachmentWhereUniqueInput;
  data: AttachmentUpdateWithoutDocDataInput;
};

export type AttachmentUpdateManyWithWhereNestedInput = {
  where: AttachmentScalarWhereInput;
  data: AttachmentUpdateManyDataInput;
};

export type AttachmentScalarWhereInput = {
  AND?: Maybe<Array<AttachmentScalarWhereInput>>;
  OR?: Maybe<Array<AttachmentScalarWhereInput>>;
  NOT?: Maybe<Array<AttachmentScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  file_url?: Maybe<StringNullableFilter>;
  docId?: Maybe<IntFilter>;
  created_at?: Maybe<DateTimeFilter>;
  updated_at?: Maybe<DateTimeFilter>;
};

export type AttachmentUpsertWithWhereUniqueWithoutDocInput = {
  where: AttachmentWhereUniqueInput;
  update: AttachmentUpdateWithoutDocDataInput;
  create: AttachmentCreateWithoutDocInput;
};

export type TagUpdateWithoutDocDataInput = {
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TagUpdateManyDataInput = {
  value?: Maybe<StringFieldUpdateOperationsInput>;
};

export type AttachmentUpdateWithoutDocDataInput = {
  file_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type AttachmentUpdateManyDataInput = {
  file_url?: Maybe<NullableStringFieldUpdateOperationsInput>;
  created_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updated_at?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneUser: User;
  updateOneUser?: Maybe<User>;
  deleteOneUser?: Maybe<User>;
  deleteTag?: Maybe<Scalars['Boolean']>;
  addAttachment?: Maybe<Attachment>;
  createDocument: Document;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteTagArgs = {
  value?: Maybe<Scalars['String']>;
};


export type MutationAddAttachmentArgs = {
  docId: Scalars['Int'];
  file?: Maybe<Scalars['Upload']>;
};


export type MutationCreateDocumentArgs = {
  content: Scalars['String'];
  doc_number: Scalars['String'];
  doc_date: Scalars['String'];
  doc_type: Scalars['String'];
  userId: Scalars['Int'];
  hashtag?: TagInput;
  file?: Maybe<Scalars['Upload']>;
};

export type CreateDocumentMutationVariables = Exact<{
  content: Scalars['String'];
  doc_date: Scalars['String'];
  doc_type: Scalars['String'];
  doc_number: Scalars['String'];
  userId: Scalars['Int'];
  file?: Maybe<Scalars['Upload']>;
  hashtag?: Maybe<TagInput>;
}>;


export type CreateDocumentMutation = (
  { __typename?: 'Mutation' }
  & { createDocument: (
    { __typename?: 'Document' }
    & Pick<Document, 'id' | 'content' | 'doc_date' | 'doc_type' | 'doc_number' | 'file_url'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ), tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'value'>
    )> }
  ) }
);

export type AddAtachmentMutationVariables = Exact<{
  docId: Scalars['Int'];
  file: Scalars['Upload'];
}>;


export type AddAtachmentMutation = (
  { __typename?: 'Mutation' }
  & { addAttachment?: Maybe<(
    { __typename?: 'Attachment' }
    & Pick<Attachment, 'id' | 'file_url'>
    & { doc: (
      { __typename?: 'Document' }
      & Pick<Document, 'id' | 'content' | 'doc_number'>
    ) }
  )> }
);

export type SearchQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search?: Maybe<Array<Maybe<(
    { __typename?: 'Document' }
    & Pick<Document, 'id' | 'content' | 'doc_date' | 'doc_type' | 'doc_number' | 'file_url'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), tags: Array<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'id' | 'value'>
    )> }
  )>>> }
);


export const CreateDocumentDocument = gql`
    mutation CreateDocument($content: String!, $doc_date: String!, $doc_type: String!, $doc_number: String!, $userId: Int!, $file: Upload, $hashtag: TagInput) {
  createDocument(content: $content, doc_date: $doc_date, doc_type: $doc_type, doc_number: $doc_number, userId: $userId, file: $file, hashtag: $hashtag) {
    id
    content
    doc_date
    doc_type
    doc_number
    file_url
    user {
      username
    }
    tags {
      value
    }
  }
}
    `;
export type CreateDocumentMutationFn = Apollo.MutationFunction<CreateDocumentMutation, CreateDocumentMutationVariables>;

/**
 * __useCreateDocumentMutation__
 *
 * To run a mutation, you first call `useCreateDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDocumentMutation, { data, loading, error }] = useCreateDocumentMutation({
 *   variables: {
 *      content: // value for 'content'
 *      doc_date: // value for 'doc_date'
 *      doc_type: // value for 'doc_type'
 *      doc_number: // value for 'doc_number'
 *      userId: // value for 'userId'
 *      file: // value for 'file'
 *      hashtag: // value for 'hashtag'
 *   },
 * });
 */
export function useCreateDocumentMutation(baseOptions?: Apollo.MutationHookOptions<CreateDocumentMutation, CreateDocumentMutationVariables>) {
        return Apollo.useMutation<CreateDocumentMutation, CreateDocumentMutationVariables>(CreateDocumentDocument, baseOptions);
      }
export type CreateDocumentMutationHookResult = ReturnType<typeof useCreateDocumentMutation>;
export type CreateDocumentMutationResult = Apollo.MutationResult<CreateDocumentMutation>;
export type CreateDocumentMutationOptions = Apollo.BaseMutationOptions<CreateDocumentMutation, CreateDocumentMutationVariables>;
export const AddAtachmentDocument = gql`
    mutation addAtachment($docId: Int!, $file: Upload!) {
  addAttachment(docId: $docId, file: $file) {
    id
    file_url
    doc {
      id
      content
      doc_number
    }
  }
}
    `;
export type AddAtachmentMutationFn = Apollo.MutationFunction<AddAtachmentMutation, AddAtachmentMutationVariables>;

/**
 * __useAddAtachmentMutation__
 *
 * To run a mutation, you first call `useAddAtachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddAtachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addAtachmentMutation, { data, loading, error }] = useAddAtachmentMutation({
 *   variables: {
 *      docId: // value for 'docId'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useAddAtachmentMutation(baseOptions?: Apollo.MutationHookOptions<AddAtachmentMutation, AddAtachmentMutationVariables>) {
        return Apollo.useMutation<AddAtachmentMutation, AddAtachmentMutationVariables>(AddAtachmentDocument, baseOptions);
      }
export type AddAtachmentMutationHookResult = ReturnType<typeof useAddAtachmentMutation>;
export type AddAtachmentMutationResult = Apollo.MutationResult<AddAtachmentMutation>;
export type AddAtachmentMutationOptions = Apollo.BaseMutationOptions<AddAtachmentMutation, AddAtachmentMutationVariables>;
export const SearchDocument = gql`
    query search($query: String) {
  search(query: $query) {
    id
    content
    doc_date
    doc_type
    doc_number
    file_url
    user {
      id
      username
    }
    tags {
      id
      value
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;