export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'event_image',
      type: 'image',
      title: 'Event Image',
    },
    {
      name: 'event_title',
      type: 'string',
      title: 'Event Title',
    },
    {
      name: 'event_description',
      type: 'text',
      title: 'Event Description',
    },
    {
      name: 'performers',
      type: 'string',
      title: 'Performers',
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'event_title',
        maxLength: 90,
      },
    },
    {
      name: 'date_time',
      type: 'datetime',
      title: 'Date & Time',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
    },
  ],
}
