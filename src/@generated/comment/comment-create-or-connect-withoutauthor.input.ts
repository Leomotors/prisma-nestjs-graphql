import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentCreateOrConnectWithoutauthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput;
}