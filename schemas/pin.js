import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'string'
        }),
        defineField({
            name: 'destination',
            title: 'Destination',
            type: 'url'
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot:true
            }
        }),
        defineField({
            name: 'userId',
            title: 'UserId',
            type: 'string'
        }),
        defineField({
            name: 'postedBy',
            title: 'PostedBy',
            type: 'reference',
            to: [{type: 'userProfile'}]
        }),
        defineField({
            name: 'savedBy',
            title: 'SavedBy',
            type: 'array',
            of:[{type:'reference', to: [{type: 'userProfile'}]}]
        }),
        defineField({
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of:[{type:'object', fields:[
              {name: 'comment', title: 'Comment', type: 'text'},
              {name: 'postedBy', title: 'Posted By', type: 'reference', to: [{type: 'userProfile'}]}
            ]}]
        })
    ]
});
