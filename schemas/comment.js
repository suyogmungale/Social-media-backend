import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'reference',
            to: [{ type: 'userProfile' }]
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string'
        })
    ]
});