import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'username',
            title: 'Username',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'string'
        })
    ]
});