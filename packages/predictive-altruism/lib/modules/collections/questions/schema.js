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
        console.log('hi', question)
        return await context.Users.loader.load(question.userId);
      },
      addOriginalField: true,
    },
  },

  title: {
    label: 'Title',
    type: String,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    searchable: true,
  },

  description: {
    label: 'Description',
    type: String,
    optional: true,
    control: 'textarea',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    searchable: true,
  },

  resolutionDate: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    searchable: true,
  },

  result: {
    label: 'Result',
    type: Number,
    optional: true,
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
    searchable: true,
  },
};

export default schema;
