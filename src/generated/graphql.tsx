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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
  author: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  posts: Array<Post>;
};


export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PostWhereUniqueInput>;
  after?: Maybe<PostWhereUniqueInput>;
};

export type PostUpdateInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  imgUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  username: Scalars['String'];
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
};

export type UserUpdateInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
};

export type PostCreateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereNestedInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateWithoutPostsDataInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
};

export type PostCreateWithoutAuthorInput = {
  title: Scalars['String'];
  content: Scalars['String'];
  imgUrl?: Maybe<Scalars['String']>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
};

export type PostUpdateManyWithWhereNestedInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringFilter>;
  authorId?: Maybe<IntFilter>;
  imgUrl?: Maybe<StringNullableFilter>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostUpdateWithoutAuthorDataInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  imgUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type PostUpdateManyDataInput = {
  title?: Maybe<StringFieldUpdateOperationsInput>;
  content?: Maybe<StringFieldUpdateOperationsInput>;
  imgUrl?: Maybe<NullableStringFieldUpdateOperationsInput>;
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
  not?: Maybe<NestedStringNullableFilter>;
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

export type Query = {
  __typename?: 'Query';
  posts: Array<Post>;
  post?: Maybe<Post>;
  users: Array<User>;
  user?: Maybe<User>;
};


export type QueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<PostWhereUniqueInput>;
  after?: Maybe<PostWhereUniqueInput>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryUsersArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<UserWhereUniqueInput>;
  after?: Maybe<UserWhereUniqueInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewPost: Post;
  updateOnePost?: Maybe<Post>;
  deleteOnePost?: Maybe<Post>;
  createOneUser: User;
  updateOneUser?: Maybe<User>;
};


export type MutationAddNewPostArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  by: Scalars['Int'];
  image?: Maybe<Scalars['Upload']>;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type AddPostMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  by: Scalars['Int'];
  image: Scalars['Upload'];
}>;


export type AddPostMutation = (
  { __typename?: 'Mutation' }
  & { addNewPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'imgUrl'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  ) }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
  ) }
);


export const AddPostDocument = gql`
    mutation AddPost($title: String!, $content: String!, $by: Int!, $image: Upload!) {
  addNewPost(title: $title, content: $content, by: $by, image: $image) {
    id
    title
    content
    author {
      username
    }
    imgUrl
  }
}
    `;
export type AddPostMutationFn = Apollo.MutationFunction<AddPostMutation, AddPostMutationVariables>;

/**
 * __useAddPostMutation__
 *
 * To run a mutation, you first call `useAddPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPostMutation, { data, loading, error }] = useAddPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      by: // value for 'by'
 *      image: // value for 'image'
 *   },
 * });
 */
export function useAddPostMutation(baseOptions?: Apollo.MutationHookOptions<AddPostMutation, AddPostMutationVariables>) {
        return Apollo.useMutation<AddPostMutation, AddPostMutationVariables>(AddPostDocument, baseOptions);
      }
export type AddPostMutationHookResult = ReturnType<typeof useAddPostMutation>;
export type AddPostMutationResult = Apollo.MutationResult<AddPostMutation>;
export type AddPostMutationOptions = Apollo.BaseMutationOptions<AddPostMutation, AddPostMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $email: String!) {
  createOneUser(data: {username: $username, email: $email}) {
    id
    username
    email
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;