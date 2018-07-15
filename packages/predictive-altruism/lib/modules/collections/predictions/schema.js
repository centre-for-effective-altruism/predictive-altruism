const schema = {

  _id: {
    type: String,
    optional: true,
    // TODO Do we want to limit to members?
    viewableBy: ['guests'],
  },

  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: () => {
      return new Date();
    }
  },

  userId: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'creator',
      type: 'User',
      resolver: async (question, args, context) => {
        return await context.Users.loader.load(question.userId);
      },
      addOriginalField: true,
    },
  },

  confidence: {
    label: 'Confidence',
    type: Number,
    viewableBy: ['guests'],
    insertableBy: ['members'],
  },

  questionId: {
    type: String,
    viewableBy: ['guests'],
    insertableBy: ['members'],

    // TODO resolver?
  }

};

export default schema;
