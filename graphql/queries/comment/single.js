import {
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../getProjection';
import CommentModel from '../../../models/comment';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve(root, params, options) {
    const projection = getProjection(options.fieldASTs[0]);

    return CommentModel
      .findById(params.id)
      .select(projection)
      .exec();
  },
};
